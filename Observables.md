#callback hell 
bu soruna çözüm

````

import { Component,OnInit } from '@angular/core';
import {HttpModule,Http,Jsonp,URLSearchParams } from  '@angular/http';
import './rxjs-operators';
import * as $ from 'jquery';
import * as _ from 'underscore';

@Component({
  selector: 'my-app',
  template: `Angular <br>
  <input id="search" type="text" class="form-control">
   
  `,
})



export class AppComponent implements OnInit  { 

metin:string;

  constructor()
  {
     
     
  }

  ngOnInit()
  {
   var debounced= _.debounce(function(text:any){
      var url="https://api.spotify.com/v1/search?type=artist&q=" + text;
       $.getJSON(url,function(artists){
          console.log(artists);
        })
    },400);


    $('#search').keyup(function(e){
        var text=e.target['value'];
       debounced(text);
    })
  }

 }
 
 ````
