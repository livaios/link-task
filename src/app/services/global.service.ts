import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  path = 'Home'
  selectedArticle: any
  constructor(private route: Router) {}
  navToPress() {
    console.log('click')
    this.route.navigateByUrl('/press_release')
  }
  readMore(article) {
    this.navToPress()
    this.selectedArticle = article
  }
}
