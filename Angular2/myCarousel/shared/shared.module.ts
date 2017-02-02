import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTabComponent } from './MyTab/my-tab.component';
import {MyW3CarouselComponent} from './MyW3Carousel/carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ MyTabComponent,MyW3CarouselComponent],
  exports: [
    
    CommonModule,
    MyTabComponent,
    MyW3CarouselComponent
  ]
})
export class SharedModule { }

