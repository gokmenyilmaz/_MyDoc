
#Disconnect entity problemleri
````
public class sipariskalem
{
public Id {get;set}

[ForeignKey(AmbalajSekli)]
[Required]
public AmbalajSekliId {get;set;}

public AmbalajSekli AmbalajRef {get;set;}

}

public class AmbalajSekli
{
[Key]
public int Id {get;set;}
public string AmbalajAd {get;set;}
}
````

Ana sınıfta required olarak işaretlendiyse ve dataya null atanırsa
Ambalaj şekli beraberinde SiparişKalemide siler

modelBuilder.Entity<TblPndStokHareketDetay>()
.HasOne(c => c.AmbalajSekliRef)
.WithMany()
.HasForeignKey(p => p.AmbalajSekli)
.OnDelete(DeleteBehavior.Restrict);

kullanmak gerekir en azından sileceğinde hata alınır



