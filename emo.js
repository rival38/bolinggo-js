<script type='text/javascript'>
//<![CDATA[
// Created by Blog X Komo
function removeHtmlTag(a,b){for(var c=a.split("<"),d=0;d<c.length;d++)-1!=c[d].indexOf(">")&&(c[d]=c[d].substring(c[d].indexOf(">")+1,c[d].length));return c=c.join(""),c=c.substring(0,b-1)}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts2<=e.feed.entry.length?maxpost=numposts2:maxpost=e.feed.entry.length;for(var f=0;f<maxpost;f++){var i,k,g=e.feed.entry[f],h=g.title.$t;if(f==e.feed.entry.length)break;for(var l=0;l<g.link.length;l++)if("alternate"==g.link[l].rel){k=g.link[l].href;break}for(var l=0;l<g.link.length;l++)if("replies"==g.link[l].rel&&"text/html"==g.link[l].type){i=g.link[l].title.split(" ")[0];break}if("content"in g)var m=g.content.$t;else if("summary"in g)var m=g.summary.$t;else var m="";postdate=g.published.$t,j>imgr.length-1&&(j=0),img[f]=imgr[j],s=m,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[f]=d);for(var n=[1,2,3,4,5,6,7,8,9,10,11,12],o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],q=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),t=(postdate.split("-")[0],0);t<n.length;t++)if(parseInt(q)==n[t]){q=o[t];break}i='<a href="'+k+'">'+i+" comments</a>";var v='<h2 class="posttitle"><a href="'+k+'">'+h+'</a></h2><a href="'+k+'"><img class="related_img" src="'+img[f]+'"/></a><div class="clear"></div>';document.write(v),j++}}function related_results_labels_thumbs(e){for(var f=0;f<e.feed.entry.length;f++){var g=e.feed.entry[f];relatedTitles[relatedTitlesNum]=g.title.$t;try{thumburl[relatedTitlesNum]=g.gform_foot.url}catch(h){s=g.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d?thumburl[relatedTitlesNum]=d:thumburl[relatedTitlesNum]="https://lh3.googleusercontent.com/-RvlnlcXE6_Q/Vm6EJfHt6XI/AAAAAAAABLQ/nc3ZTTSvmDo/s1600/no-image.png"}relatedTitles[relatedTitlesNum].length>35&&(relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...");for(var i=0;i<g.link.length;i++)"alternate"==g.link[i].rel&&(relatedUrls[relatedTitlesNum]=g.link[i].href,relatedTitlesNum++)}}function removeRelatedDuplicates_thumbs(){for(var a=new Array(0),b=new Array(0),c=new Array(0),d=0;d<relatedUrls.length;d++)contains_thumbs(a,relatedUrls[d])||(a.length+=1,a[a.length-1]=relatedUrls[d],b.length+=1,c.length+=1,b[b.length-1]=relatedTitles[d],c[c.length-1]=thumburl[d]);relatedTitles=b,relatedUrls=a,thumburl=c}function contains_thumbs(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function printRelatedLabels_thumbs(){for(var a=0;a<relatedUrls.length;a++)relatedUrls[a]!=currentposturl&&relatedTitles[a]||(relatedUrls.splice(a,1),relatedTitles.splice(a,1),thumburl.splice(a,1),a--);var b=Math.floor((relatedTitles.length-1)*Math.random()),a=0;for(relatedTitles.length>0&&document.write("<h2>"+relatedpoststitle+"</h2>"),document.write('<div style="clear: both;"/>');a<relatedTitles.length&&20>a&&a<maxresults;)document.write('<a title="'+relatedTitles[b]+'" class="col span_1_of_4 thumb-recentposts" style="text-decoration:none;'),0!=a?document.write('"'):document.write('"'),document.write(' href="'+relatedUrls[b]+'"><b class="img" style="display:block;background:url('+thumburl[b]+') no-repeat center;"></b><div id="related-title">'+relatedTitles[b]+"</div></a>"),b<relatedTitles.length-1?b++:b=0,a++;document.write("</div>"),relatedUrls.splice(0,relatedUrls.length),thumburl.splice(0,thumburl.length),relatedTitles.splice(0,relatedTitles.length)}$(document).ready(function(){$(".thumb-recentposts img").attr("src",function(a,b){return b.replace("s1600","w480-h320-c")})}),imgr=new Array,imgr[0]="https://lh3.googleusercontent.com/-RvlnlcXE6_Q/Vm6EJfHt6XI/AAAAAAAABLQ/nc3ZTTSvmDo/s1600/no-image.png",showRandomImg=!0,aBold=!0,summaryPost=400,summaryTitle=20,numposts1=12,numposts2=4;var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*sedih/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/desperate2-onion-head-emoticon.gif" alt="emoticon lagi sedih" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*stres/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/stress-onion-head-emoticon.gif" alt="emoticon lagi stres" style="border:0; margin:0; padding:0;" id="new" /> ');
       	d[i].innerHTML = d[i].innerHTML.replace(/\s:-*mewek/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/crying2-onion-head-emoticon.gif" alt="emoticon mau mewek" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hai/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/active-soldier-baby-emoticon.gif" alt="emoticon hai" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hua/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/crying1-onion-head-emoticon.gif" alt="emoticon mau mewek" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:-*haha/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/uhuhuh-onion-head-emoticon.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hehe/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/evil-smile-onion-head-emoticon.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
       	d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hihi/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/victory-onion-head-emoticon.gif" alt="emoticon hihihi" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*wkwk/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/lol2-onion-head-emoticon.gif" alt="emoticon kwkwkw" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ckck/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/meh-onion-head-emoticon.gif" alt="emoticon kckckck" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ngakak/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/whip-onion-head-emoticon.gif" alt="emoticon ngakak" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ketawa/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/lol1-onion-head-emoticon.gif" alt="emoticon ketawa" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\s:-*info/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/info-onion-head-emoticon.gif" alt="emoticon info" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*oh/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/shock2-onion-head-emoticon.gif" alt="emoticon oeye" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*no/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/angry-soldier-baby-emoticon.gif" alt="emoticon no" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*yes/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/happy-soldier-baby-emoticon.gif" alt="emoticon yes" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ok/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/good-job-onion-head-emoticon.gif" alt="emoticon ok" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*bye/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/bye1-onion-head-emoticon.gif" alt="emoticon uh" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*thanks/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/thank-you-soldier-baby-emoticon.gif" alt="emoticon thanks" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*cool/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/cool-onion-head-emoticon.gif" alt="emoticon cool" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*wah/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/wow1-onion-head-emoticon.gif" alt="emoticon wah" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ups/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/faint-soldier-baby-emoticon.gif" alt="emoticon ups" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hi/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/hi-onion-head-emoticon.gif" alt="emoticon comment" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*juang/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/hell-yes-onion-head-emoticon.gif" alt="emoticon dollar" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*senang/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/happy-onion-head-emoticon.gif" alt="emoticon E-mail" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*benci/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/hate-onion-head-emoticon.gif" alt="emoticon photo" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*tembak/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/shooting-soldier-baby-emoticon.gif" alt="emoticon video" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*gasak/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/ko-soldier-baby-emoticon.gif" alt="emoticon lock" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*love/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/love-onion-head-emoticon.gif" alt="emoticon love" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*warning/g, ' <img src="http://emoticoner.com/files/emoticons/soldier-baby/revolver-soldier-baby-emoticon.gif" alt="emoticon warning" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*mati/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/dead-onion-head-emoticon.gif" alt="emoticon salah" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ngambul/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/desperate1-onion-head-emoticon.gif" alt="emoticon E-mail" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*sinau/g, ' <img src="http://emoticoner.com/files/emoticons/onion-head/studying-onion-head-emoticon.gif" alt="emoticon Copyright" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*search/g, ' <img src="http://twemoji.maxcdn.com/36x36/1f50e.png" alt="emoticon search" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*peri/g, ' <img src="http://twemoji.maxcdn.com/36x36/1f607.png" alt="emoticon peri" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*maaf/g, ' <img src="http://twemoji.maxcdn.com/36x36/1f647.png" alt="emoticon Maaf" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*mulai/g, ' <img src="http://twemoji.maxcdn.com/36x36/25b6.png" alt="emoticon mulai" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*ngopi/g, ' <img src="http://twemoji.maxcdn.com/36x36/2615.png" alt="emoticon ngopi" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\s:-*hp/g, ' <img src="http://twemoji.maxcdn.com/36x36/1f4f1.png" alt="emoticon hp" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);
//]]>
</script>
