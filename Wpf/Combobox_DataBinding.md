````
           <ComboBox x:Name="cbo" Margin="8" 
                                          SelectedValue="{Binding TempPalet.CariKod}"
                                          
                                          DisplayMemberPath="CariIsim"
                                          SelectedValuePath="CariKod"
                                          ItemsSource="{Binding Path=PaleteHazirCariler,  Mode=OneWay, UpdateSourceTrigger=PropertyChanged }" />
                                          ````
