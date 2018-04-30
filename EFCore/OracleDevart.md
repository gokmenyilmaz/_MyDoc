````
https://www.devart.com/dotconnect/oracle/download.html
````

````
using Devart.Data.Oracle;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ConsoleApp1
{
    public class EdenetimDbContext : DbContext
    {
        public DbSet<PERSONEL> Personeller { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                OracleConnectionStringBuilder oraCSB = new OracleConnectionStringBuilder();
                oraCSB.Direct = true;
                oraCSB.Server = "localhost";
                oraCSB.Port = 49161;
                oraCSB.Sid = "XE";
                oraCSB.UserId = "system";
                oraCSB.Password = "oracle";

                oraCSB.LicenseKey = "trial:c:/ProgramData/Devart/dotConnect/License/Devart.Data.Oracle.key";
                optionsBuilder.UseOracle(oraCSB.ToString());
                base.OnConfiguring(optionsBuilder);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PERSONEL>(entity =>
            {
                entity.ToTable("PERSONEL");
            });
        }


    }

    public class PERSONEL
    {
        [Key]
        public string AD { get; set; }
        public string SOYAD { get; set; }
        public int YAS { get; set; }

    }
}

````
