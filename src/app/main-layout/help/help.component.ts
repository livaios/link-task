import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  article_body: any
  articles = []
  articles_shown = []
  curr_index = 2
  curr_page = 0
  constructor() {}

  ngOnInit(): void {
    this.article_body = {
      title: 'TA’ALOUF PROGRAM',
      img: 'assets/layer-20.png',
      data: {
        number: '200',
        type: 'GRADUATES TO DATE',
        details:
          'Ta”alouf program aims to extend its reach across the Emirates addressing the needs of the country.',
      },
    }
    for (let i = 0; i < 5; i++) {
      this.articles.push(this.article_body)
    }
    for (let i = 0; i < 2; i++) {
      this.articles_shown.push(this.articles[i])
    }
  }
  next() {
    if (this.curr_index < this.articles.length) {
      this.articles_shown.shift()
      this.articles_shown.push(this.articles[this.curr_index])
      this.curr_index++
    }
  }
  prev() {
    if (this.curr_index > 2) {
      this.articles_shown.pop()
      let index = this.curr_index - 2
      this.articles_shown.unshift(this.articles[index])
      this.curr_index--
    }
  }
}
