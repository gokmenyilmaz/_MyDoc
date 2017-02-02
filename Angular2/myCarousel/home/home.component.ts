import { Component, OnInit } from '@angular/core';
import {PagesService } from '../pages.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.css'],
    providers:[PagesService]
})
export class HomeComponent implements OnInit {
    slideItems:any[]=[];
    baslik:string="";
   
    constructor(service:PagesService)
    {
       this.baslik="tanıtım carousel";
    }

    ngOnInit() {
        this.slideItems.push({'src':'assert/images/mainslide/01.jpg','sitil':'block',"caption":"Ankarada Butik"});
        this.slideItems.push({'src':'assert/images/mainslide/02.jpg','sitil':'none',"caption":"ev yemekler"});
        this.slideItems.push({'src':'assert/images/mainslide/03.jpg','sitil':'none',"caption":"herkese"});

        
       

       }

  
}
