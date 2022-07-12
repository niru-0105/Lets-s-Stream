console.log("let's Stream");
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const form = document.querySelector('#form')

form.addEventListener('submit',async e=>{
    e.preventDefault();

    let movie = form.elements.search.value;
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=960b0c5dc23f4876d086deaaa1d5baf4&query=${movie}`)

    console.log(res);

    const {results} = res.data
    movie = ""
    appendMovie(results)
})

const appendMovie = results=>{
    const moviesContainer = document.querySelector('.moviesContainer')
    const moviesDiv = document.querySelector('.moviesDiv')
    moviesDiv.remove()
    const newDiv = document.createElement('div')
    newDiv.classList.add('moviesDiv')
    moviesContainer.append(newDiv)
    for(let result of results){
        const img = document.createElement('img')
        img.src = IMG_URL + result.poster_path;
        newDiv.append(img);
    }
}