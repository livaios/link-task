import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss'],
})
export class NewsListingComponent implements OnInit {
  @Input() data
  path: any
  constructor() {}

  ngOnInit(): void {
    console.log(this.data)
    this.path = [
      { path: 'home', url: '../home' },
      { path: 'media center', url: '../home' },
      { path: 'press release', url: '../press_release' },
      { path: this.data.title, url: '' },
    ]
  }
}
