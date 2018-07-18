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
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    editorType?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    fileName?: string;
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
    locDeleted?: number;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    locWritten?: number;
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
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    startedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    stoppedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof MainUnit
     */
    updatedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof MainUnit
     */
    userId?: number;
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
 * CoreApi - fetch parameter creator
 * @export
 */
export const CoreApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint takes a few parameters and with those parameters, it looks to see if
         * @summary Returns a link of the latest version of the Core app
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(xHackerlogEditorToken: string, options: any = {}): FetchArgs {
            // verify required parameter 'xHackerlogEditorToken' is not null or undefined
            if (xHackerlogEditorToken === null || xHackerlogEditorToken === undefined) {
                throw new RequiredError('xHackerlogEditorToken','Required parameter xHackerlogEditorToken was null or undefined when calling coreVersionGet.');
            }
            const localVarPath = `/core/version`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xHackerlogEditorToken !== undefined && xHackerlogEditorToken !== null) {
                localVarHeaderParameter['X-Hackerlog-EditorToken'] = String(xHackerlogEditorToken);
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
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(xHackerlogEditorToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<MainVersionResponse> {
            const localVarFetchArgs = CoreApiFetchParamCreator(configuration).coreVersionGet(xHackerlogEditorToken, options);
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
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        coreVersionGet(xHackerlogEditorToken: string, options?: any) {
            return CoreApiFp(configuration).coreVersionGet(xHackerlogEditorToken, options)(fetch, basePath);
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
     * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoreApi
     */
    public coreVersionGet(xHackerlogEditorToken: string, options?: any) {
        return CoreApiFp(this.configuration).coreVersionGet(xHackerlogEditorToken, options)(this.fetch, this.basePath);
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
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(xHackerlogEditorToken: string, options: any = {}): FetchArgs {
            // verify required parameter 'xHackerlogEditorToken' is not null or undefined
            if (xHackerlogEditorToken === null || xHackerlogEditorToken === undefined) {
                throw new RequiredError('xHackerlogEditorToken','Required parameter xHackerlogEditorToken was null or undefined when calling unitsGet.');
            }
            const localVarPath = `/units`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xHackerlogEditorToken !== undefined && xHackerlogEditorToken !== null) {
                localVarHeaderParameter['X-Hackerlog-EditorToken'] = String(xHackerlogEditorToken);
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
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(xHackerlogEditorToken: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MainUnit>> {
            const localVarFetchArgs = UnitsApiFetchParamCreator(configuration).unitsGet(xHackerlogEditorToken, options);
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
         * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unitsGet(xHackerlogEditorToken: string, options?: any) {
            return UnitsApiFp(configuration).unitsGet(xHackerlogEditorToken, options)(fetch, basePath);
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
     * @param {string} xHackerlogEditorToken X-Hackerlog-EditorToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public unitsGet(xHackerlogEditorToken: string, options?: any) {
        return UnitsApiFp(this.configuration).unitsGet(xHackerlogEditorToken, options)(this.fetch, this.basePath);
    }

}

