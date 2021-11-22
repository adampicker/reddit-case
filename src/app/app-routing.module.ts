import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'feed',
  },
  {
    path: 'feed',
    component: PageLayoutComponent,
    loadChildren: () =>
      import('./modules/feed/feed.module').then((m) => m.FeedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
