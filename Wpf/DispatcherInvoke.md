UI thread dışında nesnelere erişmek istenildiğinde Dispatcher objesi kullanılmalıdır

````
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        Task.Factory.StartNew(() =>
            {
                InvokeMethodExample();
            });
    }
 
    private void InvokeMethodExample()
    {
        Thread.Sleep(2000);
        Dispatcher.Invoke(() =>
            {
                btn1.Content = "By Invoke";
            });
    }
}
````
