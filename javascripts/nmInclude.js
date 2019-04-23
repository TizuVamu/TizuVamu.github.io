document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
document.write('<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
//document.getElementById("").innerHTML+=('');
//document.write('');
function include(src){
	document.write('<script src="/javascripts/'+src+'.js" charset="utf-8"></script>');
}
function bigTitle(title){
    document.body.innerHTML='<h1 id="heading">'+title+'</h1>'+document.body.innerHTML;
}
include('main');
include("style");
include("fillSearch");
include("layout");