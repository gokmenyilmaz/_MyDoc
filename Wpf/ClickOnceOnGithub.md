# Deploy Aşamaları
- Wpf varsayılan olarak Office2016-white theme kullanır.
    - Dll eklenmezse direk kapanarak hata verir
    
- Clickonce hash hatası verirse 
    - Application property/publish/application files> seçilir  
    Gelen tablodan hash sutunundan sorunlu olan file çıkarılır
    
 -vs2022 ile github arasında CRLF vs LF uyumsuzluğu olabilir.
 ghpages dosyayı indirirken sadece LF ekliyor yayınlarken CRLF olduğu için hash hatası alınır.

- Git Dosya Ayarları
- .gitignore  
    ````
    # User-specific files
    *.suo
    *.user
    *.userosscache
    *.sln.docstates

    # User-specific files (MonoDevelop/Xamarin Studio)
    *.userprefs

    # Build results
    [Dd]ebug/
    [Dd]ebugPublic/
    [Rr]elease/
    [Rr]eleases/
    x64/
    x86/
    bld/
    [Bb]in/
    [Oo]bj/
    [Ll]og/

    # Visual Studio 2015 cache/options directory
    .vs/
    ````
- gitattributes
https://gokmenyilmaz.github.io/Pandap2017/Pandap.application hatası alırsın yoksa
  ````
  *.manifest binary
  *.application binary
  *.deploy binary
  ````
 
  
eklenir.

- Devexpress publish klasörüne dil dosyaları atar
ondan kurtulmak için settings/publish/language tr seçilir.
commit ettikten sonra çalışır


