intelisense sorunlu dikkat!!1

````
StokHareket = dc.TblPndStokHarekets
                .Include(c=>c.StokHareketDetayItems)
                    .ThenInclude(c=>c.LmeTipiBilgi)
                .FirstOrDefault(c => c.Id == 1111);
                
 ````
