// import templateFunction from './templates/template.hbs';
import './css/styles.css'
import fCountries from './js/fetchCountries'

const fields = [
    'name',
    'capital',
    'currencies',
];

fCountries('col', fields)
.then(res => console.log(res))


// // Рендеринг
// const markup = arrData.map(item => templateFunction(item)).join('');
