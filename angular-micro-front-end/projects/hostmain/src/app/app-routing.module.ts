import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('lookupui/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('workflowui/homeModule').then((module) => module.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}