"use strict";
// tslint:disable
/// <reference path="./custom.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const BASE_PATH = process.env.REACT_APP_BASE_URL || 'http://localhost:8000/v1';
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, fetch = window.fetch) {
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
    }
}
exports.RequiredError = RequiredError;
/**
 * AuthApi - fetch parameter creator
 * @export
 */
exports.AuthApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(options = {}) {
            const localVarPath = `/auth/login`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
        passwordReset(options = {}) {
            const localVarPath = `/auth/password-reset`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
        resetPassword(options = {}) {
            const localVarPath = `/auth/reset-password`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AuthApi - functional programming interface
 * @export
 */
exports.AuthApiFp = function (configuration) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(options) {
            const localVarFetchArgs = exports.AuthApiFetchParamCreator(configuration).login(options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        passwordReset(options) {
            const localVarFetchArgs = exports.AuthApiFetchParamCreator(configuration).passwordReset(options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        resetPassword(options) {
            const localVarFetchArgs = exports.AuthApiFetchParamCreator(configuration).resetPassword(options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * AuthApi - factory interface
 * @export
 */
exports.AuthApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * Authenticates a user and returns a JWT on successful login
         * @summary Authenticates a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(options) {
            return exports.AuthApiFp(configuration).login(options)(fetch, basePath);
        },
        /**
         * Sends an email to the user with a link to reset their password
         * @summary Starts a password reset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passwordReset(options) {
            return exports.AuthApiFp(configuration).passwordReset(options)(fetch, basePath);
        },
        /**
         * Allows the user to reset their password with the submitted password
         * @summary Resets a user's password
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPassword(options) {
            return exports.AuthApiFp(configuration).resetPassword(options)(fetch, basePath);
        },
    };
};
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
class AuthApi extends BaseAPI {
    /**
     * Authenticates a user and returns a JWT on successful login
     * @summary Authenticates a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    login(options) {
        return exports.AuthApiFp(this.configuration).login(options)(this.fetch, this.basePath);
    }
    /**
     * Sends an email to the user with a link to reset their password
     * @summary Starts a password reset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    passwordReset(options) {
        return exports.AuthApiFp(this.configuration).passwordReset(options)(this.fetch, this.basePath);
    }
    /**
     * Allows the user to reset their password with the submitted password
     * @summary Resets a user's password
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    resetPassword(options) {
        return exports.AuthApiFp(this.configuration).resetPassword(options)(this.fetch, this.basePath);
    }
}
exports.AuthApi = AuthApi;
/**
 * CoreApi - fetch parameter creator
 * @export
 */
exports.CoreApiFetchParamCreator = function (configuration) {
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
        coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options = {}) {
            // verify required parameter 'X_Hackerlog_EditorToken' is not null or undefined
            if (X_Hackerlog_EditorToken === null || X_Hackerlog_EditorToken === undefined) {
                throw new RequiredError('X_Hackerlog_EditorToken', 'Required parameter X_Hackerlog_EditorToken was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'currentVersion' is not null or undefined
            if (currentVersion === null || currentVersion === undefined) {
                throw new RequiredError('currentVersion', 'Required parameter currentVersion was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'os' is not null or undefined
            if (os === null || os === undefined) {
                throw new RequiredError('os', 'Required parameter os was null or undefined when calling coreVersionGet.');
            }
            // verify required parameter 'arch' is not null or undefined
            if (arch === null || arch === undefined) {
                throw new RequiredError('arch', 'Required parameter arch was null or undefined when calling coreVersionGet.');
            }
            const localVarPath = `/core/version`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
    };
};
/**
 * CoreApi - functional programming interface
 * @export
 */
exports.CoreApiFp = function (configuration) {
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
        coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options) {
            const localVarFetchArgs = exports.CoreApiFetchParamCreator(configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * CoreApi - factory interface
 * @export
 */
exports.CoreApiFactory = function (configuration, fetch, basePath) {
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
        coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options) {
            return exports.CoreApiFp(configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options)(fetch, basePath);
        },
    };
};
/**
 * CoreApi - object-oriented interface
 * @export
 * @class CoreApi
 * @extends {BaseAPI}
 */
class CoreApi extends BaseAPI {
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
    coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options) {
        return exports.CoreApiFp(this.configuration).coreVersionGet(X_Hackerlog_EditorToken, currentVersion, os, arch, options)(this.fetch, this.basePath);
    }
}
exports.CoreApi = CoreApi;
/**
 * MailingListApi - fetch parameter creator
 * @export
 */
exports.MailingListApiFetchParamCreator = function (configuration) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options = {}) {
            const localVarPath = `/mailing-list`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * MailingListApi - functional programming interface
 * @export
 */
exports.MailingListApiFp = function (configuration) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options) {
            const localVarFetchArgs = exports.MailingListApiFetchParamCreator(configuration).listPost(options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * MailingListApi - factory interface
 * @export
 */
exports.MailingListApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * This adds a user to the mailing list
         * @summary Adds a user to the mailing list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPost(options) {
            return exports.MailingListApiFp(configuration).listPost(options)(fetch, basePath);
        },
    };
};
/**
 * MailingListApi - object-oriented interface
 * @export
 * @class MailingListApi
 * @extends {BaseAPI}
 */
class MailingListApi extends BaseAPI {
    /**
     * This adds a user to the mailing list
     * @summary Adds a user to the mailing list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MailingListApi
     */
    listPost(options) {
        return exports.MailingListApiFp(this.configuration).listPost(options)(this.fetch, this.basePath);
    }
}
exports.MailingListApi = MailingListApi;
/**
 * UnitsApi - fetch parameter creator
 * @export
 */
exports.UnitsApiFetchParamCreator = function (configuration) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken, options = {}) {
            // verify required parameter 'X_Hackerlog_EditorToken' is not null or undefined
            if (X_Hackerlog_EditorToken === null || X_Hackerlog_EditorToken === undefined) {
                throw new RequiredError('X_Hackerlog_EditorToken', 'Required parameter X_Hackerlog_EditorToken was null or undefined when calling unitsGet.');
            }
            const localVarPath = `/units`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
    };
};
/**
 * UnitsApi - functional programming interface
 * @export
 */
exports.UnitsApiFp = function (configuration) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken, options) {
            const localVarFetchArgs = exports.UnitsApiFetchParamCreator(configuration).unitsGet(X_Hackerlog_EditorToken, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * UnitsApi - factory interface
 * @export
 */
exports.UnitsApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * This gets all of the units of work for a specific user. The user is identified by the
         * @summary Gets units of work for a user
         * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(X_Hackerlog_EditorToken, options) {
            return exports.UnitsApiFp(configuration).unitsGet(X_Hackerlog_EditorToken, options)(fetch, basePath);
        },
    };
};
/**
 * UnitsApi - object-oriented interface
 * @export
 * @class UnitsApi
 * @extends {BaseAPI}
 */
class UnitsApi extends BaseAPI {
    /**
     * This gets all of the units of work for a specific user. The user is identified by the
     * @summary Gets units of work for a user
     * @param {string} X_Hackerlog_EditorToken X-Hackerlog-EditorToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    unitsGet(X_Hackerlog_EditorToken, options) {
        return exports.UnitsApiFp(this.configuration).unitsGet(X_Hackerlog_EditorToken, options)(this.fetch, this.basePath);
    }
}
exports.UnitsApi = UnitsApi;
/**
 * UsersApi - fetch parameter creator
 * @export
 */
exports.UsersApiFetchParamCreator = function (configuration) {
    return {
        /**
         * Adds a profile image to a user
         * @summary Add Profile Image
         * @param {string} id The ID of the user
         * @param {any} image_url The URL of the profile image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addProfileImage(id, image_url, options = {}) {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id', 'Required parameter id was null or undefined when calling addProfileImage.');
            }
            // verify required parameter 'image_url' is not null or undefined
            if (image_url === null || image_url === undefined) {
                throw new RequiredError('image_url', 'Required parameter image_url was null or undefined when calling addProfileImage.');
            }
            const localVarPath = `/users/{id}}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PATCH' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = ("any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(image_url || {}) : (image_url || "");
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
        createUser(user, options = {}) {
            // verify required parameter 'user' is not null or undefined
            if (user === null || user === undefined) {
                throw new RequiredError('user', 'Required parameter user was null or undefined when calling createUser.');
            }
            const localVarPath = `/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = ("MainUser" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(user || {}) : (user || "");
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
        findUser(id, options = {}) {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id', 'Required parameter id was null or undefined when calling findUser.');
            }
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
        fundUserByEditorToken(editor, options = {}) {
            // verify required parameter 'editor' is not null or undefined
            if (editor === null || editor === undefined) {
                throw new RequiredError('editor', 'Required parameter editor was null or undefined when calling fundUserByEditorToken.');
            }
            const localVarPath = `/users`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = ("any" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(editor || {}) : (editor || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isEmailAvailable(q, options = {}) {
            const localVarPath = `/users/email`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
         * Checks if a username is available and responds as such
         * @summary Checks if a username is available
         * @param {string} [q] Username search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isUsernameAvailable(q, options = {}) {
            const localVarPath = `/users/username`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
    };
};
/**
 * UsersApi - functional programming interface
 * @export
 */
exports.UsersApiFp = function (configuration) {
    return {
        /**
         * Adds a profile image to a user
         * @summary Add Profile Image
         * @param {string} id The ID of the user
         * @param {any} image_url The URL of the profile image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addProfileImage(id, image_url, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).addProfileImage(id, image_url, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        createUser(user, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).createUser(user, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        findUser(id, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).findUser(id, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        fundUserByEditorToken(editor, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).fundUserByEditorToken(editor, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isEmailAvailable(q, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).isEmailAvailable(q, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
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
        isUsernameAvailable(q, options) {
            const localVarFetchArgs = exports.UsersApiFetchParamCreator(configuration).isUsernameAvailable(q, options);
            return (fetch = window.fetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * UsersApi - factory interface
 * @export
 */
exports.UsersApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         * Adds a profile image to a user
         * @summary Add Profile Image
         * @param {string} id The ID of the user
         * @param {any} image_url The URL of the profile image
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addProfileImage(id, image_url, options) {
            return exports.UsersApiFp(configuration).addProfileImage(id, image_url, options)(fetch, basePath);
        },
        /**
         * Creates a user with the body params that are passed in
         * @summary Creates/Registers a user
         * @param {MainUser} user User object: first_name, last_name, email, password, username
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(user, options) {
            return exports.UsersApiFp(configuration).createUser(user, options)(fetch, basePath);
        },
        /**
         * Finds a user given their ID as a path param
         * @summary Gets a user by their ID
         * @param {number} id User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findUser(id, options) {
            return exports.UsersApiFp(configuration).findUser(id, options)(fetch, basePath);
        },
        /**
         * Finds a user given their editor token as a path param
         * @summary Gets a user by their editor token
         * @param {any} editor User&#39;s Editor Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fundUserByEditorToken(editor, options) {
            return exports.UsersApiFp(configuration).fundUserByEditorToken(editor, options)(fetch, basePath);
        },
        /**
         * Checks if an email is available and responds as such
         * @summary Checks if an email is available
         * @param {string} [q] email search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isEmailAvailable(q, options) {
            return exports.UsersApiFp(configuration).isEmailAvailable(q, options)(fetch, basePath);
        },
        /**
         * Checks if a username is available and responds as such
         * @summary Checks if a username is available
         * @param {string} [q] Username search using q as key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        isUsernameAvailable(q, options) {
            return exports.UsersApiFp(configuration).isUsernameAvailable(q, options)(fetch, basePath);
        },
    };
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
class UsersApi extends BaseAPI {
    /**
     * Adds a profile image to a user
     * @summary Add Profile Image
     * @param {string} id The ID of the user
     * @param {any} image_url The URL of the profile image
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    addProfileImage(id, image_url, options) {
        return exports.UsersApiFp(this.configuration).addProfileImage(id, image_url, options)(this.fetch, this.basePath);
    }
    /**
     * Creates a user with the body params that are passed in
     * @summary Creates/Registers a user
     * @param {MainUser} user User object: first_name, last_name, email, password, username
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    createUser(user, options) {
        return exports.UsersApiFp(this.configuration).createUser(user, options)(this.fetch, this.basePath);
    }
    /**
     * Finds a user given their ID as a path param
     * @summary Gets a user by their ID
     * @param {number} id User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    findUser(id, options) {
        return exports.UsersApiFp(this.configuration).findUser(id, options)(this.fetch, this.basePath);
    }
    /**
     * Finds a user given their editor token as a path param
     * @summary Gets a user by their editor token
     * @param {any} editor User&#39;s Editor Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    fundUserByEditorToken(editor, options) {
        return exports.UsersApiFp(this.configuration).fundUserByEditorToken(editor, options)(this.fetch, this.basePath);
    }
    /**
     * Checks if an email is available and responds as such
     * @summary Checks if an email is available
     * @param {string} [q] email search using q as key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    isEmailAvailable(q, options) {
        return exports.UsersApiFp(this.configuration).isEmailAvailable(q, options)(this.fetch, this.basePath);
    }
    /**
     * Checks if a username is available and responds as such
     * @summary Checks if a username is available
     * @param {string} [q] Username search using q as key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    isUsernameAvailable(q, options) {
        return exports.UsersApiFp(this.configuration).isUsernameAvailable(q, options)(this.fetch, this.basePath);
    }
}
exports.UsersApi = UsersApi;
