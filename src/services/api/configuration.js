"use strict";
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    constructor(param = {}) {
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
}
exports.Configuration = Configuration;
