
````
<Style TargetType="{x:Type dxg:GridColumn}">
  <Setter Property="Width" Value="150" />
</Style>

<Style TargetType="dxg:BandHeaderControl">
  <Setter Property="Background" Value="Yellow"/>
</Style>


<Style TargetType="dxg:GridColumnHeader">
  <Setter Property="Background" Value="Red"/>
</Style>

````


````
  <DataTemplate x:Key="ctemplate1">
            <Border Name="br1" Background="Transparent" CornerRadius="1" Margin="1" BorderBrush="LightSteelBlue"  BorderThickness="1">
                <dxe:TextEdit   HorizontalContentAlignment="Center"   dx:ThemeManager.ThemeName="XXX"   
                                                      Name="PART_Editor">
                </dxe:TextEdit>
            </Border>

            <DataTemplate.Triggers>
                <DataTrigger Binding="{Binding Path=RowData.IsSelected }" Value="True">
                    <Setter TargetName="PART_Editor" Property="Foreground" Value="Red"/>
                    <Setter TargetName="br1" Property="Background" Value="White"/>
                </DataTrigger>

            </DataTemplate.Triggers>
        </DataTemplate>
````
