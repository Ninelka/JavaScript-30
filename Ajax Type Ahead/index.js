const endpoint = 'https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.subject.match(regex)
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const subjectName = place.subject.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
      <li>
        <span class="name">${cityName}, ${subjectName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    }).join('');
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);