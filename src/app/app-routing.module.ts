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
        data: {
          breadcrumb: 'Home',
        },
        component: MainLayoutComponent,
      },
      {
        path: 'media',
        data: {
          breadcrumb: 'Media Center',
        },
        children: [
          {
            path: 'press',
            data: {
              breadcrumb: 'Press Releases',
            },
            component: PressReleaseComponent,
            children: [
              {
                path: 'news1',
                data: {
                  breadcrumb: 'news1',
                },
                component: NewsListingComponent,
              },
            ],
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
