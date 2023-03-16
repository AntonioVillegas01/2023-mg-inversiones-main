import {Component, OnInit} from '@angular/core';
import {DesarrollosService} from "../../services/desarrollos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit{

  public desarrollo: any = {};
  public cargando: boolean = true;
  id: string = "";


  constructor(
    private desarrolloService: DesarrollosService,
  private route: ActivatedRoute
  ) {
  }

  ngOnInit() : void {

    this.id = this.route.snapshot.paramMap.get('id') || "";
    console.log(this.id);


    this.loadDesarrolloById();

  }



  loadDesarrolloById(){
    this.cargando = true;
    this.desarrolloService.loadDesarrolloById(this.id)
      .subscribe(desarrollo =>{
        console.log(desarrollo)
        this.cargando = false
        this.desarrollo = desarrollo
      })
  }


}
