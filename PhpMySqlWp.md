https://www.youtube.com/watch?v=IDrF1ciwXqQ

1.php-7.4.13-nts-Win32-vc15-x64 klasörünü c:\php ye aç
2.IIs kurulumunda CGI kurulmuş olmalı
3.IIS de modul yukleyicide "*php"-FASTCGI-php-cgi.exe ye yönlendir
4.Php ini dosyasını bu klasöre yapıştır. (içinde iis ayarları var)
5.Php.ini->open_basedir = "C:\inetpub\vhosts;c:\windows\temp"  (upload yetki)
  -> IIS restart
