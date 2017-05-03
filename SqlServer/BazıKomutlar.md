````
SELECT DATEFROMPARTS ( 2010, 12, 31 ) AS Tarih;  
````
````
select * from (
	SELECT '2019-09-17' as tar) c
where c.tar> DATEFROMPARTS(2016,12,31) 
````
