http://stackoverflow.com/questions/35945001/binding-select-element-to-object-in-angular-2

````

<h1>My Application</h1>
<select [(ngModel)]="selectedValue">
  <option *ngFor="let c of countries" [ngValue]="c">{{c.name}}</option>
</select>
Plunker example

NOTE: you can use [ngValue]="c" instead of [ngValue]="c.id" where c is the complete country object.

[value]="..." only supports string values
[ngValue]="..." supports any type

````
