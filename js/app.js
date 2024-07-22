const getWeather = document.getElementById("get-weather");
getWeather.addEventListener('click',function (){
  let cityCode = document.getElementById("city-select").value;
  if (!cityCode){
  alert('都市を選択してください');
  }
  let url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${cityCode}.json`;
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        let area = weather[0].timeSeries[0].areas[0];
        console.log(area);
        let temps = weather[1].tempAverage.areas[0];
        console.log(temps);
        // 発表者と報告日時の情報を画面に書き出す
        document.getElementById("publishingOffice").lastElementChild.textContent = weather[0].publishingOffice;
        document.getElementById("reportDatetime").lastElementChild.textContent = weather[0].reportDatetime;
        // 特定地域の情報を画面に書き出す
        document.getElementById("targetArea").lastElementChild.textContent = area.area.name;
        document.getElementById("todayHighTemperature").lastElementChild.textContent = temps.max + "℃";
        document.getElementById("todayLowTemperature").lastElementChild.textContent = temps.min + "℃";
        document.getElementById("today").lastElementChild.textContent = area.weathers[0];
        document.getElementById("tomorrow").lastElementChild.textContent = area.weathers[1];
        document.getElementById("dayAfterTomorrow").lastElementChild.textContent = area.weathers[2];
    })
    .catch (function(error) {
      alert(error.message);
    })
  });


