var toc=null;
var MAXCHAP=1180;
var chap=0;
var EXTRA_URL="http://word-4-u.appspot.com/ccimjson"
$.ajax({
  url: "chapters.json",
  dataType:"text",
  context: document.body
}).done(function(data) {
	toc= new Function('return ' + data)();
});
function updateSlider(value){
	$("#sldbr").value=value;
}
$("#prev").click(function() {
	chap=parseInt(chap)-1;
	if(chap<0)chap=0;
	retrivechapter(chap);
});
$("#prevf").click(function() {
	chap=parseInt(chap)-1;
	if(chap<0)chap=0;
	retrivechapter(chap);
});
$("#nextf").click(function() {
	chap=parseInt(chap)+1;
	if(chap>MAXCHAP)chap=MAXCHAP;
	retrivechapter(chap);
});
$("#next").click(function() {
	chap=parseInt(chap)+1;
	if(chap>MAXCHAP)chap=MAXCHAP;
	retrivechapter(chap);
});
$("#aboutf").click(function() {
	retrivetext("about.html");
});
$("#about").click(function() {
	retrivetext("about.html");
});
function retrivemore() {
$.ajax({
  url: EXTRA_URL,
  dataType:"json",
}).done(function(data) {
	var result="<h1>更多的网络和移动资源</h1><h2><a href='http://word-4-u.appspot.com'>http://word-4-u.appspot.com</a></h2><br><table>";
$.each(data, function( index, entry) {
		result=result+"<tr><td><a href='"+entry.url+"'>"+entry.description+"</a></td></tr>";
  
});
	result=result+"</table>";	
	$("#extralinks").html(result);
	$("#book").html("");
	return false;
});
};
$("#extra").click(function() {
$.ajax({
  url: EXTRA_URL,
  dataType:"json",
}).done(function(data) {
	var result="<br/><br/><br/><br/><h1>More Web and Mobile resources From CCIM</h1><h2><a href='http://word-4-u.appspot.com'>http://word-4-u.appspot.com</a></h2><br><table>";
$.each(data, function( index, entry) {
		result=result+"<tr><td><a href='"+entry.url+"'>"+entry.description+"</a></td></tr>";
  
});
	result=result+"</table>";	
	$("#extralinks").html(result);
});
});

function retrivetext(chapt){
$.ajax({
  url: chapt,
  dataType:"text",
  context: document.body
}).done(function(data) {
	$("#holder").html(data);
});

}
function retrivechapter(chapt){
	if(chapt>MAXCHAP)chapt=MAXCHAP;
	if(chapt<0)chapt=0;
chap=chapt;
if (chapt==0||chapt==MAXCHAP){
	$("#holder").html('<br/><br/><br/><br/><img id="cover" style="align: left;" src="images/cover.jpg"/> <br/> <button onclick="javascript:retrivetext(\''+"about.html"+'\');">关于圣经中文文理译本</button> <div id="extralinks"></div> ');
	$("#book").html("");
}else{
 var ch=$.map(toc.chapters,function(val,key){
if(Number(val.gid) == chapt ) return val;
            });
	$("#book").html("<br/><br/><br/><br/><h1>"+ch[0].book+"</h1>");
	retrivetext(ch[0].url);
}

}

function resizeText(multiplier) {
   var sz=parseFloat(document.getElementById("holder").style.fontSize)  + (multiplier * 5.2) + "px";
   document.getElementById("holder").style.fontSize=sz;
   document.getElementById("book").style.fontSize=sz;
   document.getElementsByTagName("p").style.fontSize=sz;
};

