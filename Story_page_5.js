var words = ['Fireboy and Watergirl','Papas Pizzeria', 'Tiny Fishing', 'Idle Breakout', 'Chess', '8 Ball pool', 'Moto X3M']
var index1 = Math.random() * 7
index1 = Math.floor(index1)

console.log(words[index1])
var GamesElement = document.getElementById('Games')
console.log(GamesElement)
GamesElement.innerText = words[index1]

// var words = ['Hades','Persephone', 'Hestia', 'Nyx', 'Nemesis', 'Artemis', 'Phobos']
// var index1 = Math.random() * 7
// index1 = Math.floor(index1)

// console.log(words[index1])
// var godOrGoddessElement = document.getElementById('god-or-goddess')
// console.log(godOrGoddessElement)
// godOrGoddessElement.innerText = words[index1]