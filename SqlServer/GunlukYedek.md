````
declare @dosyaAdi varchar(250)='C:\_SURUCU_D\DBYEDEKLER\DenetimDb.bak' + 
replace(replace(replace(CONVERT(VARCHAR(10), GETDATE(), 103) + ' '  + 
convert(VARCHAR(8), GETDATE(), 14),'/','_'),' ','-'),':','_') + '.bak'
backup database [DenetimDb] to Disk=@dosyaAdi

sql jobs lardan ilk stepte tanımlanıyor

yada basitçe

declare @dosyaAdi varchar(250)='C:\_SURUCU_D\DBYEDEKLER\DenetimDb\DenetimDb_' + 
FORMAT(getdate(), 'yyyyMMdd-hhmm')+ '.bak'
backup database [DenetimDb] to Disk=@dosyaAdi

````
