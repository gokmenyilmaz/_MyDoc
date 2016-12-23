   ````
   public static ObservableCollection<TEntity> ToTrackedObservableCollection<TEntity>(this DbSet<TEntity> set, Expression<Func<TEntity, bool>> expression)
            where TEntity : class
        {
            var context = set.GetService<DbContext>();
            var data = set.Where(expression).ToList();
            var collection = new ObservableCollection<TEntity>(data);

            collection.CollectionChanged += (s, e) =>
            {
                if (e.NewItems != null)
                {
                    context.AddRange(e.NewItems.Cast<TEntity>());
                }

                if (e.OldItems != null)
                {
                    context.RemoveRange(e.OldItems.Cast<TEntity>());
                }
            };

            return collection;
        }
        
       ````
