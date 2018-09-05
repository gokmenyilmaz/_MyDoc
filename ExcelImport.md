   ````
   private async void OnExcelImport()
        {
            OpenFileDialogService.Filter = "Excel Dosyaları|*.xls;*.xlsx;";
            OpenFileDialogService.FilterIndex = 1;
            OpenFileDialogService.Title = "Dosya Seç";

            var cevap = OpenFileDialogService.ShowDialog();

            if (cevap == false) return;

            Workbook workbook = new Workbook();

            bool b = workbook.LoadDocument(OpenFileDialogService.File.GetFullName());

            Worksheet worksheet1 = workbook.Worksheets[0];

            var tubleData = ExcelService.SutunBasliklariYerindeMi("OperasyonRisk", worksheet1);

            if (tubleData.Item1 == false)
            {
                MessageBox.Show(tubleData.Item2, "Pandap", MessageBoxButton.OK, MessageBoxImage.Information);
                return;
            }

            var sutunListe = tubleData.Item3;
            var maxSatir = 10000;

            var keyExcelSutun = sutunListe.Where(c => c.IsExcelKey == true).FirstOrDefault().ExcelBaslikHücreKonum;

            SplashScreenHelper.Instance.ShowLoadingScreen();

            int eklenenKayitSayisi = 0;

            for (int satirId = 2; satirId < maxSatir; satirId++)
            {
                var keyExcelValue = worksheet1.Cells[keyExcelSutun.Substring(0, 1) + satirId].Value.ToString();

                if (String.IsNullOrEmpty(keyExcelValue))
                {
                    eklenenKayitSayisi = satirId - 2;
                    break;
                }

                var tableRow = CariRiskListe.FirstOrDefault(c => c.CariKod == keyExcelValue);

                if (tableRow == null) continue;

                foreach (var soru in sutunListe)
                {
                    string hücreKonumHarf = soru.ExcelBaslikHücreKonum.Substring(0, 1);
                    string hücreKonum = hücreKonumHarf + satirId.ToString();

                    DevExpress.Spreadsheet.CellValue hucreDeger = worksheet1.Cells[hücreKonum].Value;

                    if (soru.IsText.GetValueOrDefault())
                        NesneIslemleri.OzellikDegerAta(tableRow, soru.DbTabloSutunBaslik, hucreDeger.TextValue);

                    if (soru.IsNumeric.GetValueOrDefault())
                    {
                        double? ndeger = hucreDeger.NumericValue;
                        if (hucreDeger.TextValue?.Trim().Length == 0) ndeger = null;

                        NesneIslemleri.OzellikDegerAta(tableRow, soru.DbTabloSutunBaslik, ndeger);
                    }
                }
            }

            SplashScreenHelper.Instance.HideSplashScreen();
            MessageBox.Show(eklenenKayitSayisi.ToString() + " Adet Kayıt Güncellendi");
        }
   ````
        ----------------------------------------------
    ````
          public class ExcelService
    {
        public ExcelService()
        {
        }

        internal static Tuple<bool, string, List<ExcelImportTanim>> SutunBasliklariYerindeMi(string formAdi, Worksheet _worksheet)
        {
            UnitOfWork uow = new UnitOfWork();

            var sutunListe = uow.AppRepo.ExcelImportTanimlar(formAdi);

            string sonucBilgi = "";

            foreach (var soru in sutunListe)
            {
                string sutunBaslik = _worksheet.Cells[soru.ExcelBaslikHücreKonum].Value.ToString();

                if (sutunBaslik != soru.DbTabloSutunBaslik)
                {
                    string bilgi = soru.DbTabloSutunBaslik + " Sutun Başlığı veya Hücre Konumu Değiştirilemez" +
                        "\r\nBaşlığın Bulunması Gereken Hücre: " + soru.ExcelBaslikHücreKonum +
                         "\r\n(Orjinal Excel Dosyasına Bakınız)";

                    sonucBilgi = bilgi; break;
                }
            }

            bool isValid = sonucBilgi == "";

            return new Tuple<bool, string, List<ExcelImportTanim>>(isValid, sonucBilgi, sutunListe);
        }
    }
````
-------------------------------------
````
 public class ExcelImportTanim
    {
        [Key]
        public int Id { get; set; }

        public string FormAdi { get; set; }
        public string DbTabloSutunBaslik { get; set; }
        public string ExcelBaslikHücreKonum { get; set; }

        public bool? IsExcelKey { get; set; }

        public bool? IsNumeric { get; set; }
        public bool? IsText { get; set; }
    }
    ````
