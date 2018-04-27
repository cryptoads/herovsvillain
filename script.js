var heroName = prompt("What is the Hero's Name?" );

var villainName = prompt("What is the Villain's name?");

var me = new Hero();
me.name = heroName;
me.render();


var you = new Villain();
you.name = villainName;
you.render();

var hammer = new Weapon('hammer', Math.floor(Math.random()*(9)+10));
var shiv = new Weapon('shiv', Math.floor(Math.random()*(9)+10));

me.equipWeapon(hammer);
you.equipWeapon(shiv);



document.getElementById('heroButton').addEventListener('click', function(){
    me.attack(you);
    you.render();
})

document.getElementById('villainButton').addEventListener('click', function(){
    you.attack(me);
    me.render();
})