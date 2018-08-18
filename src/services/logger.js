/* eslint-disable */
import Raven from 'raven-js';

export default class Logger {
  static levels = {
    test: 'test',
    debug: 'debug',
    info: 'info',
    warn: 'warn',
    error: 'error',
  };

  level = 'warn';

  levelAmount = {
    [Logger.levels.test]: -1,
    [Logger.levels.debug]: 0,
    [Logger.levels.info]: 1,
    [Logger.levels.warn]: 2,
    [Logger.levels.error]: 4,
  };

  get env() {
    if (this.isTesting()) {
      return Logger.levels.test;
    }

    return this.isDebugging ? Logger.levels.debug : Logger.levels.warn;
  }

  constructor() {
    this.setLevel(this.env);
    this.initSentry();
  }

  isDebugging = () => process.env.NODE_ENV !== 'production';

  isTesting = () => process.env.NODE_ENV === 'test';

  setUserContext(email, id) {
    const context = {
      email,
      id: '',
    };

    if (id) {
      context.id = id;
    }

    Raven.setUserContext(context);
  }

  static getVersion() {
    const context = process.env.REACT_APP_CONTEXT;
    const branch = process.env.REACT_APP_BRANCH;
    const hash = process.env.REACT_APP_COMMIT_REF;

    if (context && branch && hash) {
      return `${context}-${branch}-${hash}`;
    }

    return '';
  }

  setLevel(level) {
    this.level = level;
  }

  log(level, message = '', error) {
    if (this.levelAmount[level] >= this.levelAmount[this.level]) {
      const logMessage = `[Hackerlog | ${level.toUpperCase()}]: ${message}`;
      // Do not log messages when testing
      if (!this.isTesting()) {
        switch (level) {
          case Logger.levels.test:
            break;
          case Logger.levels.debug:
            console.log(logMessage, error);
            break;
          case Logger.levels.info:
            console.info(logMessage, error);
            break;
          case Logger.levels.warn:
            console.warn(logMessage, error);
            break;
          case Logger.levels.error:
            console.error(logMessage, error);
            break;
          default:
            break;
        }
      }
    }
  }

  debug(msg, error) {
    this.log(Logger.levels.debug, msg, error);
  }

  info(msg, error) {
    this.log(Logger.levels.info, msg, error);
  }

  warn(msg, error) {
    this.sendToSentry(msg);
    this.log(Logger.levels.warn, msg, error);
  }

  error(msg, error) {
    this.log(Logger.levels.error, msg, error);
    this.sendToSentry(msg);
    if (error && !this.isDebugging) {
      Raven.captureException(error);
    }
  }

  initSentry() {
    if (!this.isDebugging) {
      const dsn = process.env.REACT_APP_SENTRY_DSN || '';
      Raven.config(dsn, {
        release: Logger.getVersion(),
      }).install();
    }
  }

  sendToSentry(msg) {
    if (!this.isDebugging) {
      Raven.captureMessage(msg);
    }
  }
}
