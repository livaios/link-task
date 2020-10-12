import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { MenuComponent } from './menu/menu.component'
import { HelpComponent } from './main-layout/help/help.component'
import { InvestmentsComponent } from './main-layout/investments/investments.component'
import { PressHomeComponent } from './main-layout/press-home/press-home.component'
import { PressReleaseComponent } from './press-release/press-release.component'
import { NewsListingComponent } from './news-listing/news-listing.component'
import { HttpModule } from '@angular/http'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FilterArticlesPipe } from './pipes/filter-articles.pipe'
import { SearchArticlesPipe } from './pipes/search-articles.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HelpComponent,
    InvestmentsComponent,
    PressHomeComponent,
    PressReleaseComponent,
    NewsListingComponent,
    FilterArticlesPipe,
    SearchArticlesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
