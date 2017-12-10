<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
         xmlns:fa="http://schemas.fontawesome.io/icons/"
        mc:Ignorable="d"
        Title="MainWindow" Height="350" Width="525">
    <Canvas Margin="0,0,340.4,290.8">
        <Grid HorizontalAlignment="Left" Height="49"  VerticalAlignment="Top" Width="229" RenderTransformOrigin="0.5,0.5" Canvas.Left="82" Canvas.Top="93">

            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*"/>
                <ColumnDefinition Width="Auto"/>
            </Grid.ColumnDefinitions>

            <TextBox VerticalContentAlignment="Center" Padding="0,0,50,0" BorderBrush="Red" BorderThickness="2" Grid.Column="0" Text="deneme"/>
            <Button BorderThickness="0" Margin="-45,5,5,5" Background="Transparent" Width="40"  Grid.Column="1">
                <fa:FontAwesome FontWeight="Thin"  FontSize="36" TextElement.Foreground="Red" Icon="Search" />
            </Button>

        </Grid>

    </Canvas>
</Window>
