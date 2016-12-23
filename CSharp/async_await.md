````
public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private async void button_Click(object sender, RoutedEventArgs e)
        {

           var c= await ToplaAsync();
            MessageBox.Show(c.ToString());

        }

        public async Task<double> ToplaAsync()
        {
            double sum = 0;

            await Task.Run(() =>
            {
                for (int i = 0; i < 10000000; i++)
                {
                    sum += Math.Sin(i)*Math.Tan(i)+ Math.Tanh(i)+ Math.Sin(i) * Math.Tan(i) + Math.Tanh(i);

                }

            });

            return sum;

        }
    }
````
