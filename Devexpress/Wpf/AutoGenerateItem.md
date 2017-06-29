Datalayout Control için AutogeneratingItem

````
    <Grid>

        <dxlc:DataLayoutControl AutoGenerateItems="False" x:Name="stokHareketDataLayout" />

    </Grid>
````

````
public partial class MainWindow : Window
    {


        StokHareketDetayViewModel vm = new StokHareketDetayViewModel();
        public MainWindow()
        {
            InitializeComponent();
            stokHareketDataLayout.AutoGeneratingItem += DynamicFormManager.StokHareketDataLayout_AutoGeneratingItem;


            stokHareketDataLayout.AutoGenerateItems = true;

            stokHareketDataLayout.Tag = vm;
            stokHareketDataLayout.CurrentItem = vm.StokHareketDetay;

            this.DataContext = vm;
        }

       
    }
````

````
using DevExpress.Xpf.Editors;
using DevExpress.Xpf.Grid.LookUp;
using DevExpress.Xpf.LayoutControl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;

namespace WpfApp5
{
    public enum MyControlType
    {
        Default,
        ComboBoxEdit,
        LookUpEditAdv
    }

    [System.AttributeUsage(AttributeTargets.Property)]
    public class IsAuto : System.Attribute
    {

        public IsAuto()
        {
            //MinWidth = 150;

        }

        public MyControlType ControlType { get; set; }
        public double MinWidth { get; set; }
        public double Width { get; set; }

        public string ItemsSourcePath { get; set; }
        public string DisplayNamePath { get; set; }
        public string ValueMemberPath { get; set; }
    }

    [System.AttributeUsage(AttributeTargets.Property)]
    public class MyLabelPositionAttribute : System.Attribute
    {
        public MyLabelPositionAttribute(LayoutItemLabelPosition _position)
        {
            LabelPosition = _position;
        }
        public LayoutItemLabelPosition LabelPosition { get; set; }
    }

    public  class DynamicFormManager
    {
        public static void StokHareketDataLayout_AutoGeneratingItem(object sender, DataLayoutControlAutoGeneratingItemEventArgs e)
        {
            
        }
    }
}

````
