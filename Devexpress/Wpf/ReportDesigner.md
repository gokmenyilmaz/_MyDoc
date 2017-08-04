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
