class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a '+ this.brand
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name)
        this.model = mod;
    }
    show(){
        return this.present() + 'it is a ' + this.model
    }
}
mycar = new Model('Ford','Mustang');
mycar.present();
mycar.show()

hello = function(){
    return "Hello World!";
}

hello = () => {
    return "Hello World!";
}

hello = () => "Hello World!";

hello = (cc) => "Hello" + cc;

hello = cc => "Hello" + cc;

class Header {
    constructor(){
        this.color = "Red";
    }

    //regular function
    changeColor = function() {
        document.getElementById("demo").innerHTML += this;
    }
    //arrow function
    changeColor = () => {
        document.getElementById("demo").innerHTML += this
    }
}
myheader = new Header();

//The window object calls the function
window.addEventListener("load", myheader.changeColor);

//A button object calls the function
document.getElementById("btn").addEventListener("click", myheader.changeColor;)

var x = 5.6;
let x = 5.6
const x = 5.6