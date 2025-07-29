function openTab(language, b_id)
{
	var tab_links= document.getElementsByClassName('tablinks');
	var tab_content= document.getElementsByClassName('tab_contents');
	var btn,j=0;
	for(var i=0;tab_content.length>i;i++)
	{
		
		document.getElementById(tab_content[i].id).style.display="none";
		document.getElementById(tab_links[i].id).style.borderBottom="";
		j++;
		btn = "btn"+ j;
		document.getElementById(btn).style.color="grey";

	}
	console.log(b_id);
	document.getElementById(language).style.display="block";
	document.getElementById(b_id).style.borderBottom="3px solid #06c";
	document.getElementById(b_id).style.color="black";
}   