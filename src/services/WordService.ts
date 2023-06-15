import axios, { AxiosInstance } from 'axios'
import { Word, WordNotFound, getWords } from '../models/Word'

export class WordService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    })
  }

  async findWords(term: string): Promise<Word[] | WordNotFound> {
    const response = await this._http.get(`/${term.trim()}`, {
      validateStatus: (status) => status < 500,
    })

    const result = getWords(response.data)
    return result
  }
}
