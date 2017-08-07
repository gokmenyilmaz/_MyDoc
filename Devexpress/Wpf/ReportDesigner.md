  ````
  public SiparisRapor()
        {
            InitializeComponent();

            designer.OpenDocument(@"d:\Report3.repx",Yukle);


            designer.DocumentOpened += Designer_DocumentOpened;

        }

        private void Designer_DocumentOpened(object sender, ReportDesignerDocumentEventArgs e)
        {
            var v = e.Document;

            var ds = v.ReportModel.DataSource as SqlDataSource;

            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).UserName = "sa";
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).Password = "sapassword";

            QueryParameter p = new QueryParameter("ParameterId", typeof(int), 1234);
            ds.Queries[0].Parameters.Add(p);

             ds.RebuildResultSchema();

            report.ActiveDocument.ViewKind = ReportDesignerDocumentViewKind.Preview;

        }
````


````
 InitializeComponent();

            StokHareketId = id;


            FileStream fs = new FileStream(@"d:\SiparisTeyitFormuTr.repx", FileMode.Open);
            MemoryStream ms = new MemoryStream();

            fs.CopyTo(ms);

            XtraReport v = XtraReport.FromStream(ms, true);

            var path = Settings.Default["SqlPath"].ToString();
            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(path);
            

            var ds = v.DataSource as SqlDataSource;


            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).ServerName = builder.DataSource;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).DatabaseName = builder.InitialCatalog;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).UserName = builder.UserID;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).Password = builder.Password;

            
            QueryParameter p = new QueryParameter("ParameterId", typeof(int), StokHareketId);
            ds.Queries[0].Parameters.Add(p);

            (ds.Queries[0] as SelectQuery).FilterString = "[VW_PND_STOKHAREKETDIZAYNBASLIK.ID] = ?ParameterId";

            ds.RebuildResultSchema();

            designer.DocumentSource = v;
````


````

            StokHareketId = id;


            FileStream fs = new FileStream(@"d:\SiparisTeyitFormuTr.repx", FileMode.Open);
            MemoryStream ms = new MemoryStream();

            fs.CopyTo(ms);

            XtraReport v = XtraReport.FromStream(ms, true);

            var path = Settings.Default["SqlPath"].ToString();
            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(path);
            

            var ds = v.DataSource as SqlDataSource;


            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).ServerName = builder.DataSource;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).DatabaseName = builder.InitialCatalog;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).UserName = builder.UserID;
            ((SqlServerConnectionParametersBase)ds.ConnectionParameters).Password = builder.Password;

            
            QueryParameter p = new QueryParameter("ParameterId", typeof(int), StokHareketId);
            ds.Queries[0].Parameters.Add(p);

            (ds.Queries[0] as SelectQuery).FilterString = "[VW_PND_STOKHAREKETDIZAYNBASLIK.ID] = ?ParameterId";

            ds.RebuildResultSchema();

            designer.DocumentSource = v;


            v.CreateDocument();
           ````
