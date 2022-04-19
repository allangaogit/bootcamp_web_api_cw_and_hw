document.querySelector('button').addEventListener('click', doThing)

document.querySelector('h2').innerText = localStorage.getItem('books')

function doThing(){
    const choice = document.querySelector('input').value
    const url = `https://openlibrary.org/isbn/${choice}.json`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(!localStorage.getItem('books')){
                localStorage.setItem('books', data.title)
            }
            else{
                let books = localStorage.getItem('books') + " ; "+ data.title
                localStorage.setItem('books', books)
            }
            document.querySelector('h2').innerText = localStorage.getItem('books')
        })


}
