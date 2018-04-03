https://msdn.microsoft.com/pt-pt/magazine/mt149362?author=julie+lerman

  ### - propertiler private set tanımlanmalı
  ### - constructur lar private olmalı,  static factory ile oluşturulmalı yada constructur tam validasyonlu
  ### - foreign keyler Id li olmalı (navigation property yasak)
  ### - listeler readonly tanımlanmalı dışardan null yapılmamamlı
  ### - OrdeItem dan Order a referens yasak
  ### - Her repository bir aggregate ile eşleşmeli. (not per entity)
  ### - Repository ler Infrastructure katmanında interface leri domain katmanında olmalı
        Repository ler uow gibi davranmalı. Save ile graphlar la guncellenmeli
  ### - Order.Add(_order_item) yasak yerine Order.AddOrderItem tanımlaması yapılmalı
        Obiqutius language gereğidir. Ortak dil konuşulmalı. 
