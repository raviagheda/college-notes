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