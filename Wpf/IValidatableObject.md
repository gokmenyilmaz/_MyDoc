````
       ClearErrors();

            var vcontext = new ValidationContext(this);
            var vresults = new List<ValidationResult>();

            var b = Validator.TryValidateObject(this, vcontext, vresults, true);
````

````
public class Personel : MyBindableBase,IValidatableObject
    {
        private string adres;
        private string adSoyad;
        private int kilo;
        private int yas;

        public string Adres
        {
            get => adres;
            set => SetProperty(ref adres, value);
        }

        [Required(ErrorMessage ="Bu alan gerekli")]
        public string AdSoyad
        {
            get => adSoyad;
            set => SetProperty(ref adSoyad, value);
        }

        public int Kilo
        {
            get => kilo;
            set => SetProperty(ref kilo, value);
        }

        public int Yas
        {
            get => yas;
            set => SetProperty(ref yas, value);
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            // property attribute ları varsa onların validasyonu geçilirse buraya gelir
               
            if (AdSoyad == Adres)
            {
                yield return new ValidationResult("Aynı Olamaz", new[] { nameof(AdSoyad), nameof(Adres) });
            }
        }
    }

````

