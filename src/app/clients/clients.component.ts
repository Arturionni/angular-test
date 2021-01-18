import { Client, ClientsService } from '../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = []

  constructor(public clientsService: ClientsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  
  getAll() {
    this.clientsService.getAll()
      .subscribe(clients => {
        this.clients = clients
      });
  }

}
