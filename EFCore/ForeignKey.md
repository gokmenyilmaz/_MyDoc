````
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;


namespace WpfApplication1.Models
{
    public partial class Hareket
    {
        [Key]
        public int Id { get; set; }
        public int Kilo { get; set; }
        public int PersonelId { get; set; }
     
        [ForeignKey("PersonelId")]
        public Personel Personel { get; set; }
    }

    public partial class Personel
    {
        [Key]
        public int Id { get; set; }
        public string Ad { get; set; }
        public string Soyad { get; set; }

        public ObservableCollection<Hareket> Harekets { get; set; }
    }

    public class Test
    {
        public Test()
        {
            denetimdbContext dc = new denetimdbContext();
            var v0 = dc.Personels.ToList();
            var v1 = dc.Personels.First().Harekets.ToList();

        }
    }
}
````
