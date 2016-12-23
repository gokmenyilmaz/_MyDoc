````
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace GumrukKapiCikisKontrol.Models
{



    public class ModelBase : INotifyPropertyChanged, IDataErrorInfo
    {

        public event PropertyChangedEventHandler PropertyChanged;

        public void RaisePropertyChanged([CallerMemberName] string propertyName = null)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }

        public void RaisePropertyChangedAll()
        {


            if (PropertyChanged != null)
            {
                PropertyInfo[] propList = this.GetType().GetProperties();

                foreach (var prop in propList)
                {

                    
                    PropertyChanged(this, new PropertyChangedEventArgs(prop.Name));
                }


            }
        }


        private bool isDirty;

        [NotMapped]
        public bool IsDirty
        {
            get
            {
                return isDirty;
            }

            set
            {
                isDirty = value;
                RaisePropertyChanged();

                RaisePropertyChangedAll();
            }
        }

        public bool ModelIsValid()
        {
            var ctx = new ValidationContext(this, null, null);
            var errors = new List<ValidationResult>();
            var xisValid = Validator.TryValidateObject(this, ctx, errors, true);
            hatalar = "";

            hatalar = string.Join(Environment.NewLine, errors.Select(c => c.ErrorMessage));
            RaisePropertyChanged("Error");

            return hatalar.Length == 0;
        }

        public string hatalar;

        [NotMapped]
        public string Error
        {
            get
            {
                return hatalar;
            }
        }





        public string this[string columnName]
        {
            get
            {

                if (columnName.Contains(".")) return string.Empty;

                PropertyInfo propertyInfo = this.GetType().GetProperty(columnName);
                var results = new List<ValidationResult>();
                var ctx = new ValidationContext(this, null, null) { MemberName = columnName };

                var result = Validator.TryValidateProperty(propertyInfo.GetValue(this, null), ctx, results);

                if (!result)
                {
                    var validationResult = results.First();
                    if (IsDirty) return validationResult.ErrorMessage;
                }

                return string.Empty;
            }
        }
    }
}
````
