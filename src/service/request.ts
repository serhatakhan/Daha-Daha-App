import { AxiosResponse } from 'axios';
import {Client} from './instance';

/*
 * Fonksiyonunu birden fazla farklı istekler için kullanma ihtimaline karşılık,
 fonksiyonun tipi generic olarak ayarlandı
 */
export async function getRequest<T>(URL: string, params: object): Promise<AxiosResponse<T>> {
  const res: AxiosResponse<T> = await Client.get(URL, { params });
  return res;
}