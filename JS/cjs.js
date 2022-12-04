
var x=0;
	function fun() {
		if(x==0)
		{
		document.getElementById('poem').style.height="620px";
		document.getElementById('poem').style.lineHeight = "1.2";
		document.getElementById('poem').style.wordSpacing = "0px";
		
		document.getElementById('dis').style.display = 'block';
		document.getElementById('clk').style.padding = "5px 40px";
		document.getElementById('clk').style.border = "8px solid #2962FF";
		document.getElementById('here').innerHTML = "Click Again";
		

		x=1;
		}
		else if(x==1)
		{

			document.getElementById('poem').style.height="0px";
			document.getElementById('poem').style.lineHeight = "4";
			document.getElementById('poem').style.wordSpacing = "100px";
			document.getElementById('dis').style.display = "none";
			document.getElementById('clk').style.padding = "5px 20px";
			document.getElementById('clk').style.border = "none";
			document.getElementById('here').innerHTML = "Click Here";
			x=0;
		}
	}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.getElementById('cookie').innerHTML = cvalue;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        document.getElementById('cookie').innerHTML = user;
        /*alert("Welcome again " + user);*/
    } else {
       user = prompt("Please ENTER your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 40);
       }
    }
}
