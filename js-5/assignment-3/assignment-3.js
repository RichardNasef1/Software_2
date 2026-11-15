 'use strict';
const APIUrl = 'https://api.tvmaze.com/search/shows';
const searchForm = document.querySelector('form');
const queryField = document.querySelector('#query');
const results = document.querySelector('#results');

searchForm.addEventListener('submit',async function(evt){
  evt.preventDefault();
  const query = queryField.value ;
  const shows = await getTVShows(query);
  generateShows(shows)
});

async function getTVShows(query){
  const response = await fetch(`${APIUrl}?q=${query}`);
  const result = await response.json();
  console.log(result);
  return result;
} 

function generateShows(shows) {
  results.innerHTML = '';
  for (const tvShow of shows) {
    const h2 =document.createElement('h2');
    h2.innerText =tvShow.show.name;

    const a = document.createElement('a');
    a.href = tvShow.show.url;
    a.innerText = 'Link to show';
    a.target = '_blank';

    const img = document.createElement('img');
    img.src = tvShow.show.image?.medium;
    img.alt = tvShow.show.name

    const div = document.createElement('div');
    div.innerHTML = tvShow.show.summary;

    const article = document.createElement('article');

    article.append(h2,img,a,div);
    results.append(article);

  }

}