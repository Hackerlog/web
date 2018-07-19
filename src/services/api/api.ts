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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, options: any = {}): FetchArgs {
            // verify required parameter 'X_Hackerlog_EditorToken' is not null or undefined
            if (X_Hackerlog_EditorToken === null || X_Hackerlog_EditorToken === undefined) {
                throw new RequiredError('X_Hackerlog_EditorToken','Required parameter X_Hackerlog_EditorToken was null or undefined when calling coreVersionGet.');
            }
            const localVarPath = `/core/version`;
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
 * CoreApi - functional programming interface
 * @export
 */
export const CoreApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint takes a few parameters and with those parameters, it looks to see if
         * @summary Returns a link of the latest version of the Core app
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainVersionResponse> {
            const localVarFetchArgs = CoreApiFetchParamCreator(configuration).coreVersionGet(X_Hackerlog_EditorToken, options);
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(X_Hackerlog_EditorToken: string, options?: any) {
            return CoreApiFp(configuration).coreVersionGet(X_Hackerlog_EditorToken, options)(fetch, basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApi
     */
    public coreVersionGet(X_Hackerlog_EditorToken: string, options?: any) {
        return CoreApiFp(this.configuration).coreVersionGet(X_Hackerlog_EditorToken, options)(this.fetch, this.basePath);
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
         * @param {any} email Email
         * @param {any} first_name First Name
         * @param {any} last_name Last Name
         * @param {any} password Password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(email: any, first_name: any, last_name: any, password: any, options: any = {}): FetchArgs {
            // verify required parameter 'email' is not null or undefined
            if (email === null || email === undefined) {
                throw new RequiredError('email','Required parameter email was null or undefined when calling usersPost.');
            }
            // verify required parameter 'first_name' is not null or undefined
            if (first_name === null || first_name === undefined) {
                throw new RequiredError('first_name','Required parameter first_name was null or undefined when calling usersPost.');
            }
            // verify required parameter 'last_name' is not null or undefined
            if (last_name === null || last_name === undefined) {
                throw new RequiredError('last_name','Required parameter last_name was null or undefined when calling usersPost.');
            }
            // verify required parameter 'password' is not null or undefined
            if (password === null || password === undefined) {
                throw new RequiredError('password','Required parameter password was null or undefined when calling usersPost.');
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
            const needsSerialization = (<any>"any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(password || {}) : (password || "");

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
         * @param {any} email Email
         * @param {any} first_name First Name
         * @param {any} last_name Last Name
         * @param {any} password Password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(email: any, first_name: any, last_name: any, password: any, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainUser> {
            const localVarFetchArgs = UsersApiFetchParamCreator(configuration).usersPost(email, first_name, last_name, password, options);
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
         * @param {any} email Email
         * @param {any} first_name First Name
         * @param {any} last_name Last Name
         * @param {any} password Password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersPost(email: any, first_name: any, last_name: any, password: any, options?: any) {
            return UsersApiFp(configuration).usersPost(email, first_name, last_name, password, options)(fetch, basePath);
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
     * @param {any} email Email
     * @param {any} first_name First Name
     * @param {any} last_name Last Name
     * @param {any} password Password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersPost(email: any, first_name: any, last_name: any, password: any, options?: any) {
        return UsersApiFp(this.configuration).usersPost(email, first_name, last_name, password, options)(this.fetch, this.basePath);
    }

}

