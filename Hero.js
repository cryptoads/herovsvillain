class Hero extends Person {
    constructor(){
        super();
    }

    render(){
        let img = "img/Dino.gif";
        let heroDiv = document.getElementsByClassName('hero');
        heroDiv[0].innerHTML = `<h1>${this.name}</h1><img class='heroImg' src="${img}" height='300px' width='300px'><br><h2>Hero's Health: ${this.health}</h2><button class='btn btn-primary' id='heroButton'>Attack!</button>`;
        document.getElementById('heroButton').addEventListener('click', function(){
            hero.attack(villain);
            villain.render();
            var imgs = document.getElementsByClassName('villainImg');
            imgs[0].classList.add('apply-shake');
            healthCheck();
        })
    }
}
