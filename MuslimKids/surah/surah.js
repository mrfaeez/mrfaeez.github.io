var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var desc = document.querySelector('.description');
var names = document.querySelector('.names');
var benefit = document.querySelector('.benefit');
var translation = document.querySelector('.translation');
var summary = document.querySelector('.summary');

var client = new XMLHttpRequest();

var noSurah = document.getElementById('noSurah').value;

span.onclick = function() {
    modal.style.display = "none";
    desc.style.display = "none";
      names.style.display = "none";
      benefit.style.display = "none";
      translation.style.display = "none";
      summary.style.display = "none";
}

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      desc.style.display = "none";
      names.style.display = "none";
      benefit.style.display = "none";
      translation.style.display = "none";
      summary.style.display = "none";
    }
}

$("#description").click(function(){
    
    modal.style.display = "block";
    desc.style.display = "block";
    
});

$("#names").click(function(){
    
    modal.style.display = "block";
    names.style.display = "block";
    
});

$("#benefit").click(function(){
    
    modal.style.display = "block";
    benefit.style.display = "block";
    
});

$("#translation").click(function(){

    $('.loader').show();
    
    modal.style.display = "block";
    translation.style.display = "block";
    
    client.open("GET", "https://api.alquran.cloud/v1/surah/"+ noSurah +"/en.asad", true);
    client.onreadystatechange = function() {
        if(client.readyState == 4) {
            var obj = JSON.parse(client.responseText);
            $('.loader').hide();
            
            for (var x = 0 ; x < Object.keys(obj['data']['ayahs']).length; x++){
                $(".translation p").append(obj['data']['ayahs'][x]['text'] + "  (" + obj['data']['ayahs'][x]['numberInSurah'] + ")  ");
            }    
        };
    };
    client.send();
    
});

$("#summary").click(function(){
    
    modal.style.display = "block";
    summary.style.display = "block";
    
});