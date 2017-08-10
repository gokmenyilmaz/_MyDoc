````
using AutoMapper;
using Newtonsoft.Json;
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
            Mapper.Initialize(config =>
            {
                config.CreateMap<Kullanim,Kullanim>();
                config.CreateMap<Araba, Araba>();
            });
        
       

            var araba = new Araba();
            araba.ArabaNo = 45;
            araba.KM = "122";
            araba.Model = "x3";
            araba.Marka = "bmw";
            araba.Vites = true;
            araba.KullanimSekli = new Kullanim { Ticari = "evet", Uzunluk = "kısa" };

            /* shallow copy-------------
                Nesneye yeni refereans atanır. Value type lar kopyalanır.
                Reference typlar kopyalanmaz  (ikisi içinde geçerli)
             
                var _araba = (Araba)araba.Clone();
                var _araba = Mapper.Map<Araba>(araba);
                

            */


            /* deep copy-------------
               Nesneye yeni refereans atanır. Value type ve reference typelar kopyalanır.
               önemli:Mapper config dosyasına alt referanslarda eklenir.

               var _araba = Mapper.Map<Araba>(araba);

               ---Newtonsoft  (deep copy)
               var serializationAraba=JsonConvert.SerializeObject(araba);
               var _araba = JsonConvert.DeserializeObject<Araba>(serializationAraba);


           */

        }
    }

    public class Araba : ICloneable
    {
        public int ArabaNo { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public string KM { get; set; }
        public bool Vites { get; set; }

        public Kullanim KullanimSekli { get; set; }

        public object Clone()
        {
            return base.MemberwiseClone();
        }


    }

    public class Kullanim : ICloneable
    {
        public string Ticari { get; set; }
        public string Uzunluk { get; set; }

        public object Clone()
        {
            return base.MemberwiseClone();
        }
    }
}
````
