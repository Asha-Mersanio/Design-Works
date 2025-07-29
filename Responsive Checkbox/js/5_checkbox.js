function check(para_div,input_div,check_div) 
{

       
       if(document.getElementById(input_div).checked)
       {
            document.getElementById(para_div).style.display="block" ;
        }
        else
        {
        	document.getElementById(para_div).style.display="none" ;
        }
}       

