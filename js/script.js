const body = document.querySelector('body'),
      title = document.querySelector('h3');
let symbols = [ '0','1','2','3',
                '4','5','6','7',
                '8','9','a','b',
                'c','d','e','f'];
let HColor_1 ='#',HColor_2 = '#';

SelectColor()


function SelectColor(){
    for(i = 0;i < 6;i++){
        HColor_1 += symbols[Math.floor(Math.random() * 16)]
        HColor_2 += symbols[Math.floor(Math.random() * 16)]
    }
    body.style.background = `linear-gradient(to right, ${HColor_1} , ${HColor_2})`
    title.innerHTML = `background: linear-gradient(to right, ${HColor_1}, ${HColor_2})`
}