class Hero extends Person {
    constructor(){
        super();
    }

    render(){
        console.log('working');
        let img = "http://www.wodenworks.com/wp-content/uploads/2017/02/true-700x450.jpeg";
        let heroDiv = document.getElementsByClassName('hero');
        heroDiv[0].innerHTML = `<img src="${img}" width='300px'><br><h2>Hero's Health: ${this.health}</h2><button id='heroButton'>Attack!</button>`;
    }
}