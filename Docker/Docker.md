Aspnet core için docker,

https://stormpath.com/blog/tutorial-deploy-asp-net-core-on-linux-with-docker



http://www.enterprisecoding.com/post/yeni-baslayanlar-icin-docker
###Docker Komutları###
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
Son olarak; elinizin altında bulunmasında fayda olan bir kaç Docker komutunu aşağıda bulabilirsiniz;

Tüm Docker Container’larını silmek (Linux, Mac OS)

docker rm $(docker ps -a -q)
Tüm Docker imajlarını silmek (Linux, Mac OS)

docker rmi $(docker images -q)
