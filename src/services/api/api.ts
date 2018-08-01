// tslint:disable
/// <reference path="./custom.d.ts" />

import * as url from "url";
import { Configuration } from "./configuration";

const BASE_PATH = process.env.REACT_APP_BASE_URL || 'http://localhost:8000/v1';

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = window.fetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface MainAuth
 */
export interface MainAuth {
    /**
     * 
     * @type {string}
     * @memberof MainAuth
     */
    created_at?: string;
    /**
     * 
     * @type {number}
     * @memberof MainAuth
     */
    expires_at?: number;
    /**
     * 
     * @type {number}
     * @memberof MainAuth
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MainAuth
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof MainAuth
     */
    updated_at?: string;
    /**
     * 
     * @type {MainUser}
     * @memberof MainAuth
     */
    user?: MainUser;
    /**
     * 
     * @type {number}
     * @memberof MainAuth
     */
    user_id?: number;
}

/**
 * 
 * @export
 * @interface MainAvailableResponse
 */
export interface MainAvailableResponse {
    /**
     * 
     * @type {boolean}
     * @memberof MainAvailableResponse
     */
    is_available?: boolean;
}

/**
 * 
 * @export
 * @interface MainGenericResponse
 */
export interface MainGenericResponse {
    /**
     * 
     * @type {string}
     * @memberof MainGenericResponse
     */
    error?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MainGenericResponse
     */
    success?: boolean;
}

/**
 * 
 * @export
 * @interface MainUnit
 */
export interface MainUnit {
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    editor_type?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    file_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    loc_deleted?: number;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    loc_written?: number;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    os?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    project_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    started_at?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    stopped_at?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    updated_at?: string;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    user_id?: number;
}

/**
 * 
 * @export
 * @interface MainUser
 */
export interface MainUser {
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    created_at?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    editor_token?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    first_name: string;
    /**
     * 
     * @type {number}
     * @memberof MainUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    last_name: string;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    password: string;
    /**
     * 
     * @type {Array<MainUnit>}
     * @memberof MainUser
     */
    units?: Array<MainUnit>;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    updated_at?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUser
     */
    username: string;
}

/**
 * 
 * @export
 * @interface MainVersionResponse
 */
export interface MainVersionResponse {
    /**
     * 
     * @type {string}
     * @memberof MainVersionResponse
     */
    download?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MainVersionResponse
     */
    latest?: boolean;
}


/**
 * AuthApi - fetch parameter creator
 * @export
 */
