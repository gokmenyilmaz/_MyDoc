````
  [HttpPost]
        public string Post(dynamic data)
        {

            var blogPost = data.GetProperty("ad").GetString();


            //var dict = System.Text.Json.JsonSerializer.Deserialize<Dictionary<string, string>>(json);


            //var xx = data.ValuKind;

            //var a = data[0].ad;
            //var b = data.soyad;

            return "";

        }
 ````
