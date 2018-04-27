var heroName = prompt("What is the Hero's Name?" );

var villainName = prompt("What is the Villain's name?");

var me = new Hero();
me.name = heroName;



var you = new Villain();
you.name = villainName;


var hammer = new Weapon('hammer', 10);
var shiv = new Weapon('shiv', 5);
console.log(hammer)

me.equipWeapon = hammer;
you.equipWeapon = shiv;

console.log(me.weapon)