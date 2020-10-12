import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'searchArticles',
})
export class SearchArticlesPipe implements PipeTransform {
  transform(searchList: any, searchValue: any): any {
    if (searchList) {
      if (searchValue) {
        return searchList.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      } else {
        return searchList
      }
    }
  }
}
