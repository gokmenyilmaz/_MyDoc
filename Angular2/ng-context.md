````
<div class="w3-row">
    <div class="w3-col s12" style="max-height: 100vh;overflow-y: hidden;position: relative">
    
    <ng-content select="[intro]">
    </ng-content>

    <ng-content select="[icerik]">
    </ng-content>
     

    </div>
</div>


<my-w3carousel [slideItems]="slideItems" saniye="3000" [testdata]="baslik">
 <p intro style="z-index: 1000">
      intro kısmı
  </p>

   <p icerik style="z-index: 1000">
      içerik
  </p>
</my-w3carousel>

````
