var toc=null;
var MAXCHAP=1179;
var chap=0;
var EXTRA_URL="http://word-4-u.appspot.com/ccimjson"
$.ajax({
  url: "chapters.json",
  dataType:"text",
  context: document.body
}).done(function(data) {
	toc= new Function('return ' + data)();
});

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
$("#extraf").click(function() {
$.ajax({
  url: EXTRA_URL,
  dataType:"json",
}).done(function(data) {
	var result="<h1>More Web and Mobile resources From CCIM</h1><h2><a href='http://word-4-u.appspot.com'>http://word-4-u.appspot.com</a></h2><br><table>";
$.each(data, function( index, entry) {
		result=result+"<tr><td><a href='"+entry.url+"'>"+entry.description+"</a></td></tr>";
  
});
	result=result+"</table>";	
	$("#holder").html(result);
	$("#book").html("");
});
});
$("#extra").click(function() {
$.ajax({
  url: EXTRA_URL,
  dataType:"json",
}).done(function(data) {
	var result="<h1>More Web and Mobile resources From CCIM</h1><h2><a href='http://word-4-u.appspot.com'>http://word-4-u.appspot.com</a></h2><br><table>";
$.each(data, function( index, entry) {
		result=result+"<tr><td><a href='"+entry.url+"'>"+entry.description+"</a></td></tr>";
  
});
	result=result+"</table>";	
	$("#holder").html(result);
	$("#book").html("");
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
chap=chapt;
if (chapt==0){
	$("#holder").html('<img style="align: left;" src="images/cover.jpg"/>');
	$("#book").html("");
}else{
 var ch=$.map(toc.chapters,function(val,key){
if(Number(val.gid) == chapt ) return val;
            });
	$("#book").html(ch[0].book);
	retrivetext(ch[0].url);
}

}

function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
};

