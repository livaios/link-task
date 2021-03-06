import { Component, OnInit, HostListener } from '@angular/core'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  article_body: any
  articles = []
  articles_shown = []
  items_per_page = 1
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
    for (let i = 0; i < this.items_per_page; i++) {
      this.articles_shown.push(this.articles[i])
    }
    this.resize()
  }
  next() {
    if (this.curr_index < this.articles.length) {
      this.articles_shown.shift()
      this.articles_shown.push(this.articles[this.curr_index])
      this.curr_index++
    }
  }
  prev() {
    if (this.curr_index > this.items_per_page) {
      this.articles_shown.pop()
      let index = this.curr_index - this.items_per_page
      this.articles_shown.unshift(this.articles[index])
      this.curr_index--
    }
  }
  resize() {
    if (window.innerWidth < 769) {
      this.items_per_page = 1
    } else {
      this.items_per_page = 2
    }
    if (this.articles_shown.length > this.items_per_page) {
      this.articles_shown.pop()
      this.curr_index--
    } else if (this.articles_shown.length < this.items_per_page) {
      this.articles_shown.push(this.articles[this.curr_index])
      this.curr_index++
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(window.innerWidth)
    this.resize()
  }
}
