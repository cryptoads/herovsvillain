class Villain extends Person{
    constructor(){
     super();
    }
        render(){
        let img = "img/Dennis.gif";
        let villainDiv = document.getElementsByClassName('villain');
        villainDiv[0].innerHTML = `<h1>${this.name}</h1><img class= 'villainImg' src="${img}" height='300px' width='300px'><br><h2>Villain's Health: ${this.health}</h2><button class='btn btn-primary' id='villainButton'>Attack!</button>`;
        document.getElementById('villainButton').addEventListener('click', function(){
            villain.attack(hero);
            hero.render();
            var imgs = document.getElementsByClassName('heroImg');
            imgs[0].classList.add('apply-shake')
            healthCheck();
        })
    }

}
