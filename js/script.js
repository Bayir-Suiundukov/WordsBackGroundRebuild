let getRandom = (max = 100, min = 1) => {
    return Math.trunc(Math.random() * (max - min) + min)
}

const words = ['sad', 'death', 'false', 'lier', 'blood', 'love', 'tears', 'you', 'i', 'sex', 'night', 'kiss', 'smoke', 'drunk', 'dream', 'girlfriend', 'happy', 'pain', 'fetish', '69', '17', '666', 'kill', 'demon', 'broken', 'ok', 'run', 'silence', 'laugh', 'who', 'somebody', 'no one', 'bitch', 'alone', 'sleep', 'depression', 'suicide', 'heart', 'hairs', 'hands', 'forever', 'never', 'infinity', 'relationship', 'distance', 'whore', 'good bye', 'hello', 'welcome', 'we', 'we?', 'what?', 'why?', 'for what?', 'no', 'yes', 'pussy', 'ass', 'boobs', 'games', 'gay', 'lesbian', 'please no', 'yeah', 'safe', 'dangerous', 'cry', 'far away', 'tomorrow',]

// for(let i = 0 ; i <5; i++ ){
//     console.log(i)
// }

// for(let i of words){
//     console.log(i)
// }


let ww = window.innerWidth
let wh = window.innerHeight

let wordsValue = ww/20

console.log(ww);
console.log(wh);

for (let i = 0; i < Math.trunc(wordsValue); i++) {
    let divCycle = document.createElement('div')
    document.body.appendChild(divCycle)
    let wordUpdate = () => divCycle.innerHTML = words[getRandom(69, 1)]
    setInterval(wordUpdate , 100)
}

let divs = document.querySelectorAll('div')

console.log(divs);
console.log(Math.trunc(wordsValue));











// Надо подумать над ↑ вот этим сука циклом что бы не ебашить новые блоки а модифицировать старые да)

