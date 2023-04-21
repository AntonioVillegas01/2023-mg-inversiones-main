import {Component, OnInit} from '@angular/core';
import {DesarrollosService} from "../../services/desarrollos.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';



// @ts-ignore
declare function customInitFunctions();
@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit{

  public desarrollo: any = {};
  public cargando: boolean = true;
  public mapLink: SafeUrl = "";
  id: string = "";

  public positionMap:any = {}

  imgSrc: string | undefined;



  constructor(
    private sanitizer: DomSanitizer,
    private desarrolloService: DesarrollosService,
  private route: ActivatedRoute
  ) {}



  ngOnInit() : void {
    this.id = this.route.snapshot.paramMap.get('id') || "";
    console.log(this.id);
    this.loadDesarrolloById();
    customInitFunctions();
  }

  loadDesarrolloById(){
    this.cargando = true;
    this.desarrolloService.loadDesarrolloById(this.id)
      .subscribe(desarrollo =>{
        console.log(desarrollo)
        this.cargando = false
        this.desarrollo = desarrollo
        this.positionMap = desarrollo.googleMap
      })

  }


  getMapLocation(){
   return `https://maps.google.com/maps?q=${this.positionMap.calle}%20${this.positionMap.numero}%20%${this.positionMap.ciudad}&t=&z=20&ie=UTF8&iwloc=&output=embed`;
  }

  // sanitizeUrl(url: string): SafeUrl {
  //   console.log(url)
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }

  onClick(event: { target: any; srcElement: any; currentTarget: any; }){
    const imgElem = event.target;
    const target = event.target || event.srcElement || event.currentTarget;
    const srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }

}
