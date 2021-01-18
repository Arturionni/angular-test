import { Client, ClientsService } from './clients.service';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class AutnInterceptor implements HttpInterceptor {
	constructor(private clientsService: ClientsService) {}

	intercept(req: HttpRequest<any>): Observable<HttpEvent<any>> {
		const id = req.params.get('id')
		
		console.log('Intercept request')
		console.log('Intercept request', id)

		const mock =  id ? this.clientsService.getMock(id) : this.clientsService.clients;

		return of(new HttpResponse(
			{ status: 200, body: mock }
		))
			.pipe(
				tap(event => {
					if (event.type === HttpEventType.Response) {
						console.log('Interceptor response', event)
					}
				}));
	}
}