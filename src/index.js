import './css/styles.css'
import fCountries from './js/fetchCountries'
import listCountriesTpl from './templates/listCountries.hbs';
import cardCountryTpl from './templates/cardCountry.hbs';
// var debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';

const fields = [
  'name',
  'capital',
  'population',
  'languages',
  'flag',
];

const refs = {
  container: document.querySelector('.countries'),
  searchFiled: document.querySelector('.search-filed'),
}

refs.searchFiled.addEventListener('input', debounce(onEnterName, 500));

function onEnterName(e) {
  const strName = e.target.value;
  console.log(strName)
  fCountries(strName, fields)
    .then(renderResult)
    .catch(error => {
       console.log('err', error);
    });
}

function renderResult(result) {
  if (result.length > 1 && result.length <= 10) {
    const markup = listCountriesTpl(result.map(item => item.name));
    refs.container.innerHTML = markup;
    return
  } else if (result.length === 1) {
    const markup = cardCountryTpl(...result);
    refs.container.innerHTML = markup;
    return
  } else if (result.length > 10){
    refs.container.innerHTML = '';
  } else {
    refs.container.innerHTML = '';
  }
}