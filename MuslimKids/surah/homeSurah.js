
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

//MODAL VARIABLEs
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

$(".quran").click(function(){
    
    $('.modal-content h1').empty();
    $('.modal-content p').empty();
    $('.loader').show();
    $(".inside p").css("direction", "rtl");
    
    modal.style.display = "block";
    var noSurah = document.getElementById("option").value;
    
    client.open("GET", "http://api.alquran.cloud/v1/surah/" + noSurah, true);
    client.onreadystatechange = function() {
        if(client.readyState == 4) {
            var obj = JSON.parse(client.responseText);
            $('.loader').hide();

            $('.modal-content h1').append(obj['data']['name']);
            for (var x = 0 ; x < Object.keys(obj['data']['ayahs']).length; x++){
                $(".modal-content p").append(obj['data']['ayahs'][x]['text'] + "  (" + obj['data']['ayahs'][x]['numberInSurah'] + ")  ");
            }
            
        };
    };
    client.send();
    
});

$(".translate").click(function(){
    
    $('.modal-content h1').empty();
    $('.modal-content p').empty();
    $('.loader').show();
    $(".inside p").css("direction", "ltr");
    
    modal.style.display = "block";
    var noSurah = document.getElementById("option").value;
    
    client.open("GET", "http://api.alquran.cloud/v1/surah/" + noSurah + "/en.asad", true);
    client.onreadystatechange = function() {
        if(client.readyState == 4) {
            var obj = JSON.parse(client.responseText);
            $('.loader').hide();

            $('.modal-content h1').append(obj['data']['name']);
            for (var x = 0 ; x < Object.keys(obj['data']['ayahs']).length; x++){
                $(".modal-content p").append(obj['data']['ayahs'][x]['text'] + "  (" + obj['data']['ayahs'][x]['numberInSurah'] + ")  ");
            }    
        };
    };
    client.send();
    
});

span.onclick = function() {
    modal.style.display = "none";
}

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }