# EditValue SelectedItem veya Itemssourceden önce olması  
https://www.devexpress.com/Support/Center/Question/Details/B222970/comboboxedit-selecteditem-editvalue-binding


Kaydı bulamamasına neden olur..

````


<dxe:ComboBoxEdit AutoComplete="True"  DisplayMember="Adi" ValueMember="Id" 
                                       SelectedItem="{Binding AmbalajSekliRef, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"  
                                       EditValue="{Binding AmbalajSekli, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged, ValidatesOnNotifyDataErrors=True}" 
                                       ItemsSource="{Binding DataContext.AmbalajSekilleri, RelativeSource={RelativeSource AncestorType={x:Type UserControl}}}" />
````
