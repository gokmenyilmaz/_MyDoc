````
<!DOCTYPE html>
<html>
<head>
<style>

div {
	
  	width:100%;
    height:100%;
    border:5px solid blue;
   
}

div:before,div:after
{
	clear:both;
    content:"";
    display:table;
}


h2 {

  	width:200px;
    height:100px;
    border:5px solid red;
    float:left;
   
}


h3 {

  	width:600px;
    height:100px;
    border:5px solid green;
}

header
{
	display:inline-block;
    width:200px;
    height:100px;
    border:5px solid yellow;
}

content
{
	display:block;
	border:9px solid black;
    height:100%;
    width:100%;
}


</style>
</head>
<body>
<div>
  <h2>Sağlık bakanlığı</h2>
  <h2>THY</h2>
  <h2>Uruguay</h2>
  <h2>Fransuva</h2>
  
  <h3>Son satır</h3>
 
</div>

<content>
  <header>Sağlık bakanlığı</header>
  <header>THY</header>
  <header>Uruguay</header>
  <header>Fransuva</header>

</content>




</body>
</html>

````
