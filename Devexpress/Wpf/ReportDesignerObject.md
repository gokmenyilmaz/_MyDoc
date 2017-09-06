````
using DevExpress.DataAccess.ObjectBinding;
using DevExpress.Xpf.Reports.UserDesigner;
using DevExpress.XtraReports.UI;
using Pandap.Model;
using Pandap.Persistence.DTOs;
using Pandap.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Pandap
{
    /// <summary>
    /// Interaction logic for TestReport.xaml
    /// </summary>
    public partial class TestReport : Window
    {
        public TestReport()
        {
            InitializeComponent();

            designer.DocumentOpened += Designer_DocumentOpened;


        }

        private void Designer_DocumentOpened(object sender, ReportDesignerDocumentEventArgs e)
        {

            var v = e.Document;
            var ds = v.ReportModel.DataSource as ObjectDataSource;

            ds.DataSource = DataGetir();


        }

        private static List<SiparisTeyitDTO> DataGetir()
        {
            var uow = new UnitOfWork(new PANDA2017Context());

            StokHareketRepository repository = new StokHareketRepository(uow);
            var a = repository.TeyifFormStokHareketGetirFromId(13);

            var model = TeyitFormService.TeyitFormGetir(a);

            List<SiparisTeyitDTO> l = new List<SiparisTeyitDTO>();
            l.Add(model);

            return l;
        }

    
    }
}

````
