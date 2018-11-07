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



declare @BackupFolder_Path varchar(250) ='D:\_DB_YEDEK\'

declare @PandapDb_Path varchar(250)=@BackupFolder_Path + FORMAT(getdate(),'yyyyMMdd-HHmm')+ '_PandapDb.pbak'
declare @Panda2018_Path varchar(250)=@BackupFolder_Path + FORMAT(getdate() ,'yyyyMMdd-HHmm')+ '_Panda2018.pbak'
declare @Panda2017_Path varchar(250)=@BackupFolder_Path + FORMAT(getdate(), 'yyyyMMdd-HHmm')+ '_Panda2017.pbak'
declare @NetsisMain_Path varchar(250)=@BackupFolder_Path + FORMAT(getdate(),'yyyyMMdd-HHmm')+ '_Netsis.pbak'
declare @NetsisPer9_Path varchar(250)=@BackupFolder_Path + FORMAT(getdate(),'yyyyMMdd-HHmm')+ '_Per9.pbak'

backup database [PANDAPDB] to Disk=@PandapDb_Path
backup database [PANDA2018] to Disk=@Panda2018_Path
--backup database [PANDA2017] to Disk=@Panda2017_Path
backup database [NETSIS] to Disk=@NetsisMain_Path
backup database [PER9] to Disk=@NetsisPer9_Path

````
