var password;
	function developer()
	{

		password = window.prompt('\nEnter Password\n','');
		var security = ["Lumos","lumos","Knox","knox","Expecto petronum","expecto petroum","Expecto Petronum"];
		for(var i = 0; i < 7;i++)
		{
			if(password == security[i])
			{
				document.getElementById('developer').href = "Developer/Orbit.html";
				break;
			}
			else if(i == 6)
			{
			document.getElementById('developer').href = "#";
			}
		}
	}