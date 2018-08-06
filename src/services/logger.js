// @flow
/* eslint-disable */
import Raven from 'raven-js';

type Levels = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  static levels = {
    debug: 'debug',
    info: 'info',
    warn: 'warn',
    error: 'error',
  };

  level: Levels = 'warn';

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

  setLevel(level: Levels) {
    this.level = level;
  }

  setUserContext(email: string, id?: string) {
    const context = {
      email,
      id: '',
    };

    if (id) {
      context.id = id;
    }

    Raven.setUserContext(context);
  }

  log(level: Levels, msg: string) {
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

  debug(msg: string) {
    this.log(Logger.levels.debug, msg);
  }

  info(msg: string) {
    this.log(Logger.levels.info, msg);
  }

  warn(msg: string) {
    this.sendToSentry(msg);
    this.log(Logger.levels.warn, msg);
  }

  error(msg: string, err?: Error) {
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

  getVersion(): string {
    const context = process.env.REACT_APP_CONTEXT;
    const branch = process.env.REACT_APP_BRANCH;
    const hash = process.env.REACT_APP_COMMIT_REF;

    if (context && branch && hash) {
      return `${context}-${branch}-${hash}`;
    }

    return '';
  }

  sendToSentry(msg: string) {
    if (!this.isDebugging) {
      Raven.captureMessage(msg);
    }
  }
}

export default new Logger();
