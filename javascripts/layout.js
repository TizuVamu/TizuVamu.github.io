document.write('<link rel="stylesheet" href="/css/material.css">');
function CBL(con,lnk,fs){
    if(fs)return '<a class="block" href="'+lnk+'" style="font-size:'+fs+'px" class=>'+con+'</a>';
    else /*if(document.body.clientWidth<=500)*/return '<a class="block" href="'+lnk+'" class="resHeading">'+con+'</a>';
        //else return '<a class="block" href="'+lnk+'" style="font-size:30px">'+con+'</a>';
}
var base='  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header"> \
                <header class="mdl-layout__header"> \
                    <div class="mdl-layout__header-row"> \
                            <!-- Title --> \
                            <span class="mdl-layout-title causeSlideUpOnClick" target="searchingBox">Games</span> \
                            <div class="mdl-layout-spacer" id="_spacer"></div> \
                    <div id="searchingBox" height="300px"><ul id="searchingList"></ul></div> \
                    </div> \
                </header> \
                <div class="mdl-layout__drawer" style="overflow-y:hidden;overflow-x:hidden" id="container2"> \
                    <div style="overflow-y:scroll;overflow-x:hidden;position:relative;left:0px" id="container1">\
                    <a class="block" href="/" style="font-size:36px;margin-top:15px;">Home</a> \
                    <a class="block" style="font-size:36px;margin-top:15px;" id="HK">High Kick</a> \
                    <a class="block" style="font-size:36px;margin-top:15px;" id="SG">Sleeping Girl</a> \
                    <a class="block causeSlideOnClick" style="font-size:36px" target="KS" href="javascript:void(0);">Kooonsoft</a> \
                    <div id="KS" class="hide"></div>\
                    <a class="block causeSlideOnClick" style="font-size:36px" target="MF" href="javascript:void(0);">M&F</a> \
                    <div id="MF" class="hide"></div>\
                    <a class="block causeSlideOnClick" style="font-size:36px" target="RL" href="javascript:void(0);">Rip@Lip</a> \
                    <div id="RL" class="hide"></div>\
                    </div> \
                </div> \
                <main class="mdl-layout__content" id="body"> \
                    Content \
                </main> \
            </div> \
        ';
var game=false;
function layout(){
    var con=document.body.innerHTML;
    if(game){
        con+='\
    		<center>\
    			<object id="exercisesEx" type="application/x-shockwave-flash"\
    				width="100%" height="80">\
    				<param name="flashvars" value=""/>\
    			</object>\
    		</center>\
        ';
    }
    document.body.innerHTML=base.replace("Content",'<div class="page-content">'+con+'</div>');
    for(var i=0;i<KS.length;i++)
        document.getElementById("KS").innerHTML+=CBL("&nbsp;  "+KS[i],"/Games/Kooonsoft/"+KS[i]+"/index.html",20);
    for(var i=0;i<MF.length;i++)
        document.getElementById("MF").innerHTML+=CBL("&nbsp;  "+MF[i],"javascript:replace('/Games/M&F/"+MF[i]+".swf')",20);
    for(var i=0;i<RL.length;i++)
        document.getElementById("RL").innerHTML+=CBL("&nbsp;  "+RL[i],"/Games/RipLip/"+RL[i]+"/index.html",20);
    document.getElementById("container1").style.height="100%";
    document.getElementById("HK").href="javascript:replace('/Games/High Kick/index.html')";
    document.getElementById("SG").href="javascript:replace('/Games/Sleeping Girl/index.html')";
    document.getElementById("container1").style.width=document.getElementById("container2").offsetWidth+18+"px";
    if(game){
		var h,w;
		h=document.body.clientHeight-69;
		w=h/3*4;
		if(w>body.clientWidth){
			w=body.clientWidth;
			h=w*3/4;
		}
		document.getElementById("exercisesEx").height=h;
		document.getElementById("exercisesEx").width=w;
    }
	replace("main.swf")
    oliverC.refresh();
}
function replace(location){
    document.getElementById('exercisesEx').data=location;
}
window.onload=layout;