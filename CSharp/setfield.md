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
