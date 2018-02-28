window.onload=function(){
	
//友情链接滚动
var linksa=document.getElementsByClassName("linksa").item(0);
linksa.style.opacity=1;
var stopshu=0;
if(linksa.offsetHeight>20){
	setInterval(function(){
		var opacitytime=setInterval(function(){
			linksa.style.opacity=linksa.style.opacity-0.1;
			if(linksa.style.opacity<=0){
				clearInterval(opacitytime);
				stopshu=stopshu-20;
				if(stopshu<=0-linksa.offsetHeight){
					stopshu=0;
					}
				linksa.style.top=stopshu+"px";
				var opa=0;
				var smallopacity=setInterval(function(){
					opa=opa+0.1;
					linksa.style.opacity=opa;
					if(opa>=1){
						clearInterval(smallopacity);
						}
					},50);
				}
			},50);	
	},4000);
	}
	
//搜索框事件
var searchtext=document.getElementsByClassName("searchtext").item(0);
var searchspan=document.querySelectorAll(".search>ul>li>span");
searchtext.oninput=function(){
	var text=this.value;
	for(var i=0;i<searchspan.length;i++){
		searchspan.item(i).innerHTML=text;
		}
	};
	
//全部a标签加target--------------
var atarget=document.getElementsByTagName("a");
for(var i=0;i<atarget.length;i++){
	var a=atarget.item(i),
	 href=a.getAttribute("href");
	if(href!==null){
		a.setAttribute("target","_blank");
		}
	}
};