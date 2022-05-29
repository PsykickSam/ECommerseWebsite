import EnumFetchContentType from 'enumeration/Fetch/FetchContentType';
import Maxim from 'maxim/maxim';

class HttpClient {

  private maxim: Maxim;

  constructor(baseURL: string | undefined, headers?: HeadersInit) {
    this.maxim = new Maxim(baseURL, headers);
  }

  // Chain methods

  header(headers: HeadersInit) {
    this.maxim.header(headers);
    return this;
  }

  // Basic methods

  get(url: string, params?: Array<string>) {
    return this.maxim.get(url, params);
  }

  post(url: string, body: object | Array<object | string> | null, params?: Array<string>) {
    return this.maxim.post(url, body, params);
  }

  delete() {}

  put() {}

  patch() {}

}

const httpClient = new HttpClient(process.env.REACT_APP_BACKEND_SERVER, {
  'Content-Type': EnumFetchContentType.APP_JSON,
  'token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWMxZTBhMDhjMDU0YzdjNDU2ZDU2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA1MzkwMCwiZXhwIjoxNjQ0OTE3OTAwfQ.visFABx2sOejU5XHFPuYr07w7syVoJAw-7KjfmDuqnQ'
});

export default httpClient;
