# 404.html
````
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'"></meta>
</head>

<body>
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
            if(redirect.indexOf('bzkmz')>1)
            {
               redirect=redirect.replace('bzkmz','#anasayfa');
            }
     
            history.replaceState(null, null, redirect);
       }
    })();
        
  </script>
 </head>
````
