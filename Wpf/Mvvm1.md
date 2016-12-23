````
using GumrukKapiCikisKontrol.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace GumrukKapiCikisKontrol.ModelView
{
    public class BeyannameListView:ModelBase
    {
        DBContext dc = new DBContext();
        public ObservableCollection<Beyanname> BeyannameListesi { get; set; }

        private Beyanname seçiliBeyanname;

        public Beyanname SeçiliBeyanname
        {
            get
            {
                return seçiliBeyanname;
            }

            set
            {
                seçiliBeyanname = value; RaisePropertyChanged();
            }
        }

        private string aramaText;
        public string AramaText
        {
            get
            {
                return aramaText;
            }

            set
            {
                aramaText = value;
            }
        }

        public Kullanıcı Kullanıcı { get; set; }

        public DateTime FiltreTarih1 { get; set; }
        public DateTime FiltreTarih2 { get; set; }
        
         public RelayCommand AramaCommand
        {
            get
            {
                return new RelayCommand(
                    () => { dc = new DBContext();
                        dc.Beyannames.Where(p => p.BeyannameNo == AramaText).Load();
                        BeyannameListesi = dc.Beyannames.Local;  },
                    () => this.Kullanıcı.KullanıcıGrupId == 1
                );
            }
            set { AramaCommand = value; }
        }


        public RelayCommand YeniCommand
        {
            get
            {
                return new RelayCommand(
                    () => { SeçiliBeyanname = dc.Beyannames.First(); },
                    () => this.Kullanıcı.KullanıcıGrupId == 1
                );
            }
            set { YeniCommand = value; }
        }

        public RelayCommand DüzenleCommand {
            get {
                return new RelayCommand(
                    () => { MessageBox.Show(SeçiliBeyanname.BeyannameNo); }, 
                    () => this.Kullanıcı.KullanıcıGrupId == 1 
                );                
            }
            set { DüzenleCommand = value; }
        }


        public RelayCommand FiltreleCommand
        {
            get
            {
                filtrele = new RelayCommand(
                () => {
                    MessageBox.Show("ssss");
                    dc = new DBContext();
                    dc.Beyannames.Where(p => p.BeyannameTarihi >= FiltreTarih1.Date && p.BeyannameTarihi <= FiltreTarih2.Date).Load();
                    BeyannameListesi = dc.Beyannames.Local;
                }, 
                ()=>this.Kullanıcı.KullanıcıGrupId == 1);
                return filtrele;
            }
            set
            {
                filtrele = value;
            }
        }



        private RelayCommand filtrele;

        public BeyannameListView()
        {
            dc.Beyannames.Where(p => p.Silindi == false).Load();
            BeyannameListesi = dc.Beyannames.Local;

            Kullanıcı = dc.Kullanıcıs.FirstOrDefault();

           
        }


    }



    public class RelayCommand : ICommand
    {
        public event EventHandler CanExecuteChanged
        {
            add { CommandManager.RequerySuggested += value; }
            remove { CommandManager.RequerySuggested -= value; }
        }
        private Action methodToExecute;
        private Func<bool> canExecuteEvaluator;
        public RelayCommand(Action methodToExecute, Func<bool> canExecuteEvaluator)
        {
            this.methodToExecute = methodToExecute;
            this.canExecuteEvaluator = canExecuteEvaluator;
        }
        public RelayCommand(Action methodToExecute)
            : this(methodToExecute, null)
        {
        }
        public bool CanExecute(object parameter)
        {
            if (this.canExecuteEvaluator == null)
            {
                return true;
            }
            else
            {
                bool result = this.canExecuteEvaluator.Invoke();
                return result;
            }
        }
        public void Execute(object parameter)
        {
            this.methodToExecute.Invoke();
        }
    }

}
````
