import { Client, ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client

  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getClient(+params.id)
    })
  }

  getClient(id: number) {
    this.clientsService.getById(id)
      .subscribe(client => {
        this.client = client
      })
  }
}
