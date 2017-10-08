# EditValue SelectedItem veya Itemssourceden önce olması  

Kaydı bulamamasına neden olur..

````


<dxe:ComboBoxEdit AutoComplete="True"  DisplayMember="Adi" ValueMember="Id" 
                                       SelectedItem="{Binding AmbalajSekliRef, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"  
                                       EditValue="{Binding AmbalajSekli, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged, ValidatesOnNotifyDataErrors=True}" 
                                       ItemsSource="{Binding DataContext.AmbalajSekilleri, RelativeSource={RelativeSource AncestorType={x:Type UserControl}}}" />
````