export const AuthApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(options: any = {}): FetchArgs {
            const localVarPath = `/auth/login`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Allows the user to reset their password with the submitted password
         * @summary Resets a user's password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordPost(options: any = {}): FetchArgs {
            const localVarPath = `/auth/reset-password`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sends an email to the user with a link to reset their password
         * @summary Starts a password reset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPost(options: any = {}): FetchArgs {
            const localVarPath = `/auth/password-reset`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainAuth> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).authLoginPost(options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Allows the user to reset their password with the submitted password
         * @summary Resets a user's password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordPost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainGenericResponse> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).passwordPost(options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Sends an email to the user with a link to reset their password
         * @summary Starts a password reset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainGenericResponse> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).resetPost(options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(options?: any) {
            return AuthApiFp(configuration).authLoginPost(options)(fetch, basePath);
        },
        /**
         * Allows the user to reset their password with the submitted password
         * @summary Resets a user's password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordPost(options?: any) {
            return AuthApiFp(configuration).passwordPost(options)(fetch, basePath);
        },
        /**
         * Sends an email to the user with a link to reset their password
         * @summary Starts a password reset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPost(options?: any) {
            return AuthApiFp(configuration).resetPost(options)(fetch, basePath);
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Authenticates a user and returns a JWT on successful login
     * @summary Authenticates a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authLoginPost(options?: any) {
        return AuthApiFp(this.configuration).authLoginPost(options)(this.fetch, this.basePath);
    }

    /**
     * Allows the user to reset their password with the submitted password
     * @summary Resets a user's password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public passwordPost(options?: any) {
        return AuthApiFp(this.configuration).passwordPost(options)(this.fetch, this.basePath);
    }

    /**
     * Sends an email to the user with a link to reset their password
     * @summary Starts a password reset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public resetPost(options?: any) {
        return AuthApiFp(this.configuration).resetPost(options)(this.fetch, this.basePath);
    }

}

/**
 * CoreApi - fetch parameter creator
 * @export
 */
export const CoreApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint takes a few parameters and with those parameters, it looks to see if
         * @summary Returns a link of the latest version of the Core app
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {string} currentVersion Current core version in client
         * @param {string} os The client OS
         * @param {string} arch The client architecture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, currentVersion: string, os: string, arch: string, options: any = {}): FetchArgs {
            // verify required parameter 'X_Hackerlog_EditorToken' is not null or undefined
            if (X_Hackerlog_EditorToken === null || X_Hackerlog_EditorToken === undefined) {
                throw new RequiredError('X_Hackerlog_EditorToken','Required parameter X_Hackerlog_EditorToken was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'currentVersion' is not null or undefined
            if (currentVersion === null || currentVersion === undefined) {
                throw new RequiredError('currentVersion','Required parameter currentVersion was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'os' is not null or undefined
            if (os === null || os === undefined) {
                throw new RequiredError('os','Required parameter os was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'arch' is not null or undefined
            if (arch === null || arch === undefined) {
                throw new RequiredError('arch','Required parameter arch was null or undefined when calling coreVersionGet.');
            }
            const localVarPath = `/core/version`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (currentVersion !== undefined) {
                localVarQueryParameter['currentVersion'] = currentVersion;
            }

            if (os !== undefined) {
                localVarQueryParameter['os'] = os;
            }

            if (arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }

            if (X_Hackerlog_EditorToken !== undefined && X_Hackerlog_EditorToken !== null) {
                localVarHeaderParameter['X-Hackerlog-EditorToken'] = String(X_Hackerlog_EditorToken);
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CoreApi - functional programming interface
 * @export
 */
export const CoreApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint takes a few parameters and with those parameters, it looks to see if
         * @summary Returns a link of the latest version of the Core app
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {string} currentVersion Current core version in client
         * @param {string} os The client OS
         * @param {string} arch The client architecture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, currentVersion: string, os: string, arch: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainVersionResponse> {
            const localVarFetchArgs = CoreApiFetchParamCreator(configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * CoreApi - factory interface
 * @export
 */
export const CoreApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * This endpoint takes a few parameters and with those parameters, it looks to see if
         * @summary Returns a link of the latest version of the Core app
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {string} currentVersion Current core version in client
         * @param {string} os The client OS
         * @param {string} arch The client architecture
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, currentVersion: string, os: string, arch: string, options?: any) {
            return CoreApiFp(configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options)(fetch, basePath);
        },
    };
};

/**
 * CoreApi - object-oriented interface
 * @export
 * @class CoreApi
 * @extends {BaseAPI}
 */
export class CoreApi extends BaseAPI {
    /**
     * This endpoint takes a few parameters and with those parameters, it looks to see if
     * @summary Returns a link of the latest version of the Core app
     * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
     * @param {string} currentVersion Current core version in client
     * @param {string} os The client OS
     * @param {string} arch The client architecture
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApi
     */
    public coreVersionGet(X_Hackerlog_EditorToken: string, currentVersion: string, os: string, arch: string, options?: any) {
        return CoreApiFp(this.configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options)(this.fetch, this.basePath);
    }

}

/**
 * MailingListApi - fetch parameter creator
 * @export
 */
export const MailingListApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options: any = {}): FetchArgs {
            const localVarPath = `/mailing-list`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MailingListApi - functional programming interface
 * @export
 */
export const MailingListApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainGenericResponse> {
            const localVarFetchArgs = MailingListApiFetchParamCreator(configuration).listPost(options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * MailingListApi - factory interface
 * @export
 */
export const MailingListApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options?: any) {
            return MailingListApiFp(configuration).listPost(options)(fetch, basePath);
        },
    };
};

/**
 * MailingListApi - object-oriented interface
 * @export
 * @class MailingListApi
 * @extends {BaseAPI}
 */
export class MailingListApi extends BaseAPI {
    /**
     * This adds a user to the mailing list
     * @summary Adds a user to the mailing list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListApi
     */
    public listPost(options?: any) {
        return MailingListApiFp(this.configuration).listPost(options)(this.fetch, this.basePath);
    }

}

/**
 * UnitsApi - fetch parameter creator
 * @export
 */
export const UnitsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken: string, options: any = {}): FetchArgs {
            // verify required parameter 'X_Hackerlog_EditorToken' is not null or undefined
            if (X_Hackerlog_EditorToken === null || X_Hackerlog_EditorToken === undefined) {
                throw new RequiredError('X_Hackerlog_EditorToken','Required parameter X_Hackerlog_EditorToken was null or undefined when calling unitsGet.');
            }
            const localVarPath = `/units`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (X_Hackerlog_EditorToken !== undefined && X_Hackerlog_EditorToken !== null) {
                localVarHeaderParameter['X-Hackerlog-EditorToken'] = String(X_Hackerlog_EditorToken);
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UnitsApi - functional programming interface
 * @export
 */
export const UnitsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MainUnit>> {
            const localVarFetchArgs = UnitsApiFetchParamCreator(configuration).unitsGet(X_Hackerlog_EditorToken, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * UnitsApi - factory interface
 * @export
 */
export const UnitsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken: string, options?: any) {
            return UnitsApiFp(configuration).unitsGet(X_Hackerlog_EditorToken, options)(fetch, basePath);
        },
    };
};

/**
 * UnitsApi - object-oriented interface
 * @export
 * @class UnitsApi
 * @extends {BaseAPI}
 */
export class UnitsApi extends BaseAPI {
    /**
     * This gets all of the units of work for a specific user. The user is identified by the
     * @summary Gets units of work for a user
     * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public unitsGet(X_Hackerlog_EditorToken: string, options?: any) {
        return UnitsApiFp(this.configuration).unitsGet(X_Hackerlog_EditorToken, options)(this.fetch, this.basePath);
    }

}

/**
 * UsersApi - fetch parameter creator
 * @export
 */
export const UsersApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersEmailGet(q?: string, options: any = {}): FetchArgs {
            const localVarPath = `/users/email`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finds a user given their editor token as a path param
         * @summary Gets a user by their editor token
         * @param {any} editor User&#39;s Editor Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(editor: any, options: any = {}): FetchArgs {
            // verify required parameter 'editor' is not null or undefined
            if (editor === null || editor === undefined) {
                throw new RequiredError('editor','Required parameter editor was null or undefined when calling usersGet.');
            }
            const localVarPath = `/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(editor || {}) : (editor || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Finds a user given their ID as a path param
         * @summary Gets a user by their ID
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling usersIdGet.');
            }
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a user with the body params that are passed in
         * @summary Creates/Registers a user
         * @param {MainUser} user User object: first_name, last_name, email, password, username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(user: MainUser, options: any = {}): FetchArgs {
            // verify required parameter 'user' is not null or undefined
            if (user === null || user === undefined) {
                throw new RequiredError('user','Required parameter user was null or undefined when calling usersPost.');
            }
            const localVarPath = `/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"MainUser" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(user || {}) : (user || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if a username is available and responds as such
         * @summary Checks if a username is available
         * @param {string} [q] Username search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersUsernameGet(q?: string, options: any = {}): FetchArgs {
            const localVarPath = `/users/username`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersEmailGet(q?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainAvailableResponse> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersEmailGet(q, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Finds a user given their editor token as a path param
         * @summary Gets a user by their editor token
         * @param {any} editor User&#39;s Editor Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(editor: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainUser> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersGet(editor, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Finds a user given their ID as a path param
         * @summary Gets a user by their ID
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainUser> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersIdGet(id, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Creates a user with the body params that are passed in
         * @summary Creates/Registers a user
         * @param {MainUser} user User object: first_name, last_name, email, password, username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(user: MainUser, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainUser> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersPost(user, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Checks if a username is available and responds as such
         * @summary Checks if a username is available
         * @param {string} [q] Username search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersUsernameGet(q?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainAvailableResponse> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersUsernameGet(q, options);
            return (fetch: FetchAPI = window.fetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersEmailGet(q?: string, options?: any) {
            return UsersApiFp(configuration).usersEmailGet(q, options)(fetch, basePath);
        },
        /**
         * Finds a user given their editor token as a path param
         * @summary Gets a user by their editor token
         * @param {any} editor User&#39;s Editor Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(editor: any, options?: any) {
            return UsersApiFp(configuration).usersGet(editor, options)(fetch, basePath);
        },
        /**
         * Finds a user given their ID as a path param
         * @summary Gets a user by their ID
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIdGet(id: number, options?: any) {
            return UsersApiFp(configuration).usersIdGet(id, options)(fetch, basePath);
        },
        /**
         * Creates a user with the body params that are passed in
         * @summary Creates/Registers a user
         * @param {MainUser} user User object: first_name, last_name, email, password, username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(user: MainUser, options?: any) {
            return UsersApiFp(configuration).usersPost(user, options)(fetch, basePath);
        },
        /**
         * Checks if a username is available and responds as such
         * @summary Checks if a username is available
         * @param {string} [q] Username search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersUsernameGet(q?: string, options?: any) {
            return UsersApiFp(configuration).usersUsernameGet(q, options)(fetch, basePath);
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Checks if an email is available and responds as such
     * @summary Checks if an email is available
     * @param {string} [q] email search using q as key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersEmailGet(q?: string, options?: any) {
        return UsersApiFp(this.configuration).usersEmailGet(q, options)(this.fetch, this.basePath);
    }

    /**
     * Finds a user given their editor token as a path param
     * @summary Gets a user by their editor token
     * @param {any} editor User&#39;s Editor Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersGet(editor: any, options?: any) {
        return UsersApiFp(this.configuration).usersGet(editor, options)(this.fetch, this.basePath);
    }

    /**
     * Finds a user given their ID as a path param
     * @summary Gets a user by their ID
     * @param {number} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersIdGet(id: number, options?: any) {
        return UsersApiFp(this.configuration).usersIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * Creates a user with the body params that are passed in
     * @summary Creates/Registers a user
     * @param {MainUser} user User object: first_name, last_name, email, password, username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPost(user: MainUser, options?: any) {
        return UsersApiFp(this.configuration).usersPost(user, options)(this.fetch, this.basePath);
    }

    /**
     * Checks if a username is available and responds as such
     * @summary Checks if a username is available
     * @param {string} [q] Username search using q as key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersUsernameGet(q?: string, options?: any) {
        return UsersApiFp(this.configuration).usersUsernameGet(q, options)(this.fetch, this.basePath);
    }

}

