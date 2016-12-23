aspnet_regsql -S DESKTOP-8KGMIER -E -ssadd -sstype p
komutunu çalıştır

sonrada 

````
  <system.web>
    <compilation debug="true" targetFramework="4.5.2"/>
    <httpRuntime targetFramework="4.5.2"/>


    <sessionState mode="SQLServer" timeout="20" 
                  sqlConnectionString="Data Source=DESKTOP-8KGMIER;trusted_connection=true;"
   cookieless="false"/>
      
    
    
  </system.web>
  
  ````
