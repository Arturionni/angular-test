import { ClientsService } from './clients.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable()
export class AutnInterceptor implements HttpInterceptor {
	constructor(private clientsService: ClientsService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const isGetAllUrl = req.urlWithParams === 'http://somesite.com/clients';

		if (isGetAllUrl || this.clientsService.clients.find(client => client.url === req.urlWithParams)) {
			return of(new HttpResponse({
				status: 200,
				body: isGetAllUrl ? this.clientsService.getAllClientsMock() : this.clientsService.getClientMock(req.params.get('id'))
			}))
		}

		return next.handle(req);
	}
}