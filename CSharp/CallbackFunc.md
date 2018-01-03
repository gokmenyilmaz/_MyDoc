````

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Validation v = new Validation();
            var sonuc=v.Validate(Hesapla);


        }



        public static int Hesapla(int yas)
        {
            return yas * 2;

        }
    }

    public class Validation
    {

        public bool Validate(Func<int,int> callback)
        {
            return callback(14)>20;
        }


    }
}

````
