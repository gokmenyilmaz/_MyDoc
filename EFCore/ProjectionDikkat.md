KalemAltListe hareket detay Constructor da new ile tanımlandığında hiçbir zaman null olmaz.       
       ````
       var sonuc = _dc.TblPndStokHareketDetays
               .Include(c => c.SiparisKalemAltListe)
               .Select(k => new KalemDTO
               {
                   //test= k.SiparisKalemAltListe!=null?k.SiparisKalemAltListe.Sum(x => x.UretimdekiMiktar) +0:0,
                   test= k.SiparisKalemAltListe.Count()>0?k.SiparisKalemAltListe.Sum(x => x.UretimdekiMiktar) +0:0,
                  
               }).AsNoTracking().ToList();
       ````
