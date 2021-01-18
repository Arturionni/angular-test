import { ClientsComponent } from './clients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      { path: '', component: ClientsComponent }
    ])
  ]
})
export class ClientsModule { }
