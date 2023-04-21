import { Component } from '@angular/core';


// @ts-ignore
declare function customInitFunctions();

@Component({
  selector: 'app-yucatan',
  templateUrl: './yucatan.component.html',
  styleUrls: ['./yucatan.component.css']
})
export class YucatanComponent {


  ngOnInit(): void {
    customInitFunctions();
  }

}
