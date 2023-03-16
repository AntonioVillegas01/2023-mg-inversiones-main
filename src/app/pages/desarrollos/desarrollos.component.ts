import {Component, OnInit} from '@angular/core';
import {DesarrollosService} from "../../services/desarrollos.service";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-desarrollos',
  templateUrl: './desarrollos.component.html',
  styleUrls: ['./desarrollos.component.css']
})
export class DesarrollosComponent implements OnInit {

  public totalDesarrollos = 0;
  public desarrollos: any[] = [];
  public cargando: boolean = true;



  // public swiperConfig:SwiperOptions = {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // }



  constructor(
    private desarrolloService: DesarrollosService
  ) {
  }



  ngOnInit() : void {
    this.loadDesarrollos();

  }


  loadDesarrollos(){
    this.cargando = true;
    this.desarrolloService.loadDesarrollos()
      .subscribe(desarrollos => {
        this.cargando = false;
        this.totalDesarrollos= desarrollos.length
        this.desarrollos = desarrollos.map(item => {
          return {
            titulo: item.attributes.titulo,
            imagen: item.attributes.portada.data.attributes.url,
            slug: item.attributes.slug,
          }
        })
        // console.log(this.desarrollos)
      })
  }





}
