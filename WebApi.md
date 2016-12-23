#Multiple Action
````
        
        [Route("Yukle")]
        [HttpPost]
        public void Yukle([FromBody]string value)
        {
        }


        [Route("Carp")]
        [HttpPost]
        public void Carp([FromBody]string value)
        {
        }
       ````
       
 #Parametreler1
 var postAdress1 = "Api/Denetim/12"
  şeklinde adres girilirse webapi tarafında yazılacak kod
  
  ````
        [HttpGet]
        public string Get(int id)
        {
            //string formkod = "";
            //FormTanimRepository rep = new FormTanimRepository();
            //var data = rep.IlleriGetirFromForm(formkod);

            return "null";
        }
   ````
   
   #Parametreler2
   ````
   http://localhost:63919/Api/Denetim/Getir?formkod='bt'
şeklinde girilirse şekline girilmeli

[HttpGet]
public string Getir(string formkod)
{
   return "null";
}
   ````
        
