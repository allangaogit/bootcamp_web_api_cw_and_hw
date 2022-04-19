document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=MUpTKmMDzqR0eIB1JXIp0PgvDugpWqgzL2ATNUCG&date=${choice}`
    console.log(choice)


fetch(url)
    .then(res => res.json()) //parses the json code
    .then(data => {
        console.log(data)
        if (data.media_type === 'img'){
            document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
