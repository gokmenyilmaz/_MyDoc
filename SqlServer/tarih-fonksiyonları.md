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
