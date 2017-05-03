````
SELECT DATEFROMPARTS ( 2010, 12, 31 ) AS Tarih;  
````
````
select * from (
	SELECT '2019-09-17' as tar) c
where c.tar> DATEFROMPARTS(2016,12,31) 
````

Conversion failed when converting date and/or time from character string.
hatası
````

select top 1 DenetlemeTar from 
 FORM_YATAYDATA
WHERE   FormAdi LIKE '%müeyy%'
and cast(convert(varchar(200),DenetlemeTar) as date) =DATEFROMPARTS(2013,9,17)
````
varchar(200) varchar(max) olursa düzelir.

