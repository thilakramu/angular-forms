import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorsComponent } from './operators/operators.component';


const routes: Routes = [
  { path: 'operators', loadChildren: () => import('./operators/operators.module').then(m=>m.OperatorsModule) },
  { path: '',   redirectTo: '/operators', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
