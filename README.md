## IIS Express direk çalıştırma
  C:\Program Files\IIS Express>iisexpress /path:D:\EDENETIM-TFS\Services\ /port:27074
  
## IIS express remote connection

Güvenlik duvarı gelen kurala
63075 portu eklenecek
bilgisayar yeniden başlatılacak


VS2022 yönetici modunda açılacak

C:\Users\Gokmen1977\PandapNet\.vs\PandapNet\config 
Applicationhost.config 

 <site name="Pandap.Api" id="1">
        <application path="/" applicationPool="Pandap.Api AppPool">
          <virtualDirectory path="/" physicalPath="C:\Users\Gokmen1977\PandapNet\Pandap.Api" />
        </application>
        <bindings>
    	  <binding protocol="http" bindingInformation="*:63075:192.168.1.5" />
          <binding protocol="http" bindingInformation="*:63075:localhost" />
  	</bindings>
 </site>


## Microservice
Örneğin resim boyutları ayarlama sitesi
tek işi yapıyor parametreler uygulamadan bağımsız

##  Motivation
- ### refactoring, refactoring, refactoring 
- ### "Bir şeyi basit şekilde açıklayamıyorsan onu yeterince anlamamışsın demektir."  Feynman
- ### "Öğrenmek için öğret"

#  Proje yönetim prensipleri
- ### "Yetkilerin gizliliği ve yatay yönetim


# Learn Backlog
- ### https://www.thereformedprogrammer.net/six-ways-to-build-better-entity-framework-core-and-ef6-applications/
- ### http://enterprisecraftsmanship.com/2015/06/22/encapsulation-revisited/

# Git Basic

push etmeden once yarı yap
````
git config user.name "gokmen.yilmaz"
git config user.email "gokmen1977@gmail.com"
````
````
git config --global user.name "gokmen.yilmaz"
git config --global user.email "gokmen1977@gmail.com"
````

Gist yerine :)

* css 3d mükemmel örnekler https://desandro.github.io/3dtransforms/
* http://jekyllbootstrap.com/usage/jekyll-quick-start.html
* çevik yazılım
  * https://www.youtube.com/watch?v=25xGWtgfYYA
* hammer.js
  * dokunma desteği (jquery gerektirmez)
* Todo
  * http://todomvc.com/
  
 https://testmysite.withgoogle.com/intl/tr-tr?utm_source=google_search&utm_medium=dcallout&utm_campaign=c_tr 
 
  
