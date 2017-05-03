### Convert
https://www.w3schools.com/sql/func_convert.asp


### DATEFORMAT 
````
-- Set date format to day/month/year.  
SET DATEFORMAT dmy;  
GO  
DECLARE @datevar datetime2 = '31/12/2008 09:01:01.1234567';  
SELECT @datevar;  
GO  
-- Result: 2008-12-31 09:01:01.123  
SET DATEFORMAT dmy;  
GO  
DECLARE @datevar datetime2 = '12/31/2008 09:01:01.1234567';  
SELECT @datevar;  
GO  
-- Result: Msg 241: Conversion failed when converting date and/or time -- from character string.  

GO  
````
### tarih elde etme
````
SELECT DATEFROMPARTS ( 2010, 12, 31 ) AS Tarih;  
````

### date to int
````
SELECT CONVERT(INT, CAST ('2013-08-05 09:23:30' as DATETIME))
````


### Conversion failed when converting date and/or time from character string.
````
select cast(DenetlemeTar as datetime) from 
 FORM_YATAYDATA
WHERE   FormAdi LIKE '%müeyy%'
and cast(DenetlemeTar as datetime) between DATEFROMPARTS(2016,1,1) and  DATEFROMPARTS(2017,12,31)
````


````

select top 1 DenetlemeTar from 
 FORM_YATAYDATA
WHERE   FormAdi LIKE '%müeyy%'
and cast(convert(varchar(200),DenetlemeTar) as date) =DATEFROMPARTS(2013,9,17)
````
### çözüm
varchar(200) varchar(max) olursa düzelir.

# Örnek sorgular
````
SELECT     Id,DenetlemeTar,convert(Int,CONVERT(datetime, CONVERT(varchar(MAX), DenetlemeTar), 105)) as u ,
convert(Int,cast(DATEFROMPARTS(2013, 9, 17) as datetime) )
FROM         dbo.FORM_YATAYDATA
WHERE     (FormAdi LIKE '%müeyy%')
order by Id
````
````
SELECT     Id, SatirGuid, KontrolNot, KurumKod, IlKod, FormAdi, DenetimTipi, PilotKurumKaydiMi, DenetlemeTar, TetkikTarihi, AnketorId, AnketorId2, AnketorAd, AnketorAd2,AnketorId_Temp, DenekAd, DenekAd_Tam, ProtokolNo, GeciciAlan, GeçiciAlanDüzeltilmiş, GeçiciAlanDüzeltilmiş1, Donem, KayitTar1, KayıtTar_Denetleyici1, CdVarMi,KargoyaVerildi, KayıtTar_Denetleyici2, SoruAçıklamaBirleşik, SoruDosyaEkBirleşik, TCP_IP, TempAlan, S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12,S13, S14, S15, S16, S17, S18, S19, S20, S21, S22, S23, S24, S25, S26, S27, S28, S29, S30, S31, S32, S33, S34, S35, S36, S37, S38, S39, S40, S41, S42, S43, S44,S45, S46, S47, S48, S49, S50, S51, S52, S53, S54, S55, S56, S57, S58, S59, S60, S61, S62, S63, S64, S65, S66, S67, S68, S69, S70, S71, S72, S73, S74, S75, S76,S77, S78, S79, S80, S81, S82, S83, S84, S85, S86, S87, S88, S89, S90, S91, S92, S93, S94, S95, S96, S97, S98, S99, S100
FROM   dbo.FORM_YATAYDATA
WHERE     (FormAdi LIKE '%müeyy%') AND (CONVERT(datetime, CONVERT(varchar(MAX), DenetlemeTar), 105) BETWEEN DATEFROMPARTS(2016, 1, 1) AND  DATEFROMPARTS(2017, 12, 31))
````
