# sql server kayıt değişikliklerini yakalar

c# için extensionu yukle
https://github.com/christiandelbianco/monitor-table-change-with-sqltabledependency

````
ALTER DATABASE PandapDb SET ENABLE_BROKER  // konfigurasyon için sadece bu yeterli
ALTER DATABASE PandapDb SET DISABLE_BROKER  // kapatmak için


var tableDependency = new SqlTableDependency<DependencySiparisSonucTablo>(connectionString, "TBLPNDSTOKHAREKET", null, null, null,     TableDependency.Enums.DmlTriggerType.All, true);


    public class DependencySiparisSonucTablo
    {
        public string SiparisSurecDurum { get; set; }
    }

````
