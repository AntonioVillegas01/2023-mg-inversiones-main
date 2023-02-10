import {Component, OnInit} from '@angular/core';

// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mg-inversiones-main';

  ngOnInit(): void {
    customInitFunctions();
  }
}
