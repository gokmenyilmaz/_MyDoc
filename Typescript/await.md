//https://www.youtube.com/watch?v=WEWVpt6muMs&feature=youtu.be
//bora kaşmer
asenkron fonksiyonlarda await kullanınımı . Typescript 2.1

````
class Welcome {
    saying: string;

    constructor(message: string) {
        this.saying = message;
    }

    get Message(): string {
        return this.saying;
    }

    async dramaticWelcome() {
        console.log('hello');
        for (let i = 0; i < this.Message.length; i++) {
            await this.delay(500);

            let button = document.createElement('button');
            button.textContent = this.Message[i];

            button.onclick = function () {
                greeter.sayIt(this.textContent);
            }

            document.body.appendChild(button);

        }
    }

    public delay(miliseconds: number) {
        return new Promise<void>(resolve => {
            setTimeout(resolve, miliseconds);
        });
    }
    public sayIt(say: string) {
        alert(say);
    }
}


let greeter = new Welcome('hello world');
let button = document.createElement('button');
button.textContent = 'say to async'

document.body.appendChild(button);

button.onclick = function () {
    greeter.dramaticWelcome();
}

````
