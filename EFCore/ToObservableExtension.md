````
public static class MyEf_Extension
    {
        public static ObservableCollection<T> ToObservableCollection<T>(this IEnumerable<T> source)
        {
            return new ObservableCollection<T>(source);
        }
    }
    
    yada
 
 
 public static class MyObservable
    {
        public static ObservableCollection<TSource> ToObservable<TSource>(this IEnumerable<TSource> source, DbContext dc)
        {
            var u= new ObservableCollection<TSource>(source);
            u.CollectionChanged += (s, e) =>
              {
                  var c = (NotifyCollectionChangedEventArgs)e;

                  var d = source;

                  if(c.Action== NotifyCollectionChangedAction.Remove)
                  {
                  
                  
                      var z = dc.Entry(c.OldItems[0]); // attach yapıyor dbset belirtmeden
                      z.State = EntityState.Deleted;
                  }

                  if (c.Action == NotifyCollectionChangedAction.Add)
                  {
                      var z = dc.Entry(c.NewItems[0]);
                      z.State = EntityState.Added;
                  }

              };


            return u;
        }

     
    }
````
