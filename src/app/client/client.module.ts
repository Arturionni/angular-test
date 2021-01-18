import { TableModule } from 'primeng/table';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      { path: '', component: ClientComponent }
    ])
  ]
})
export class ClientModule { }
