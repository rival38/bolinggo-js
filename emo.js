<script type='text/javascript'>
//<![CDATA[
// Created by Blog X Komo
document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

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