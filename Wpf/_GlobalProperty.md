````

<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
        mc:Ignorable="d"
        Title="MainWindow" Height="350" Width="525">
    <Grid>
        <StackPanel>
            <TextBox x:Name="StorageFolderField"
                     Text="{Binding Path=(local:AppSettings.StorageFolder), Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}" />
          
            <TextBlock x:Name="StorageFolderDisplay"
                       Text="{Binding Path=(local:AppSettings.StorageFolder)}" />
            <Button Content="Button" Click="Button_Click"/>


        </StackPanel>

    </Grid>
</Window>


using System.Windows;

namespace WpfApp3
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            AppSettings.StorageFolder = "d:\\xxxxxxxxx";
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            AppSettings.StorageFolder = "denememem";
        }
    }
}

    
    
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp3
{
    public static class AppSettings
    {
        public static event EventHandler StorageFolderChanged;

        private static string _storageFolder;
        public static string StorageFolder
        {
            get { return _storageFolder; }
            set
            {
                if (value != _storageFolder)
                {
                    _storageFolder = value;

                    if (StorageFolderChanged != null)
                        StorageFolderChanged(null, EventArgs.Empty);
                }
            }
        }
    }
}

````
