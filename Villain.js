class Villain extends Person{
    constructor(){
     super();   
    }

        render(){
        let img = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Villainc.svg/1024px-Villainc.svg.png";
        let villainDiv = document.getElementsByClassName('villain');
        villainDiv[0].innerHTML = `<img src="${img}" width='300px'><br><h2>Villain's Health: ${this.health}</h2><button id='villainButton'>Attack!</button>`;
    }
   
}