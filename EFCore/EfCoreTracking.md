# Tracking
Eğer Id tracking de varsa track listesine eklemez.

| Id | CariAd | Il | Ulke |   |
|----|--------|----|------|---|
| 1  | aca    |    |      |   |
| 2  | cuki   |    |      |   |



````
   SatisDbContext dc1 = new SatisDbContext();
            //var tumu = dc1.Siparis.Include(c => c.Cari).ToList();

            var cariler = dc1.Caris.ToList();
            var s = dc1.ChangeTracker.Entries<Cari>();

            var cari3 = new Cari { Id = 2, CariAd = "acax", Il = null, Ulke = null };


            var yeni = new Siparis();
            yeni.SiparisAd = "ilk sip";
            yeni.Cari = cari3;
           
            dc1.Siparis.Add(yeni);


             var sc = dc1.ChangeTracker.Entries<Cari>();

            //dc1.SaveChanges();
            
            
````
