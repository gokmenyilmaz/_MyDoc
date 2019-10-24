````
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
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

namespace WpfApp3
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            var str = "server=localhost,1501;database=TestDb;user id=sa;password=NhukJ7854@*!;";

            SqlDependency.Start(str);

            var con = new SqlConnection(str);
            con.Open();

            using (SqlCommand command = new SqlCommand("select Id,Ad,Soyad from dbo.Kimlik1", con))
            {

                SqlDependency dependency = new SqlDependency(command);

                dependency.OnChange += new OnChangeEventHandler(OnDependencyChange);

                command.ExecuteReader();
            }
        }


     
        private void OnDependencyChange(object sender, SqlNotificationEventArgs e)
        {
            Dispatcher.Invoke(() =>
            {
                l1.Content = "çalıştı" + DateTime.Now;

            });


        }
    }
}
````
