````
https://www.youtube.com/watch?v=YDobmucohqk

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApplication11
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 

  

    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        MüşteriBase must = null;
        private void comboBox1_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            //if (comboBox1.Text== "Müşteri")
            //{
            //    must = new Müşteri();
            //}

            //if (comboBox1.Text == "Müdür")
            //{
            //    must = new Müdür();
            //}
            ComboBoxItem typeItem = (ComboBoxItem)comboBox1.SelectedItem;

            must = Factory.CreateMüsteri(typeItem.Content.ToString());

        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            var z = must;

            must.Validate();
        }
    }

    public class Factory
    {
        static Dictionary<string, MüşteriBase> liste = null;

        static Factory()
        {
            if (liste == null)
            {
                liste = new Dictionary<string, MüşteriBase>();
                liste.Add("Müşteri", new Müşteri());
                liste.Add("Müdür", new Müdür());
            }
        }

        public static MüşteriBase CreateMüsteri(string musteritip_ad)
        {
            return liste[musteritip_ad];
        }
    }

    public class MüşteriBase
    {
        public int Id { get; set; }
        public string Ad { get; set; }
        public virtual void Validate()
        {
            if (String.IsNullOrEmpty(Ad)){
                MessageBox.Show("Ad olmalı");
            }
        }
    }

    public class Müşteri:MüşteriBase
    {
        public string KrediKartNo { get; set; }

        public override void Validate()
        {
            if (String.IsNullOrEmpty(KrediKartNo))
            {
                MessageBox.Show("Kredi kart no no olmalı");
            }
            base.Validate();
        }
    }

    public class Müdür: MüşteriBase
    {
        public string MüdürTel { get; set; }
        public override void Validate()
        {
            if (String.IsNullOrEmpty(MüdürTel))
            {
                MessageBox.Show("Müdürtel no no olmalı");
            }
            base.Validate();
        }

    }

}
````
