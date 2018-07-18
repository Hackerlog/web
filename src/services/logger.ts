// tslint:disable:no-console
import * as Raven from 'raven-js';

export enum Levels {
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
}

class Logger {
  private level: Levels;
  private levelAmount = {
    [Levels.debug]: 0,
    [Levels.info]: 1,
    [Levels.warn]: 2,
    [Levels.error]: 4,
  };
  private isDebugging = process.env.NODE_ENV !== 'production';

  constructor() {
    const level = this.isDebugging ? Levels.debug : Levels.warn;
    this.setLevel(level);
    this.initSentry();
  }

  public setLevel(level: Levels): void {
    this.level = level;
  }

  public setUserContext(id: number, email: string): void {
    Raven.setUserContext({
      id,
      email,
    });
  }

  public log(level: string, msg: string): void {
    if (this.levelAmount[level] >= this.levelAmount[this.level]) {
      msg = '[Hackerlog] [' + level.toUpperCase() + '] ' + msg;
      if (level === Levels.debug) {
        console.log(msg);
      }
      if (level === Levels.info) {
        console.info(msg);
      }
      if (level === Levels.warn) {
        console.warn(msg);
      }
      if (level === Levels.error) {
        console.error(msg);
      }
    }
  }

  public debug(msg: string): void {
    this.log(Levels.debug, msg);
  }

  public info(msg: string): void {
    this.log(Levels.info, msg);
  }

  public warn(msg: string): void {
    this.sendToSentry(msg);
    this.log(Levels.warn, msg);
  }

  public error(msg: string, err: Error | null = null): void {
    this.log(Levels.error, msg);
    this.sendToSentry(msg);
    if (err && !this.isDebugging) {
      Raven.captureException(err);
    }
  }

  private initSentry(): void {
    if (!this.isDebugging) {
      const dsn = process.env.REACT_APP_SENTRY_DSN || '';
      Raven.config(dsn, {
        release: this.getVersion(),
      }).install();
    }
  }

  // FIXME: fix this properly
  private getVersion(): string {
    return '0.1';
  }

  private sendToSentry(msg: string): void {
    if (!this.isDebugging) {
      Raven.captureMessage(msg);
    }
  }
}

export default new Logger();
