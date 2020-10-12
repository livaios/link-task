import { Component, OnInit } from '@angular/core'
import * as articles from '../../../assets/json/newsapi.json'
import { GlobalService } from 'src/app/services/global.service'
@Component({
  selector: 'app-press-home',
  templateUrl: './press-home.component.html',
  styleUrls: ['./press-home.component.scss'],
})
export class PressHomeComponent implements OnInit {
  constructor(public globalService: GlobalService) {}
  press_articles: any
  home_articles = []
  ngOnInit(): void {
    this.press_articles = articles.articles
    for (let i = 0; i < this.press_articles.length; i++) {
      if (this.press_articles[i].showOnHomepage)
        this.home_articles.push(this.press_articles[i])
    }
  }
}
