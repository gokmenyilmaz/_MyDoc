aranacak sonuna sadece yıldız kabul ediyor-Lşke benzeri için    
    
    if (!string.IsNullOrEmpty(aranacak))
                {

                    if (aranacak.Length <= 3) { MessageBox.Show("Aranılan kelime en az 4 karakter olmalıdır."); return; }
                    dc = new DBContext();
                    string sql = "select  EvrakEkId, EvrakId, EkAdı from EvrakEk WHERE CONTAINS(EkIcerik, '\"X\"')";
                    sql = sql.Replace("X", aranacak);
                    var sonuc = dc.Database.SqlQuery<EvrakDTO>(sql).ToList();
                    grdEvrakListesi.ItemsSource = sonuc;

                }
