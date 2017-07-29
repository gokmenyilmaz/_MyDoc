4.7 publish edince hata veriyor dikkattt

https://docs.microsoft.com/en-us/ef/core/querying/basic  
https://app.pluralsight.com/library/courses/entity-framework-core-getting-started/table-of-contents  

# Reverse Enginer from existing database
https://docs.microsoft.com/en-us/ef/core/get-started/full-dotnet/existing-db  
Scaffold-DbContext "Server=.;Database=domaindb;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Model/DbEntities


# core2  12.06.2016 itibariyle framework 4.6 ile uyumlu
install-package Microsoft.EntityFrameworkCore.SqlServer -Pre -Version 2.0.0-preview2-final  
install-package Microsoft.EntityFrameworkCore.Tools -Pre -Version 2.0.0-preview2-final  

csproj içinde 
````
<ItemGroup>
  <DotNetCliToolReference
      Include="Microsoft.EntityFrameworkCore.Tools.DotNet"
      Version="2.0.0-preview2-final" />
</ItemGroup>
````

## Package Manager Console (powershell kullanır)
- get-help EntityFrameworkCore   // komutlar hakkında bilgi

- Add-Migration Kullanici-Stok
- Update-Database
- Scaffold-DbContext -connection "server=.;database=PANDA2017T;trusted_connection=true" -provider microsoft.Entityframeworkcore.sqlserver -OutputDir "./Panda-Model"  (fluent olarak)

Scaffold-DbContext -connection "server=.;database=PANDA2017;trusted_connection=true" -provider microsoft.Entityframeworkcore.sqlserver -OutputDir "./Panda-Model" -d (data annotaion olarak)


- Update-Package -reinstall  // package.configden yukler
