````

Since beta 28 or 30 AOT is now enabled by default when building with --prod. So ng build --prod --aot and ng build --prod are the same :). Try with ng build --prod --no-aot and ng build --prod you should see a difference. To know if your project is compiled with AOT, just take a look within your dist and take a look to compiled JS. If you see your templates with ngFor for example, it is not AOT ;) – Maxime Feb 10 at 17:12 
````
