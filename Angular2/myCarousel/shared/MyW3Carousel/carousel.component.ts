import { Component,ViewChild,Input,OnInit,ElementRef,AfterViewInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {Router,RouterModule} from '@angular/router';


@Component({
    moduleId:module.id,
    selector:"my-w3carousel",
    templateUrl:"carousel.component.html",
    styleUrls:["carousel.component.css"]
  
})

export class MyW3CarouselComponent implements OnInit{
  
    @Input() slideItems:any[]=[];
    @Input() saniye:number;
    @Input() testdata:string;
    @Input() sadeceMetin:boolean;
   
    indexItem:number=0;

  constructor()
  {
    
  }

  ngOnInit()
  {
    
      setInterval(()=>{ this.carousel(this.indexItem+=1);},this.saniye);
      console.log(this.saniye);
     
  }

    plusDivs(i:number)
    {
         this.carousel(this.indexItem+=i);
    }
    carousel(indexItem:number)
    {
        console.log(indexItem);

        if (this.indexItem > this.slideItems.length-1) {this.indexItem = 0} 
        if (this.indexItem < 0) {this.indexItem = this.slideItems.length-1} 
   
        for(let item of this.slideItems){
             item.sitil="none";
        }

        this.slideItems[this.indexItem].sitil="block";
        
    }


}