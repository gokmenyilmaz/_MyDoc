folder içinde

ng -v

angular cli ile >   ng new ng-gok -ng4


https://www.youtube.com/watch?v=m5k3z94rixA

http://angularjs.blogspot.com.tr/2017/03/angular-400-now-available.html

https://www.youtube.com/watch?v=r-a2f0T8CG0


# ng-template
````
template: `
  <h1>Hey guys!</h1>
  <div *ngIf="myArr; then tmpl1 else tmpl2"></div>

  <ng-template #tmpl1>I'm here</ng-template>
  <ng-template #tmpl2>I'm not here</ng-template>
  `,
````
