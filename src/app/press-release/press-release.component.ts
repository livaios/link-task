import { Component, OnInit } from '@angular/core'
import { GlobalService } from '../services/global.service'
import * as articles from '../../assets/json/newsapi.json'
import {
  mergeMap,
  distinctUntilChanged,
  map,
  debounceTime,
} from 'rxjs/operators'
import { Subject, Subscription, of as observableOf } from 'rxjs'
@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss'],
})
export class PressReleaseComponent implements OnInit {
  constructor(public globalService: GlobalService) {}
  path: any[]
  press_articles: any
  categories: any
  activeFilter: number = -1
  public searchKeyUp = new Subject<any>()
  search: any
  searchValue: any
  public subscriptions: Subscription[] = []
  size: number = 8

  ngOnInit(): void {
    this.path = [
      { path: 'home', url: '../home' },
      { path: 'media center', url: '../home' },
      { path: 'press release', url: '../press_release' },
    ]
    this.press_articles = articles.articles
    console.log(this.press_articles)
    this.categories = articles.sourceCategory
    this.subscriptions.push(
      this.searchKeyUp
        .pipe(
          map((event) => event.target.value),
          debounceTime(300),
          distinctUntilChanged(),
          mergeMap((search) => observableOf(search))
        )
        .subscribe((data) => (this.searchValue = data))
    )
  }
  filter(category) {
    this.activeFilter = category
  }
  loadMore() {
    this.size = this.size + 4
  }
}
