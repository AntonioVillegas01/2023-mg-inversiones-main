import { Component } from '@angular/core';

// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void {
    customInitFunctions();
  }
}
