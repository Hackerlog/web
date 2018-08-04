/* eslint-disable */
import Raven from 'raven-js';

class Logger {
  static levels = {
    debug: 'debug',
    info: 'info',
    warn: 'warn',
    error: 'error',
  };

  levelAmount = {
    [Logger.levels.debug]: 0,
    [Logger.levels.info]: 1,
    [Logger.levels.warn]: 2,
    [Logger.levels.error]: 4,
  };

  isDebugging = process.env.NODE_ENV !== 'production';

  constructor() {
    const level = this.isDebugging ? Logger.levels.debug : Logger.levels.warn;
    this.setLevel(level);
    this.initSentry();
  }

  setLevel(level) {
    this.level = level;
  }

  setUserContext(email, id = null) {
    Raven.setUserContext({
      email,
      id,
    });
  }

  log(level, msg) {
    if (this.levelAmount[level] >= this.levelAmount[this.level]) {
      msg = `[Hackerlog] [${level.toUpperCase()}] ${msg}`;
      if (level === Logger.levels.debug) {
        console.log(msg);
      }
      if (level === Logger.levels.info) {
        console.info(msg);
      }
      if (level === Logger.levels.warn) {
        console.warn(msg);
      }
      if (level === Logger.levels.error) {
        console.error(msg);
      }
    }
  }

  debug(msg) {
    this.log(Logger.levels.debug, msg);
  }

  info(msg) {
    this.log(Logger.levels.info, msg);
  }

  warn(msg) {
    this.sendToSentry(msg);
    this.log(Logger.levels.warn, msg);
  }

  error(msg, err = null) {
    this.log(Logger.levels.error, msg);
    this.sendToSentry(msg);
    if (err && !this.isDebugging) {
      Raven.captureException(err);
    }
  }

  initSentry() {
    if (!this.isDebugging) {
      const dsn = process.env.REACT_APP_SENTRY_DSN || '';
      Raven.config(dsn, {
        release: this.getVersion(),
      }).install();
    }
  }

  getVersion() {
    const context = process.env.REACT_APP_CONTEXT;
    const branch = process.env.REACT_APP_BRANCH;
    const hash = process.env.REACT_APP_COMMIT_REF;
    return `${context}-${branch}-${hash}`;
  }

  sendToSentry(msg) {
    if (!this.isDebugging) {
      Raven.captureMessage(msg);
    }
  }
}

export default new Logger();
