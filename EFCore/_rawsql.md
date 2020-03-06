````
 public List<DepoCikisFisDTO> DepoFisListesiGetir2019()
        {
            var dc = new SatinAlmaDbContextYeni();

            var faturst = dc.Set<DEPO_FATUIRS>()
                .FromSql("select * from NetsisDepo.FATUIRS_2019")
                .AsNoTracking()
                .ToList();

            var kalemler = dc.Set<DEPO_STHAR>()
                .FromSql("select a.* from NetsisDepo.STHAR_2019 a inner join NetsisDepo.FATUIRS_2019 b on a.FISNO=b.FATIRS_NO")
                .AsNoTracking()
                .ToLookup(f => f.FISNO);

            var masrafMerk = dc.MasrafMerkezleri
                .FromSql("select a.MKOD,a.MASRAFMERKEZAD from NetsisDepo.MASRAFMERKEZ a inner join NetsisDepo.FATUIRS_2019 b on a.MKOD=b.CARI_KODU GROUP BY a.MKOD,a.MASRAFMERKEZAD")
                .AsNoTracking()
                .ToDictionary(c => c.MKOD);

            var stSabits = dc.StokSabit
                               .AsNoTracking()
                .ToDictionary(c => c.STOK_KODU);

            foreach (var item in faturst)
            {
                item.FIS_KALEMLERI = kalemler[item.FATIRS_NO].ToList();
            };

            var sonuc = faturst
                       .OrderByDescending(c => c.TARIH)
                       .Select(c => new DepoCikisFisDTO
                       {
                           FisNo = c.FATIRS_NO,
                           FisTarihi = c.TARIH,
                           TalepEdenKisi = c.ACIKLAMA.FromNetsisCollation(),
                           TeslimAlanKisi = c.S_YEDEK1.FromNetsisCollation(),
                           MasrafMerkeziKod = c.CARI_KODU,
                           MasrafMerkeziAd = masrafMerk.GetValueOrDefault(c.CARI_KODU)?.MASRAFMERKEZAD.FromNetsisCollation(),

                           KalemlerDTO = c.FIS_KALEMLERI.Select(k => new DepoCikisFisKalemDTO
                           {
                               Id = k.INCKEYNO,
                               StokKodu = k.STOK_KODU,
                               StokAd = stSabits[k.STOK_KODU].STOK_ADI_TR.FromNetsisCollation(),
                               CikisMiktar = k.STHAR_GCMIK.GetValueOrDefault(),
                               OlcuBirimAd = stSabits[k.STOK_KODU].OLCU_BR1,
                           }).ToList().ToObservableCollection()
                       })

                       .ToList();

            return sonuc;
        }

````
