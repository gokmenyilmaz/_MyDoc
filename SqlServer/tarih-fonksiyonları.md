### cast(x as date) için varsayılan format
````
set dateformat dmy
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

