import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { PressReleaseComponent } from './press-release/press-release.component'
import { NewsListingComponent } from './news-listing/news-listing.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        data: { breadcrumb: 'Home' },
        component: MainLayoutComponent,
      },
      {
        path: 'press_release',
        data: { breadcrumb: 'Press Release' },
        component: PressReleaseComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
