#Sorun : Div içine başka bir div yerleştirir float sitili konulursa
ana div yüksekliği kabul etmez

bunun için
````
.group:after {
  content: "";
  display: table;
  clear: both;
}
````
sitili eklenir

````
<!DOCTYPE html>
<html>
<body>

<style>
.group:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<div class='group' style="background-color:black;color:white;padding:20px;">
<div style='background-color:red;height:150px;float:left'>
ddddddd dgfgfgfg
fgfgfg
<br/>
fgfgfg

<br/>

</div>


</div> 

</body>
</html>
````
