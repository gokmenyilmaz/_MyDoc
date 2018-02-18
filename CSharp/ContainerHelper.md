Static consructure bir kere çalışır. Her talepte yeniden girmez

O yüzden illa startupta olmasına gerek yok. Sadece ilk talepte çalışır

````
 namespace ZzaDesktop
    {
        public static class ContainerHelper
        {
            private static IKernel _container;
            static ContainerHelper()
            {
                _container = new StandardKernel();
                _container.Bind<IPersonelRepository>().To<PersonelRepository>().InTransientScope();
            }

            public static T Get<T>()
            {
                return _container.Get<T>();
            }

        }
    }
````


````
  public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {


            IPersonelRepository p = ContainerHelper.Get<IPersonelRepository>();

            IPersonelRepository p1 = ContainerHelper.Get<IPersonelRepository>();
        }
    }
    ````
