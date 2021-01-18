import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpParams } from '@angular/common/http'

export interface Client {
  id: number
  name: string
  inn: string
  date: string
  balance: number,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private http: HttpClient) { }

  clients: Client[] = [
    { id: 1, name: 'Клиент 1', inn: '1123', date: '17.05.2020', balance: 4564, url: 'http://somesite.com/clients?id=1' },
    { id: 2, name: 'Клиент 2', inn: '2132', date: '17.05.2020', balance: 1234534, url: 'http://somesite.com/clients?id=2' },
    { id: 3, name: 'Клиент 3', inn: '4323', date: '17.05.2020', balance: 4323214, url: 'http://somesite.com/clients?id=3' },
    { id: 4, name: 'Клиент 4', inn: '4432', date: '17.05.2020', balance: 243232.123, url: 'http://somesite.com/clients?id=4' },
  ]

  getById(id: number): Observable<Client> {
    let params = new HttpParams()
    params = params.append('id', id.toString())

    return this.http.get<Client>('http://somesite.com/clients', { params })
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>('http://somesite.com/clients')
  }

  getClientMock(id: string): Client {
    return this.clients.find(client => client.id.toString() === id);
  }

  getAllClientsMock(): Client[] {
    return this.clients;
  }
}