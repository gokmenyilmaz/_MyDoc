````
  [HttpPost]
        public string Post(dynamic data)
        {

            // data type is jsonelement
            var name = data.GetProperty("ad").GetString();

            return name;

        }
 ````
