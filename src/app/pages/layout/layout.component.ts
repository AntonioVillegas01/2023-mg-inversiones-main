import { Component } from '@angular/core';

// @ts-ignore
declare function customInitFunctions();
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  ngOnInit(): void {
    customInitFunctions();
  }

}
