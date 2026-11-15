 'use strict';
const APIUrl = 'https://api.tvmaze.com/search/shows';
const searchForm = document.querySelector('form');
const queryField = document.querySelector('#query');

searchForm.addEventListener('submit',function(evt){
  evt.preventDefault();
  const query = queryField.value ;
  getTVShows(query);
});

async function getTVShows(query){
  const response = await fetch(`${APIUrl}?q=${query}`);
  const result = await response.json();
  console.log(result);
} 



