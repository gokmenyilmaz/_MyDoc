# https://www.thereformedprogrammer.net/six-ways-to-build-better-entity-framework-core-and-ef6-applications/
- test

# efcore Enterprise
https://www.codeproject.com/Articles/1160586/EF-Core-for-Enterprise

# DDD efcore2
https://msdn.microsoft.com/tr-tr/magazine/mt826347

# Önemli  (Disconnect data adding modifistate problemi)
https://msdn.microsoft.com/en-us/magazine/dn166926.aspx
https://stackoverflow.com/questions/14902408/why-does-entity-framework-insert-children-when-i-update-the-parent
http://www.entityframeworktutorial.net/EntityFramework5/update-entity-graph-using-dbcontext.aspx
https://app.pluralsight.com/library/courses/entity-framework-enterprise-update/table-of-contents

# publishhatası
4.7 publish edince hata veriyor dikkattt sorun çözümü
sarı uyarı için .csproj içine

````
   <Target Name="UpdateOriginalItemSpecs" AfterTargets="ResolveAssemblyReferences">
    <ItemGroup>
      <ReferencePath>
        <OriginalItemSpec>%(ReferencePath.FileName)</OriginalItemSpec>
      </ReferencePath>
    </ItemGroup>
  </Target>
  
````

# Çok önemli
https://docs.microsoft.com/en-us/ef/core/modeling/relationships

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
