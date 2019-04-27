
var client = new XMLHttpRequest();
client.open("GET", "http://api.alquran.cloud/v1/surah", true);
client.onreadystatechange = function() {
    if(client.readyState == 4) {
        var obj = JSON.parse(client.responseText);

        for (var x = 0 ; x < Object.keys(obj['data']).length; x++){
            $("#option").append("<option value='" + (x + 1) + "'>" + obj['data'][x]['number'] + ". Surah " + obj['data'][x]['englishName'] + " | " + obj['data'][x]['name'] + "</option>");
        }

    };
};

client.send();







$(".display").click(function(){

    $('.quran').empty();
    var noSurah = document.getElementById("option").value;
    
    client.open("GET", "http://api.alquran.cloud/v1/surah/" + noSurah, true);
    client.onreadystatechange = function() {
        if(client.readyState == 4) {
            var obj = JSON.parse(client.responseText);
            
            $('.quran').append("<p>");

            for (var x = 0 ; x < Object.keys(obj['data']['ayahs']).length; x++){
                $(".quran").append(obj['data']['ayahs'][x]['text'] + " " + obj['data']['ayahs'][x]['numberInSurah']);
            }
            
            $('.quran').append("</p>")
            
        };
    };
    client.send();
    
  });