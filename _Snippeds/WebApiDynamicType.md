````
  [HttpPost]
        public string Post(dynamic data)
        {

            var name = data.GetProperty("ad").GetString();

            return name;

        }
 ````
