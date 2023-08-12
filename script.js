function ChangeColor(){
    let p1 = document.querySelector('#p1');
    let p2 = document.querySelector('#p2');
    let body = document.querySelector('#body')
    let button = document.querySelector('#button')



    let arr = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let text = '#'

    for(i = 0; i <= 5 ; i++){
    let number = Math.round(Math.random()*(arr.length-1))
    text = text + arr[number]
}
    console.log(text);
    body.style.backgroundColor = text
    p2.replaceChildren
    p2.innerHTML = text

}



