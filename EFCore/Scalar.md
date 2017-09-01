````


var con = db.Database.GetDbConnection();
var cmd = con.CreateCommand();
cmd.CommandText = "SELECT GETDATE()";
con.Open();
var datetime = (DateTime)cmd.ExecuteScalar();
con.Close();

````
