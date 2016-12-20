#Jquery entegrasyonu

npm install jquery --save
npm install --save @types/jquery

system.js/map
'jquery':'npm:jquery'

app.components


``
import { Component,OnInit } from '@angular/core';
import {HttpModule,Http,Jsonp,URLSearchParams } from  '@angular/http';
import './rxjs-operators';
import * as $ from 'jquery';

@Component({
  selector: 'my-app',
  template: `Angular <br>
  <input id="search" type="text" class="form-control">
   
  `,
})
export class AppComponent implements OnInit  { 
  ngOnInit()
  {
    $('#search').keyup(function(e){
      
    })
  }

 }

``
