# Deploy Aşamaları
- Wpf varsayılan olarak Office2016-white theme kullanır.
    - Dll eklenmezse direk kapanarak hata verir

- Git Dosya Ayarları
  - .gitignore  
  - .gitattributes  
  
dosyaları hidden olarak ayarlanır.

- gitattributes
  ````
  *.manifest binary
  *.application binary
  *.deploy binary
  ````
eklenir.

- Devexpress publish klasörüne dil dosyaları atar
ondan kurtulmak için settings/publish/language tr seçilir.
commit ettikten sonra çalışır


