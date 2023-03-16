import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import Swiper from 'swiper';

// import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-custom-card-swiper',
  templateUrl: './custom-card-swiper.component.html',
  styleUrls: ['./custom-card-swiper.component.css'] ,
  encapsulation: ViewEncapsulation.None,
})
export class CustomCardSwiperComponent implements OnInit{

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 5000, // Delay between slides in milliseconds
        disableOnInteraction: false // Allow user interaction to pause autoplay
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets' // Add this line to show bullets

      },
    });
  }


  @Input() sliderItems:any [] = []

}
