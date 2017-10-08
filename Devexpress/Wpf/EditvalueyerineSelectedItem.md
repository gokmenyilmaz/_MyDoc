Xaml tarafına

````
<dxe:ComboBoxEdit Name="cbo1" AutoComplete="True" DisplayMember="Adi"
                                      ItemsSource="{Binding DataContext.AmbalajSekilleri, RelativeSource={RelativeSource AncestorType={x:Type UserControl}}}"  
                                     EditValue="{Binding AmbalajSekliRef, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged, ValidatesOnNotifyDataErrors=True}"
                                    />
````


Domain object tarafına

````
using Pandap.Panda_Model;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pandap.Model
{
    [Table("TBLPNDAMBALAJSEKLI")]
    public partial class TblPndAmbalajSekli: MyBindableBase
    {
        int id;
        [Column("ID")]
        [Key]
        public int Id
        {
            get
            {
                return id;
            }
            set
            {
                SetProperty(ref id, value);

            }
        }

        string adi;
        [Column("ADI", TypeName = "varchar(20)")]
        public string Adi
        {
            get
            {
                return adi;
            }
            set
            {
                SetProperty(ref adi, value);
            }
        }


        public string Adi_English { get; set; }

        [Column("IPTAL")]
        public bool? Iptal { get; set; }


        public override bool Equals(object obj)
        {
            var x = obj as TblPndAmbalajSekli;

            if (x == null) return false;

            return this.Id == x.Id;
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
    }
}

      ````  
