$.getJSON('https://api.pray.zone/v2/times/today.json?city=kuala-lumpur', function (times)
    {
        document.getElementById('fajr').innerHTML = times['results']['datetime'][0]['times']['Fajr'];
        document.getElementById('dhuhr').innerHTML = times['results']['datetime'][0]['times']['Dhuhr'];
        document.getElementById('asr').innerHTML = times['results']['datetime'][0]['times']['Asr'];
        document.getElementById('magh').innerHTML = times['results']['datetime'][0]['times']['Maghrib'];
        document.getElementById('ish').innerHTML = times['results']['datetime'][0]['times']['Isha'];

    });


$('#submit').click(function(){
    var x = document.getElementById("mySelect").value;
    var y;

    if(x=='Kuala Lumpur')
        y = 'kuala-lumpur';
    else if(x=='Makkah')
        y = 'mecca';
    else
        y = x;

    $.getJSON('https://api.pray.zone/v2/times/today.json?city=' + y, function (times)
    {
        document.getElementById('fajr').innerHTML = times['results']['datetime'][0]['times']['Fajr'];
        document.getElementById('dhuhr').innerHTML = times['results']['datetime'][0]['times']['Dhuhr'];
        document.getElementById('asr').innerHTML = times['results']['datetime'][0]['times']['Asr'];
        document.getElementById('magh').innerHTML = times['results']['datetime'][0]['times']['Maghrib'];
        document.getElementById('ish').innerHTML = times['results']['datetime'][0]['times']['Isha'];

    });
});


// select

/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
    $(this).children('select').css('display', 'none');
    
    var $current = $(this);
    
    $(this).find('option').each(function(i) {
      if (i == 0) {
        $current.prepend($('<div>', {
          class: $current.attr('class').replace(/sel/g, 'sel__box')
        }));
        
        var placeholder = $(this).text();
        $current.prepend($('<span>', {
          class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
          text: placeholder,
          'data-placeholder': placeholder
        }));
        
        return;
      }
      
      $current.children('div').append($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
        text: $(this).text()
      }));
    });
  });
  
  // Toggling the `.active` state on the `.sel`.
  $('.sel').click(function() {
    $(this).toggleClass('active');
  });
  
  // Toggling the `.selected` state on the options.
  $('.sel__box__options').click(function() {
    var txt = $(this).text();
    var index = $(this).index();
    
    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');
    
    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
  });
  
// button

var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  var btns = document.getElementById('submit');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }
  
