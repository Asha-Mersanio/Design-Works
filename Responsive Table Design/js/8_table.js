function clicked()
{
	        var check=document.getElementsByName('chk');
            if(document.getElementById('checkbutton').checked ==true)
            {	
            	for(var i=0; i<check.length; i++)
        		{
            	    check[i].checked=true;
                	console.log("selected");
                }	
            }
            else if(document.getElementById('checkbutton').checked ==false)
            {
            	for(var i=0; i<check.length; i++)
        		{
            	    check[i].checked=false;
                	console.log("deselected");
                }	
            }

        
}  
// function check_clicked()
// {
//      var check=document.getElementsByName('chk');
//             if(document.getElementById('button_checked').checked ==true)
//             {   
//                 for(var i=0; i<check.length; i++)
//                 {
//                     check[i].checked=true;
//                     console.log("selected");
//                 }   
//             }
//             else if(document.getElementById('checkbutton').checked ==false)
//             {
//                 for(var i=0; i<check.length; i++)
//                 {
//                     check[i].checked=false;
//                     console.log("deselected");
//                 }   
//             }

// }
