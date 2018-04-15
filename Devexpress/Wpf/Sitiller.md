````
global çalışmaz key eklenmesi gerekir

<Style x:Key="c1" TargetType="dxg:LightweightCellEditor" 
                        BasedOn="{StaticResource {dxgt:GridRowThemeKey ResourceKey=LightweightCellStyle}}" >
            <Setter Property="Background" Value="Red" />
 </Style>
 
 <Style x:Key="dxgTimeStyle" BasedOn="{StaticResource {dxgt:GridRowThemeKey ResourceKey=LightweightCellStyle}}" TargetType="{x:Type dxg:LightweightCellEditor}">
       <Style.Triggers>
           <DataTrigger Binding="{Binding Path=isLate}" Value="2">
               <Setter Property="Background" Value="Red"/>
               <Setter Property="ToolTip" Value="Arjun here"/>
           </DataTrigger>
       </Style.Triggers>
   </Style>
````



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
<Style x:Key="HeaderHesapSitil" TargetType="dxg:BaseGridHeader">
        <Setter Property="Background" Value="LightBlue" />
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
