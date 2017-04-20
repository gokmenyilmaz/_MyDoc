# Github Hosting
Sitenin ana sayfasına 
- CNAME (uzanısı yok) dosyası eklenir. İçine selcukrating.com yazılır (örn)
- Godady yada Natro dan 
  - A-@-192.30.252.154
  - CNAME-www-gokmenyilmaz.github.io  girilir.
 
- Chrome da cache sorunları için makina imajdan geri çekilebilir

- Uygulama src ve dist şeklinde ise kök dizinine geçici index.html yada 404.html dosyası eklenir (hacking)
  - ``Aşağıdaki kodlar eklenerek gelen link için sessionStorage de değişken tanımlanır.
    Meta ile ilgili klasöre yönlendirilir. ``
  ````
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/dist/'"></meta>
  ````
  - `` Session değişkeni alt folder daki index dosyasında aşağıdaki gibi ele alınabilir. ``
  ````
  <script>
    (function () {
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect != location.href) {
        redirect = redirect.replace('/bzkmz', '/#anasayfa');
        redirect = redirect.replace('/menu', '/#haftalikmenu');
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
  ````
  
 


