Browserlar refresh yaptığında son request neyse onu çalıştırır. Eğer get request ise sorun olmaz ama
post request ise aynı requesti bir daha çağırır ve dublicate post meydana gelir.

Bunun çözüm patterni yukarıda isimle anılır. RedirectToAction komutu kullanılarak yeni bir adres belirleninir ve get ile
onun çağırılması beklenir.Dolayısıyla farklı bir request meydana gelir.
