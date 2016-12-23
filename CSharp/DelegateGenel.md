````
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        public delegate int ToplaDelegate(int a, int b);
        static void Main(string[] args)
        {

            ToplaDelegate del1 = new ToplaDelegate(Topla);
            var u = del1(3, 6);

            ToplaDelegate del2 = (a, b) =>
            {
                return a + b;
            };

            ToplaDelegate del3 = delegate(int a, int b)
            {
                return a + b;
            };

            ToplaDelegate del4 = (a, b) => a + b;


            // öntanımlı delegate ler

            Func<int, int, int> f1 = Topla;
            var s1 = f1(4, 8);

            Func<int, int, bool> f2 = EşitMi;
            var s2 = f2(4, 8);

            Predicate<int> p1 = BüyükMü5;   // ====  Func<int,bool>
            var s3 = BüyükMü5(8);

            Action<int, string> a1 = Yazdir;   // ====  Dönüş tipi yok button1.Click += (sender, e) => { /* Do Some Work */ }
            a1(10, "cem");

        }


        public static int Topla(int a,int b)
        {
            return a + b;
        }

        public static bool EşitMi(int a, int b)
        {
            return a==b;
        }

        public static bool BüyükMü5(int a)
        {
            return a>5;
        }

        public static void Yazdir(int a,string ad)
        {
            Console.WriteLine(a.ToString() + ad);
            Console.ReadLine();
        }

    }
}
````
