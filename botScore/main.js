if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal = localStorage.getItem('botScore')
    botScoreVal++
    localStorage.setItem('botScore', botScoreVal)

}
