import { Component, OnInit, Input } from '@angular/core'
import { GlobalService } from '../services/global.service'

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss'],
})
export class NewsListingComponent implements OnInit {
  @Input() data
  path: any
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    console.log(this.data)
    this.path = [
      { path: 'home', url: '../home' },
      { path: 'media center', url: '../home' },
      { path: 'press release', url: '../press_release' },
      { path: this.data.title, url: '' },
    ]
  }
  ngOnDestroy() {
    this.globalService.selectedArticle = null
  }
}
