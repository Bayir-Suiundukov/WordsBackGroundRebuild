let getRandom = (max = 100, min = 1) => {
    return Math.trunc(Math.random() * (max - min) + min)
}

const words = ['sad', 'death', 'false', 'lier', 'blood', 'love', 'tears', 'you', 'i', 'sex', 'night', 'kiss', 'smoke', 'drunk', 'dream', 'girlfriend', 'happy', 'pain', 'fetish', '69', '17', '666', 'kill', 'demon', 'broken', 'ok', 'run', 'silence', 'laugh', 'who', 'somebody', 'no one', 'bitch', 'alone', 'sleep', 'depression', 'suicide', 'heart', 'hairs', 'hands', 'forever', 'never', 'infinity', 'relationship', 'distance', 'whore', 'good bye', 'hello', 'welcome', 'we', 'we?', 'what?', 'why?', 'for what?', 'no', 'yes', 'pussy', 'ass', 'boobs', 'games', 'gay', 'lesbian', 'please no', 'yeah', 'safe', 'dangerous', 'cry', 'far away', 'tomorrow',]
// const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet repudiandae consequatur vero aliquam nisi laborum, impedit dicta reprehenderit, unde excepturi in labore ex saepe est. Voluptate veniam aliquam nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet repudiandae consequatur vero aliquam nisi laborum, impedit dicta reprehenderit, unde excepturi in labore ex saepe est. Voluptate veniam aliquam nihil.'.split(' ')

const colors = ['#e00f24', '#ae1afd', '#ffc03d', '#4694ff','#00fc15','#fc8200','#fc00ca']
// for(let i = 0 ; i <5; i++ ){
//     console.log(i)
// }

// for(let i of words){
//     console.log(i)
// }


// let ww = window.innerWidth
// let wh = window.innerHeight

console.log(words);

for (let i = 0; i < 1000; i++) {
    let divCycle = document.createElement('div')
    document.body.appendChild(divCycle)
    let wordUpdate = () => divCycle.innerHTML = words[getRandom(words.length, 1)]
    setInterval(wordUpdate , 1000)
    let wordsColor = () => divs[getRandom(divs.length,0)].style.color = colors[getRandom(colors.length,0)]
    setInterval(wordsColor, 100)
}

let divs = document.querySelectorAll('div')

console.log(divs);











// Надо подумать над ↑ вот этим сука циклом что бы не ебашить новые блоки а модифицировать старые да)

