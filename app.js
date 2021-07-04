const form = document.querySelector('.search-form');
const resultBox = document.querySelector('.results-container')


const results = (shows) => {

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            resultBox.appendChild(img)
        }
     
    }

    
}

form.addEventListener('submit', async (e) => {
e.preventDefault()
const search = (form.elements.query.value);
const config = { params: {q: search, } }
const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
results(res.data)
form.elements.query.value = '';
});
