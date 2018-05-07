
import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';
import { C1Component } from './c1/c1.component';
import { MixeComponent } from './mixe/mixe.component';

const routes: Routes = [
  {path: 'c2', component: C2Component},
  {path: 'c1', component: C1Component},
  {path: 'mixed', component: MixeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class appRoutingModule { }
