#Middleware tanımlama

````
startup ekle       app.UseMiddleware<MyMiddleware>();

using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication6.Services
{
    public class MyMiddleware
    {
        private readonly RequestDelegate next;

        public MyMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            this.BeginInvoke(context);
            await this.next.Invoke(context);
            this.EndInvoke(context);
        }

        private void BeginInvoke(HttpContext context)
        {
            Debug.Write("call from: " + context.Request.Path);
        }

        private void EndInvoke(HttpContext context)
        {
            // Do custom work after controller execution
        }


    }
}
````
