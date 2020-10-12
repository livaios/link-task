import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  path = 'Home'
  selectedArticle: any
  constructor() {}
}
