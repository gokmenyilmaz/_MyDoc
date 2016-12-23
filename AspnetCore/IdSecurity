http://judeokelly.com/preventing-parameter-tampering-in-asp-net-mvc/
http://www.mikesdotnetting.com/article/295/encryption-and-decryption-in-asp-net-core

````
[HttpPost]
[Authorize]
ActionResult UserDetails(User user)
   {
	 //Test is submitted user.Name is the same as the current logged in user
     if(user.Name == User.Identity.Name)
		{
   			respository.UpdateUser(user);
   			return View(user); 
		}
		else
		{
			//error
		}
}

yada
Encrypting and Decrypting Key Values
ActionResult OrderDetails(int orderId)
{
   var order = respository.GetOrder(orderId); 

     var orderidBytes = Encoding.UTF8.GetBytes(orderId);
     var encryptedOrderId =  MachineKey.Encode(plaintextBytes, MachineKeyProtection.All);
     ViewBag.OrderIdEncrypt = encryptedOrderId;


   return View(order);
}
In the Razor view, simply add the ViewBag.OrderIdEncrypt in a hidden field within the form:

...
@Html.Hidden("OrderIdEncrypt", ViewBag.OrderIdEncrypt)
...
Now when the form is posted back there will be a OrderIdEncrypt value on the form. This can then be decrypted with the MachineKey API and compared to the submitted value of OrderId:

[HttpPost]
[Authorize]
ActionResult OrderDetails(Order order, string orderIdEncrypt)
{
   var decryptedOrderIdBytes = MachineKey.Decode(encryptedValue, MachineKeyProtection.All);
   var unEncryptedOrderId =  Encoding.UTF8.GetString(decryptedBytes);
    
   if(unEncryptedOrderId == order.Id)
    { 
       respository.UpdateOrder(order);
       return View(order);
    }
   else
    {
       //test failed - send error message
    }

}
````
