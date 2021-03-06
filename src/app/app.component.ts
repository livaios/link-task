import { Component, OnInit } from '@angular/core'
import { GlobalService } from './services/global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public globalService: GlobalService) {}
  ngOnInit(): void {}
  title = 'link-task'
}
