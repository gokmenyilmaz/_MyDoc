https://docs.microsoft.com/en-us/ef/core/querying/basic
https://app.pluralsight.com/library/courses/entity-framework-core-getting-started/table-of-contents


# Genel Komutlar
- install-package microsoft.entityframeworkcore.tools  // gerekli
- install-package Microsoft.EntityFrameworkCore.SqlServer.Design

## Package Manager Console (powershell kullanır)
- get-help EntityFrameworkCore   // komutlar hakkında bilgi

- Add-Migration Kullanici-Stok
- Update-Database
- Scaffold-DbContext -connection "server=.;database=panda_YENI;trusted_connection=true" -provider microsoft.Entityframeworkcore.sqlserver -OutputDir "./Panda-Model"
