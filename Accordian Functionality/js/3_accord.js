
// }
function ope(p_id, div_id,a_id)
{      
       var class_names = document.getElementsByClassName('item1');
       for(var i = 0; i<class_names.length; i++){
              document.getElementById(class_names[i].id).style.cssText = '';
       }
       var para_name=document.getElementsByClassName('para');
       for (var i=0;i<para_name.length;i++)
       {
              document.getElementById(para_name[i].id).style.display = 'none';
       }
       var image_icon=document.getElementsByClassName('image_icon');
       for( var i=0;i<image_icon.length;i++)
       {
            document.getElementById(image_icon[i].id).style.transform="rotate(90deg)"       
       }
       document.getElementById('contain').style.height="335px";
       document.getElementById(p_id).style.display="block" ;
       document.getElementById(div_id).style.cssText = 'height: 75px;border-bottom:1px solid #8080801c; border-left-width: 5px;border-left-color: lightskyblue; transition: 0.45s';
        
}
