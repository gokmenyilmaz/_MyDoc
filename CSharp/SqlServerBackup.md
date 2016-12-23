````
DenetimDbContext dc = new DenetimDbContext();
            System.Windows.Forms.SaveFileDialog fd = new System.Windows.Forms.SaveFileDialog();

            fd.Filter = "Sql Yedek Dosyası|*.bak";

            fd.FilterIndex = 0;

            System.Windows.Forms.DialogResult dia = fd.ShowDialog();

            if (dia == System.Windows.Forms.DialogResult.OK)
            {
                var sqlDosyaAdı = fd.FileName;

                string sql = "backup database DenetimDb to disk='" + sqlDosyaAdı + "'";
                try
                {
                    dc.Database.ExecuteSqlCommand(TransactionalBehavior.DoNotEnsureTransaction,sql);
                    MessageBox.Show("Yedek Alındı");
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                   
                }
           }
````
