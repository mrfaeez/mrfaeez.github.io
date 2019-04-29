

function autocheck(){
        $('input')
           .eq( ( $('input:checked').index() + 1 ) % 6 )
           .prop( 'checked', true );
}

var interval = setInterval(autocheck, 3000);

$('.three-d-item, #bullets').hover(function(ev){
    clearInterval(interval);
}, function(ev){
    interval = setInterval( autocheck, 3000);
});