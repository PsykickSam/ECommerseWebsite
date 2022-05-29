import EnumFetchCache from 'enumeration/Fetch/FetchCache';
import EnumFetchCredentials from 'enumeration/Fetch/FetchCredentials';
import EnumFetchMethod from 'enumeration/Fetch/FetchMethod';
import EnumFetchMode from 'enumeration/Fetch/FetchMode';
import EnumFetchRedirect from 'enumeration/Fetch/FetchRedirect';
import EnumFetchReferrerPolicy from 'enumeration/Fetch/FetchReferrerPolicy';
import EnumFetchContentType from 'enumeration/Fetch/FetchContentType';
import EnumApplicationMode from 'enumeration/ApplicationMode';
import BaseUrlNotSetError from 'error/BaseUrlNotSetError';

/**
 * ++ MAXIM ++
 *
 * A 'fetch' based request to server module specially build for this application.
 * All the general request making methods are available here, It convert the user
 * response to usable json data and send back to the client where maxim is using.
 *
 * @constructor
 * @param baseURL: It the base url of the server
 * @param headers: The necessary headers of the server
 *
 * @functions
 * get: For 'GET' api request
 * post: For 'POST' api request
 * delete: For 'DELETE' api request
 * put: For 'PUT' api request
 * patch: For 'PATCH' api request
 */
class Maxim {

  private baseURL: string;
  private headers: HeadersInit | undefined;
  private mode: RequestMode;
  private cache: RequestCache;
  private credentials: RequestCredentials;
  private redirect: RequestRedirect;
  private referrerPolicy: ReferrerPolicy;

  constructor(baseURL: string | undefined, headers?: HeadersInit) {
    // Checks
    if (baseURL == undefined) throw new BaseUrlNotSetError();

    // Initialization
    this.baseURL = baseURL;
    this.headers = headers;
    this.mode = process.env.REACT_APP_MODE == EnumApplicationMode.PRD ? EnumFetchMode.NOCR : EnumFetchMode.CORS;
    this.cache = process.env.REACT_APP_MODE == EnumApplicationMode.PRD ? EnumFetchCache.DFLT : EnumFetchCache.NOCH;
    this.credentials = process.env.REACT_APP_MODE == EnumApplicationMode.PRD ? EnumFetchCredentials.SMOR : EnumFetchCredentials.SMOR;
    this.redirect = process.env.REACT_APP_MODE == EnumApplicationMode.PRD ? EnumFetchRedirect.FLW : EnumFetchRedirect.FLW;
    this.referrerPolicy = process.env.REACT_APP_MODE == EnumApplicationMode.PRD ? EnumFetchReferrerPolicy.NORF : EnumFetchReferrerPolicy.NORF;
  }

  // Private

  private url(url: string, params?: Array<string>) {
    return this.baseURL + (url.startsWith('/') ? url.slice(1, url.length) : url) + (params !== undefined ? params.join('/') : '');
  }

  private async common(method: EnumFetchMethod, url: string, body?: any) {
    const requestInit: RequestInit = {};

    requestInit.method = method;
    requestInit.mode = this.mode;
    requestInit.cache = this.cache;
    requestInit.credentials = this.credentials;
    requestInit.redirect = this.redirect;
    requestInit.referrerPolicy = this.referrerPolicy;

    if (this.headers !== undefined) {
      requestInit.headers = this.headers;
    } else {
      requestInit.headers = { 'Content-Type': EnumFetchContentType.APP_JSON };
    }

    if (body !== undefined || body !== null) {
      requestInit.body = JSON.stringify(body);
    }

    return await (await fetch(url, requestInit)).json();
  }

  // Public
  header(headers: HeadersInit) {
    this.headers = headers;
  }

  async get(url: string, params?: Array<string>) {
    try {
      const data = await Promise.all([this.common(EnumFetchMethod.GET, this.url(url, params))]);
      return await Promise.resolve(data.splice(0, 1).shift());
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  async post(url: string, body: object | Array<object | string> | null, params?: Array<string>) {
    try {
      const data = await Promise.all([this.common(EnumFetchMethod.POST, this.url(url, params), body)]);
      return await Promise.resolve(data.splice(0, 1).shift());
    } catch (error) {
      return await Promise.reject(error);
    }
  }

  delete(url: string, data: object | number | string) {
    return Promise.resolve();
  }

  put(url: string) {
    return Promise.resolve();
  }

  patch(url: string) {
    return Promise.resolve();
  }

}

export default Maxim;
