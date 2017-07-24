intelisense sorunlu dikkat!!1

````
StokHareket = dc.TblPndStokHarekets
                .Include(c=>c.StokHareketDetayItems).ThenInclude(c=>c.LmeTipiBilgi)
                .Include(c=>c.StokHareketDetayItems).ThenInclude(c=>c.AlasimBilgi)
                .FirstOrDefault(c => c.Id == 1111);
                
 ````
