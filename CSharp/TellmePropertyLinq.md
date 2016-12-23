````
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            //A a = new A();

            var u = TellMeTheProperty<Personel>(c => c.Yaş);
        }

        public static string TellMeTheProperty<T>(Expression<Func<T,object>> expression)
        {
            var unary = expression.Body as UnaryExpression;
            var c = unary.Operand as MemberExpression;


            return c.Member.Name;
        }
    }

    class Personel
    {
        public int Yaş { get; set; }
    }


}
````
