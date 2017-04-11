# 404.html
````
<!DOCTYPE html>
<html lang="tr">

<head>
  <meta charset="utf-8" />

  <title>SGHPA Demo</title>

  <script>
    sessionStorage.redirect = location.href;
  </script>

  <meta http-equiv="refresh" content="0;URL='/'"></meta>
</head>

<body>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</body>


</html>
````

# index.html
````
<head>
   <script>
         (function(){
          var redirect = sessionStorage.redirect;
          delete sessionStorage.redirect;
          if (redirect && redirect != location.href) {
            if(redirect.indexOf('bkmz')>1)
            {
               redirect=redirect.replace('bzkmz','#anasayfa');
            }
     
            history.replaceState(null, null, redirect);
       }
    })();
        
  </script>
 </head>
````
