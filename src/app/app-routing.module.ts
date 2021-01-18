import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {path: '', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  {path: ':id', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  {path: '*', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
