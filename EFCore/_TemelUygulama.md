````
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
                config.CreateMap<Kullanim, Kullanim>();
                config.CreateMap<Araba, Araba>();
            });


            ArabalarContext dc = new ArabalarContext();

            //var araba = new Araba();

            //araba.KM = "122";
            //araba.Model = "x3";
            //araba.Marka = "bmw";
            //araba.Vites = true;
            //araba.KullanimSekli = new Kullanim { Ticari = "evet", Uzunluk = "kısa" };


            //dc.Arabas.Add(araba);
            //dc.SaveChanges();

            var araba = dc.Arabas.Include(c => c.KullanimSekli).FirstOrDefault();

            var _araba = Mapper.Map<Araba>(araba);

            _araba.Marka = "xxxhonda";
            _araba.KullanimSekli.Ticari = "xxxxticccccc";



            Mapper.Map<Araba, Araba>(_araba, araba);

            dc.SaveChanges();



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

    public class ArabalarContext : DbContext
    {
        public DbSet<Araba> Arabas { get; set; }
        public DbSet<Kullanim> Kullanims { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=ArabaDB;Trusted_Connection=True;");
        }
    }



    public class Araba : ICloneable
    {
        [Key]
        public int ArabaNo { get; set; }
        public string Marka { get; set; }
        public string Model { get; set; }
        public string KM { get; set; }
        public bool Vites { get; set; }

        public Kullanim KullanimSekli { get; set; }

        public Araba()
        {
            KullanimSekli = new Kullanim();
        }

        public object Clone()
        {
            return base.MemberwiseClone();
        }


    }

    public class Kullanim : ICloneable
    {
        [Key]
        public int Id { get; set; }
        public string Ticari { get; set; }
        public string Uzunluk { get; set; }

        public object Clone()
        {
            return base.MemberwiseClone();
        }
    }
}
````
