import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTwoComponent } from './modules/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PageTwoComponent,
    loadChildren: () =>
      import('../app/modules/page-two/page-two.module').then(
        (m) => m.PageTwoModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
