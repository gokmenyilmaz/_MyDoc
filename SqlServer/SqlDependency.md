# sql server kayıt değişikliklerini yakalar


alter database pandapdb set enable_broker with rollback immediate;  
Select databasepropertyex('pandapdb', 'IsBrokerEnabled')  

````
EXEC sp_configure 'show advanced options', '1' go
RECONFIGURE
go
EXEC sp_configure 'clr enabled', 1
go
RECONFIGURE
````


http://thedatafarm.com/ado-net-2/its-working-sqldependency-heres-how-i-did-it/  
http://www.dreamincode.net/forums/topic/156991-using-sqldependency-to-monitor-sql-database-changes/  
yukardaki koşulları sağlamalı

````
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        private string GetConnectionString()
        {
            return @"server=.;database=Panda2017;user id=sa;password=1";
        }

        SqlConnection connection;

        public Form1()
        {
            InitializeComponent();

            connection = new SqlConnection(GetConnectionString());
            connection.Open();

          
            SomeMethod();
         
        }

        void OnDependencyChange(object sender, SqlNotificationEventArgs e)
        {
            SqlDependency dep = sender as SqlDependency;

            MessageBox.Show("islem");
            dep.OnChange -= new OnChangeEventHandler(OnDependencyChange);
            SomeMethod();
        }

        void SomeMethod()
        {
            // Assume connection is an open SqlConnection.
            // Create a new SqlCommand object.
            using (SqlCommand cmd =
                new SqlCommand("SELECT  [Id] ,[Alan],[DosyaAdi],[Gonderen],[MesajIcerik],[MesajTarihi],[Resim],[DokumanAdi] FROM dbo.Mesajlar where Gonderen='2' ", connection))
            {
                // Create a dependency and associate it with the SqlCommand.
                SqlDependency dependency = new SqlDependency(cmd);

                SqlDependency.Start(GetConnectionString());

                dependency.OnChange += new OnChangeEventHandler(OnDependencyChange);

                // Execute the command.
                using (SqlDataReader dr = cmd.ExecuteReader())
                {
                    {
                        while (dr.Read())
                        {
                            Console.WriteLine("Name = " + dr[1].ToString());
                        }
                    }
                }
            }
        }
    }
}

````
