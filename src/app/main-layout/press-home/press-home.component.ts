import { Component, OnInit } from '@angular/core'
import * as articles from '../../../assets/json/newsapi.json'
@Component({
  selector: 'app-press-home',
  templateUrl: './press-home.component.html',
  styleUrls: ['./press-home.component.scss'],
})
export class PressHomeComponent implements OnInit {
  constructor() {}
  press_articles: any
  home_articles = []
  ngOnInit(): void {
    this.press_articles = articles.articles
    console.log(this.press_articles)
    for (let i = 0; i < this.press_articles.length; i++) {
      if (this.press_articles[i].showOnHomepage)
        this.home_articles.push(this.press_articles[i])
    }
    for (let i = 0; i < 4; i++) {
      this.home_articles.splice(4, 4)
    }
    console.log(this.home_articles)
  }
}
