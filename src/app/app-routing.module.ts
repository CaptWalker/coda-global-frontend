import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneDashboardComponent } from './page-one-dashboard/page-one-dashboard.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  { path: '', component: PageOneDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
