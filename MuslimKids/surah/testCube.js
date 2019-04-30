function autocheck(){
    $('input')
       .eq( ( $('input:checked').index() + 1 ) % 4 )
       .prop( 'checked', true );
}

var interval = setInterval(autocheck, 1000);

console.log($('input:checked').index());

$('.three-d-item, :radio').hover(function(ev){
clearInterval(interval);
}, function(ev){
interval = setInterval( autocheck, 1000);
});

