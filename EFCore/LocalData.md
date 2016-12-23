````
dc.personels.local


personel entitylerin tümü
sonradan bulunanlarda dahil.


yani 

var x=dc.personels.local;   //local kayıt sayısı 0

var kayıt1=dc.personels.firstordefault();   local kayıt sayısı 1

var kayıt2=dc.personels.find(4)  local kayıt sayısı 2

yani arana herşey eklenir.
dolayısıyla bu ektra aramamların yeni datacontext örneğiyle yapmak gerekir.

load komutu sadece hazır sorguları çalıştırır.
ToList vs uygulanmamış sorgular.

asenkron yapılar için tasarlanmış olmalı
````
