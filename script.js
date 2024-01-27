const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist')

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    //acima seria para buscar um termo parecido com o pesquisado
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name')
    const artistImage = document.getElementById('artist-img')
    const artistGenre = document.getElementById('artist-genre');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
        artistGenre.innerText = element.genre;
    });

    resultArtist.classList.remove('hidden');
}


document.addEventListener('input', function () {
    const searchTerm  = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden')
        return;
        // uma add o hidden, ou seja esconde e a outra mostra e depois return para finalizar o processo

    }

    requestApi(searchTerm);
})


