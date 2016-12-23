````
http://msdn.microsoft.com/tr-tr/data/jj574232.aspx

1-Eagerly Loading

 var blogs1 = context.Blogs                          
.Include(b => b.Posts)                          
.ToList();

join ile bağlayıp tek sorgu oluşturdu.

multiple çağırma
.Include(b => b.Posts.Select(p => p.Comments))


2-Lazy Loading==deferred loading

virtual olarak işaretlenen property ler için
property ye erişim olduğunda veritabanına bağlanır.
proxy sınıflarıyla bağlanır.

virtualden çıktığında lazy otomatik kaybolur.

3-Explicitly Loading    tek entry

dc.Entry(seçilenpersonel).Reference(p => p.Blog).Load();


4-Filtre

dc.Entry(f).Collection(p => p.Firma_Personel).Query().Where(c => c.Meslek_ID == 6).Load();


tanımlı nesneye sqlquery ile data çekme

var destinations = context.Destinations
.SqlQuery("SELECT * FROM dbo.TopTenDestinations");
````
