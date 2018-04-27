var heroName = prompt('Give your hero a name!')
var villainName = prompt('Give your villain a name!');


var hero = new Hero();
hero.name = heroName;
hero.render();

var villain = new Villain();
villain.name = villainName;
villain.render();

function startGame(){
  hero.health = 100;
  villain.health = 100;
  var hammer = new Weapon('hammer');
  hero.equipWeapon(hammer);
  var shiv = new Weapon('shiv');
  villain.equipWeapon(shiv);
  villain.render();
  hero.render();
}

startGame();

var healthCheck = function(){
  if (hero.health <= 0){
    alert('Villain has won!');
    startGame();
  }else if (villain.health <= 0){
    alert('Hero has won!');
    startGame();
  }
};
