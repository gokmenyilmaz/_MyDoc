````
<!DOCTYPE html>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
  
  #section1 {color: #fff; background-color: #1E88E5;}
  #section2 {color: #fff;background-color: #673ab7;}
  #section3 {color: #fff;background-color: #ff9800;}

  </style>
</head>
<body>


<div id="section1"  style="max-height: 100vh; overflow-y: hidden;">
  <img src="assert/MainSlide/01.jpg" style="width:100%">
</div>
<div id="section2" style="max-height: 100vh; overflow-y: hidden;">
  <img src="assert/MainSlide/03.jpg" style="width:100%">
</div>


</body>
</html>

````

Section1 div i için eğer max-height yerine height verilirse dikey telefonu tam olarak kaplar boş kısımlar oluşur.
O yüzden max-height verilmek zorunda.

İmage : width %100 verildiğinde yatayda tam olarak kaplar dikeydede ekrana sığmaz 
o yüzden parent div overflow-y hiddeen verilmek zorunda (bir nevi crop)

Image ekrana oranı bozularak yerleştirmek istenirse width ve height değerleri vermek yeterli

Image max-width veya max-height verildiğinde image kendi büyüklüğünü asla geçemez. Orjinal halini korur.

