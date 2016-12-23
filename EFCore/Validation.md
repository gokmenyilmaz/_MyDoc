````
private int Hatalar(IEnumerable<DbEntityValidationResult> validationErrors)
        {
            var errorCount = 0; string formatYazi = "";
            foreach (DbEntityValidationResult validationError in validationErrors)
            {
                foreach (DbValidationError propertyError in validationError.ValidationErrors)
                {
                    var entityname = validationError.Entry.Entity.GetType().BaseType.Name;
                    formatYazi += String.Format(@"Hatalı Tablo:""{0}"" ""{1}"" özelliğinde : ""{2}"" hatası söz konusudur.", entityname, propertyError.PropertyName, propertyError.ErrorMessage);
                    formatYazi += Environment.NewLine;
                }
                errorCount++;
            }
            MessageBox.Show(formatYazi);
            return errorCount;
        }


custom attribute data annotation

sınıfın tepesine
 [CompareUserPass("AnaSüreçKodu", "SüreçKonu", ErrorMessage = "konu ile süreç konu aynı olamaz")]  

eklenecek

 [AttributeUsage(AttributeTargets.Class)]
    public class CompareUserPassAttribute : ValidationAttribute
    {
        private string Property1 { get; set; }
        private string Property2 { get; set; }

        public CompareUserPassAttribute(string PropertyName1, string PropertyName2)
        {
            Property1 = PropertyName1;
            Property2 = PropertyName2;
        }

        public override Boolean IsValid(Object value)
        {
            if (Property1 == null && Property2 == null)
                return true;
            else
            {
                PropertyDescriptorCollection propertiess = TypeDescriptor.GetProperties(value);
                object originalValue1 = propertiess.Find(Property1, true).GetValue(value);
                object originalValue2 = propertiess.Find(Property2, true).GetValue(value);
                if (!originalValue1.Equals(originalValue2))
                    return true;
                else
                    return false;
            }
        }
    } 
````
