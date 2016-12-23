````
void firmalar_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {

            foreach (var item in e.NewItems)
            {
                dc.Set(item.GetType()).Add(item);
            }

            if (e.OldItems == null) return;
      

            foreach (var item in e.OldItems)
            {
                dc.Set(item.GetType()).Remove(item);
            }


        }
        
        ````
