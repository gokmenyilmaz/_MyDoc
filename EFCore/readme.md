# Genel Komutlar
- install-package microsoft.entityframeworkcore.tools  // gerekli

## Package Manager Console (powershell kullanır)
- get-help EntityFrameworkCore   // komutlar hakkında bilgi

- Add-Migration Kullanici-Stok
- Update-Database
- Scaffold-DbContext -connection "server=.;database=panda_YENI;trusted_connection=true" -provider microsoft.Entityframeworkcore.sqlserver 
