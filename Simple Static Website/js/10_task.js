function tab_open() 
	{
        if (document.getElementById('m_q_t') .style.display == "none") 
        {
           document.getElementById('m_q_t').style.display="block";
        } 
        else
        {
            document.getElementById('m_q_t').style.display="none";
            console.log("nothing is there");
         }
	}
	function home()
	{
		if(document.getElementById('home').style.display="block")
		{
			document.getElementById('m_q_t').style.display="none";
			console.log("dcsckschsk");
		}
	}
	function about()
	{
		if(document.getElementById('about').style.display="block")
		{
			document.getElementById('m_q_t').style.display="none";
			console.log("dcsckschsk");
		}
	}
	function service()
	{
		if(document.getElementById('service').style.display="block")
		{
			document.getElementById('m_q_t').style.display="none";
			console.log("dcsckschsk");
		}
	}
	function contact()
	{
		if(document.getElementById('contact').style.display="block")
		{
			document.getElementById('m_q_t').style.display="none";
			console.log("dcsckschsk");
		}
	}
	function click_name()
	{

		 document.getElementById("name").style.borderColor = "#80808085";
	}
		function click_email()
	{

		 document.getElementById("email").style.borderColor = "#80808085";
	}
		function click_contact()
	{

		 document.getElementById("phone").style.borderColor = "#80808085";
	}
		function click_messages()
	{

		 document.getElementById("messages").style.borderColor = "#80808085";
	}
	function close_menu()
	{
		document.getElementById('m_q_t').style.display="none";
	}
	
		