

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);



    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=70127,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();