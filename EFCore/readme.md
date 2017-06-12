https://docs.microsoft.com/en-us/ef/core/querying/basic  
https://app.pluralsight.com/library/courses/entity-framework-core-getting-started/table-of-contents  



# core2
update-package Microsoft.EntityFrameworkCore.SqlServer -Pre -Version 2.0.0-preview1-final  
update-package Microsoft.EntityFrameworkCore.Tools -Pre -Version 2.0.0-preview1-final  

sıfırdan yuklemelerde install-package yaz


# Genel Komutlar
- install-package microsoft.entityframeworkcore.tools  // gerekli
- install-package Microsoft.EntityFrameworkCore.SqlServer.Design

## Package Manager Console (powershell kullanır)
- get-help EntityFrameworkCore   // komutlar hakkında bilgi

- Add-Migration Kullanici-Stok
- Update-Database
- Scaffold-DbContext -connection "server=.;database=panda_YENI;trusted_connection=true" -provider microsoft.Entityframeworkcore.sqlserver -OutputDir "./Panda-Model"


- Update-Package -reinstall  // package.configden yukler
