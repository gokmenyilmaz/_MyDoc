````
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Text;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var url = "amqp://oikexeoq:TUPhh4_R5jyB2FXUBo_vgpiBOjFKj0b4@baboon.rmq.cloudamqp.com/oikexeoq";

            var factory = new ConnectionFactory();
            factory.Uri = new Uri(url);

            var cnn = factory.CreateConnection();

            var channel = cnn.CreateModel();
            channel.QueueDeclare("hello", false, false, false, null);


            var consumer = new EventingBasicConsumer(channel);
            channel.BasicConsume("hello", true, consumer);


            consumer.Received += (model, ea) =>
            {


                var message = Encoding.UTF8.GetString(ea.Body);
                Console.WriteLine("mesaj:" + message);
            };

            Console.ReadLine();


        }
    }
}
````
