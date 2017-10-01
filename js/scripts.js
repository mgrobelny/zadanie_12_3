// scripts.js
	
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    
    if(!countryName.length) countryName = 'Poland';

    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) { //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
        $('<li>').text(item.name + ' - capital: ' + item.capital + '; area: ' + item.area + ' sq. km'+'; number of inhabitants: ' + item.population + '.').appendTo(countriesList);
});
}