#Task Tanımlama
````
public static Task<ObservableCollection<TSource>> ToObservableAsync<TSource>(this IEnumerable<TSource> source,DbContext dc)
        {
            Task<ObservableCollection<TSource>> task1 = new Task<ObservableCollection<TSource>>(
                () =>
                    {
                        var u = new ObservableCollection<TSource>(source);
                        return u;
                    }

               );

            task1.Start();

            return task1;

            ///////////////////////////////////////////////////////////

            Task<ObservableCollection<TSource>> task1 = Task<ObservableCollection<TSource>>.Factory.StartNew(() => {
                var u = new ObservableCollection<TSource>(source);
                return u;
            });

            return task1;
        }

    }
  
  ````
