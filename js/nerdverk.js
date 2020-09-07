var xh=false;
function $(o){return document.getElementById(o);}
function d(o,p){return $(o).style.display=p;}
function initPage(){initxh();}
function initxh() {
	/*@cc_on @*/
	/*@if (@_jscript_version >= 5)
	try {xh = new ActiveXObject("Msxml2.XMLHTTP");} catch (e) {try {xh = new ActiveXObject("Microsoft.XMLHTTP");} catch (E) {xh = false;}}
	@end @*/
	if (!xh && typeof XMLHttpRequest!='undefined') {try {xh = new XMLHttpRequest();} catch (e) {xh=false;}}
	if (!xh && window.createRequest) {try {xh = window.createRequest();} catch (e) {xh=false;}}
}
function requestDyn() {
	xh.open("GET", "signup.aspx?inputEmail="+$('inputEmail').value,true);
	xh.onreadystatechange=function() {
		if (xh.readyState==4) {
    		if (xh.responseText=="ok") {showMsg();}
    		if (xh.responseText=="err") {createError();}
 			}
 		}
	xh.send(null)
}
function clickSubmit() {d('loader','inline');requestDyn();}// setTimeout("showMsg()",3000);
function checkEnter(e){
	var k;
	if(window.event){k = e.keyCode;}
	else if(e.which){k = e.which;}
	if (k==13) {clickSubmit();}
}
function showMsg() {
	d('clickaviable','none');
	d('theform','none');
	d('loader','none');
	d('thankyou','');
	//$('inputEmail').value='Thank you';
	
}
function createError() {
	d('thankyou','none');
	d('loader','none');
}
function livecheck(field)
{
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(field.value)) {field.style.borderColor='#FFFFFF';}
	else {field.style.borderColor='#FF0000';}
}

function changeSelector(sCSSRule,sProperty,sNewValue)
{
	var foundItem=false;
	var isIE=false;
	var theSheet=document.styleSheets[0];
	var theRules = new Array();
	if (document.styleSheets[0].cssRules)
		{theRuleList= document.styleSheets[0].cssRules;isIE=false;}
	else if (document.styleSheets[0].rules)
		{theRuleList = document.styleSheets[0].rules;isIE=true;}
	var theRuleListSize=theRuleList.length;
	//alert(theRuleListSize);
	for (var i=0;i<theRuleListSize;i++) {
	//alert(theRuleList.item(i).selectorText.toLowerCase);
      if (theRuleList.item(i).selectorText.toLowerCase()==sCSSRule)
	  {
		foundItem=theRuleList.item(i);
	  }
   }

	if (foundItem!=false)
	{
		if (isIE)
		{
			//selfReflect=eval('foundItem.style.'+sProperty);
			//selfReflect=sNewValue;
			foundItem.style.color=sNewValue;
		}
		else
		{
			foundItem.style.setProperty(sProperty,sNewValue,null);
		}
	}
}

function changeColor(colorRGB)
{
	h1Css=changeSelector("h1","color",colorRGB);
	
}