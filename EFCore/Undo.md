http://code.msdn.microsoft.com/How-to-undo-the-changes-in-00aed3c4


veritabanına gitmeden
   internal void İptal()
        {
            //DenetimDc.Entry(AktifDosya).State = EntityState.Unchanged;

            //DenetimDc.Entry(AktifDosya).Reload();

            //AktifDosya.CancelEdit();

            foreach (var entry in DenetimDc.ChangeTracker.Entries()) 
            { if (entry.State == EntityState.Modified) 
            { entry.State = EntityState.Unchanged; } 
            else if (entry.State == EntityState.Added) 
            { entry.State = EntityState.Detached; } }
        }
