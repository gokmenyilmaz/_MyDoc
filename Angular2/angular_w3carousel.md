#W3.css carousel yaklaşımı image veya başka element komple slide
````
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

    @ViewChild('dataContainer') dataContainer: ElementRef;
    displayItems:any[]=[];

  constructor()
  {
    
  }

  ngOnInit()
  {
  
    this.displayItems= this.dataContainer.nativeElement.querySelectorAll('.mySlides');
    setInterval(()=>{ this.carousel(this.indexItem+=1);},this.saniye);
 
  }

    plusDivs(i:number)
    {
         this.carousel(this.indexItem+=i);
    }
    carousel(indexItem:number)
    {
        if (this.indexItem > this.displayItems.length-1) {this.indexItem = 0} 
        if (this.indexItem < 0) {this.indexItem = this.displayItems.length-1} 
   
        for(let item of this.displayItems){
             item.style.display="none";
        }

        this.displayItems[this.indexItem].style.display="block";
        
    }


}
````
````
<div class="w3-row">
    <div class="w3-col s12 w3-display-container" style="max-height: 100vh;overflow-y: hidden">
        <div #dataContainer>
            <ng-content  select="[body]"></ng-content>
        </div>
       
      
            
        <a class="w3-btn-floating w3-display-left" (click)="plusDivs(-1)">&#10094;</a>
        <a class="w3-btn-floating w3-display-right" (click)="plusDivs(1)">&#10095;</a>-->

      
    </div>
</div>
````
kullanım
````
<my-w3carousel  saniye="3000" [testdata]="baslik"  style="z-index: 1000!important">
    <div body>
        <div class="mySlides w3-container w3-red">
            <h1><b>Did You Know?</b></h1>
            <h1><i>We plan to sell trips to the moon in the 2020s</i></h1>
        </div>
   

        <div class="mySlides w3-container w3-xlarge w3-white w3-card-8">
            <p><span class="w3-tag w3-yellow">New!</span>
            <p>6 Crystal Glasses</p>
            <p>Only $99 !!!</p>
        </div>

        <img class="mySlides" src="assert\logo.png" style="width:100%">
    </div>

</my-w3carousel>
````

