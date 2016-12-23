#Custom Login
````
using System.Threading.Tasks;

namespace Denetim.Web.Controllers
{
    public class AccountController:Controller
    {
        public async void Login()
        {

            var claims = new[]
            {
                new Claim(ClaimTypes.Role, "Yönetici")
            };

            var identity = new ClaimsIdentity(claims,"Custom11");
            var v = new ClaimsPrincipal(identity);

            await  HttpContext.Authentication.SignInAsync("Cookies", v);

        }
    }
}



using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Denetim.Web.Controllers
{
    public class HomeController:Controller
    {

        [Authorize(Roles = "Yönetici")]
        public ContentResult Index()

        {

            var u=HttpContext.User.Identity.IsAuthenticated;
            return new ContentResult { Content = "veriiii" };
        }
    }
}

  app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "Cookies",
                LoginPath = new PathString("/Account/Login/"),
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
              
               
            }
          );
          
          ````
