# Deploy Aşamaları
- Wpf varsayılan olarak Office2016-white theme kullanır.
    - Dll eklenmezse direk kapanarak hata verir

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
  ````
  *.manifest binary
  *.application binary
  *.deploy binary
  ````
 
  
eklenir.

- Devexpress publish klasörüne dil dosyaları atar
ondan kurtulmak için settings/publish/language tr seçilir.
commit ettikten sonra çalışır


