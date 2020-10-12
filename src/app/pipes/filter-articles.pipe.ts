import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterArticles',
})
export class FilterArticlesPipe implements PipeTransform {
  transform(articles: any, category: number, size: number): any {
    if (articles) {
      if (category != -1) {
        return articles
          .filter((article) => article.sourceID == category)
          .slice(0, size)
      } else return articles.slice(0, size)
    }
  }
}
