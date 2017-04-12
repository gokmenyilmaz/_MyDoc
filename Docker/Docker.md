Aspnet core için docker,

https://stormpath.com/blog/tutorial-deploy-asp-net-core-on-linux-with-docker



http://www.enterprisecoding.com/post/yeni-baslayanlar-icin-docker
# Docker Komutları #
Çalışan Container’ları listelemek için

docker ps
Tüm container’ları listelemek için;
docker ps -a

Çalışan bir container’ı durdurmak için;
docker stop  [CONTAINER_ID]

Container’ı silmek için;
docker rm [CONTAINER_ID]

Docker imajını silmek için;
docker rmi [İMAJ_ADI]

Tüm Docker Container’larını silmek (Linux, Mac OS)
* docker rm $(docker ps -a -q)
* docker rm -f $(docker ps -a -q)

Tüm Docker imajlarını silmek (Linux, Mac OS)
docker rmi $(docker images -q)

# Bash erişim
* PS C:\Users\Gokmen1977> docker exec -i -t  f9021a6b89e1  /bin/bash
* linux version : cat /etc/issue
* Dockerdan local makina current foldera kopyalama
 -- docker cp 506f:/var/opt/mssql/log/errorlog .



# Sql Server Linux 
image çekmek için
docker pull microsoft/mssql-server-linux

docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 -d microsoft/mssql-server-linux

varsayılan yol : root@f9021a6b89e1:/var/opt/mssql/data#

çalışmazsa log kayıtlarından niye çalışmadığına bak

linqpad kullan erişmek için

# my sql
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3366:3366 -d mysql

# Windows Container

Nano Server oluşturarak işlemler yapılır
https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/quick-start-windows-10


