import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '25616103-aed40349c0d62d7a529b2f151';
const PER_PAGE = 40;
const requestParam = 'image_type=photo&orientation=horizontal&safesearch=true';

class Response {
  private _searchName: string;
  private _page: number;
  private _url: string;

  constructor() {
    this._searchName = '';
    this._page = 1;
    this._url = '';
  }

  async getResponse(): Promise<AxiosResponse<any> | undefined> {
    this._url = `${BASE_URL}?key=${KEY}&q=${this._searchName}&${requestParam}&page=${this._page}&per_page=${PER_PAGE}`;
    try {
      const response: AxiosResponse<any> = await axios.get(this._url);
      this._page += 1;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  get searchName(): string {
    return this._searchName;
  }

  set searchName(newSearchName: string) {
    this._searchName = newSearchName;
  }

  get page(): number {
    return this._page;
  }

  set page(newPage: number) {
    this._page = newPage;
  }
}

export default Response;
