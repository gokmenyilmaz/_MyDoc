````
  protected bool SetField<T>(ref T field, T value, string propertyName)
        {
            if (EqualityComparer<T>.Default.Equals(field, value))
            {
                return false;
            }
            if (this.Loaded)
            {
                if (this.ChangedList == null)
                {
                    this.ChangedList = new List<FieldPropertyChanged>();
                }
                this.ChangedList.Add(new FieldPropertyChanged(propertyName, (T) field, value));
            }
            field = value;
            this.Changed = true;
            this.OnPropertyChanged(propertyName);
            return true;
        }
````


````
public bool IsProcessed
        {
            get { return _IsProcessed; }
            set { SetProperty(ref _IsProcessed, value); }
        }


        protected bool SetProperty<T>(ref T storage, T value, [CallerMemberName] string propertyName = "") {
            if ((storage == null && value == null) ||
                (storage != null && storage.Equals(value)))
                return false;

            storage = value;
            NotifyPropertyChanged(propertyName);
            return true;
        }
        ````
