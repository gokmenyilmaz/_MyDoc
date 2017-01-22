````
  $(function() {
            $(window).on("load resize", function() {
                $(".fill-screen").css("height", window.innerHeight);
            })

        })
        
  
````
içindeki load çalışmıyor. İlk değerler atanmadığı için yükseklikler
0 kalıyor ve otomatik son menuye geciyor.

document ready kullanarak sorun çözülüyor...
alttaki eşiti 
````
 $(function() {
      $(".fill-screen").css("height", window.innerHeight);

       $(window).on("resize", function() {
          $(".fill-screen").css("height", window.innerHeight);
      })
   })
````



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
  body {
      position: relative; 
      padding-top: 50px;

  }

  .navbar
  {
    opacity: 1;
  }

  #section1 {color: #fff; background-color: #1E88E5;}
  #section2 {color: #fff;background-color: #673ab7;}
  #section3 {color: #fff;background-color: #ff9800;}
 
  </style>
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
       
        </ul>
      </div>
    </div>
  </div>
</nav>    

<div id="section1" class="row fill-screen">
 
</div>
<div id="section2" class="row fill-screen">
 
</div>
<div id="section3" class="row fill-screen">

</div>
  


 <script>

        $(document).ready(function(){
           $(".fill-screen").css("height",window.innerHeight);
          
        });

        $(function() {
            $(window).on("resize", function() {
                $(".fill-screen").css("height", window.innerHeight);
            })

        })
      
    </script>

</body>
</html>

````
