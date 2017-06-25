https://www.codeproject.com/Articles/744082/WPF-Interview-questions-with-answers#WhatistheneedofWPFwhenwehadwindowsforms
````
<Window.Resources>
<SolidColorBrush Color="LightBlue" x:Key="buttonBackground" />
</Window.Resources>
The above resource is binded with the below two textboxes statically and dynamically respectively.

Hide   Copy Code
<TextBox Background="{DynamicResource buttonBackground}" />
<textbox background="{StaticResource buttonBackground}">
Now if we modify the resource , you see the first text box changes the background and the other textbox color stays as it is.

Hide   Copy Code
private void Button_Click(object sender, RoutedEventArgs e)
{
          Resources["buttonBackground"] = Brushes.Black;
}

````
