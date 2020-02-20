import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './components/core.component';

const routes: Routes = [{ path: '', component: CoreComponent,
children: [
  { path: 'map', loadChildren: () => import('../map/map.module').then(m => m.MapModule) },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
