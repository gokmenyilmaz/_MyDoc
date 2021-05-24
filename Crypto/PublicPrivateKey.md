https://stackoverflow.com/questions/18485715/how-to-use-public-and-private-key-encryption-technique-in-c-sharp

Public/Private key explaining,

## how to works https? 

http is secure way for data transfer method on web.

Web hosting site have a private key.

Client computers have public keys. 
These keys are located in windows certificates section. 
The browser encrypts html data using the public key
and sends it to Web hosting address. 

The host web site decrypts html text using private key.




````
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            RSA();
            Console.WriteLine("Hello World!");
        }


        private static string _privateKey;
        private static string _publicKey;
        private static UnicodeEncoding _encoder = new UnicodeEncoding();

        private static void RSA()
        {
            var rsa = new RSACryptoServiceProvider();
            _privateKey = rsa.ToXmlString(true);
            _publicKey = rsa.ToXmlString(false);

            var text = "Test1";
            Console.WriteLine("RSA // Text to encrypt: " + text);
            var enc = Encrypt(text);

            Console.WriteLine("RSA // Encrypted Text: " + enc);

            var dec = Decrypt(enc);
            Console.WriteLine("RSA // Decrypted Text: " + dec);
        }

        public static string Decrypt(string data)
        {
            var rsa = new RSACryptoServiceProvider();
            var dataArray = data.Split(new char[] { ',' });
            byte[] dataByte = new byte[dataArray.Length];
            for (int i = 0; i < dataArray.Length; i++)
            {
                dataByte[i] = Convert.ToByte(dataArray[i]);
            }

            rsa.FromXmlString(_privateKey);
            var decryptedByte = rsa.Decrypt(dataByte, false);
            return _encoder.GetString(decryptedByte);
        }

        public static string Encrypt(string data)
        {
            var rsa = new RSACryptoServiceProvider();
            rsa.FromXmlString(_publicKey);
            var dataToEncrypt = _encoder.GetBytes(data);
            var encryptedByteArray = rsa.Encrypt(dataToEncrypt, false).ToArray();
            var length = encryptedByteArray.Count();
            var item = 0;
            var sb = new StringBuilder();
            foreach (var x in encryptedByteArray)
            {
                item++;
                sb.Append(x);

                if (item < length)
                    sb.Append(",");
            }

            return sb.ToString();
        }
    }
}


````
