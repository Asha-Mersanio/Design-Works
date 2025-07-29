//Display the current month and year

const month=["January","Febravry","March","April","May","June","July","August","September","October","November","December"];
const data=new Date();
let monthname = month[data.getMonth()];
console.log(monthname);
var yearname = data.getFullYear();
var currentdate=monthname +" , " +yearname;
document.getElementById('date').innerHTML=currentdate;

var select_data="";
var desc_data="";
var value_data="";

function select()
{ 
   var slect_dropdown=document.getElementById('select_value');
   console.log(slect_dropdown.value);
   if(slect_dropdown.value=="+")
   {
      document.getElementById('done').style.borderColor="green";
      select_data="value is plus"

   }
   else if(slect_dropdown.value=="-")
   {
      document.getElementById('done').style.borderColor="red";
      select_data="Value is not plus"
      document.getElementById('Add').value="";
      document.getElementById('amount').value="";
      
   }

}
//check descrption is empty or not
function add_Description()
{
   var add_descr=document.getElementById('Add').value;
   var desc_regex=/^[a-zA-Z]+(-_ [a-zA-Z]+)*/;
   if((add_descr.match(desc_regex))&&(add_descr))
   {
      desc_data="valid";
      console.log(add_descr)
   }
   else
   {
     desc_data="invalid"
     console.log(desc_data)
   }
}

//check value is empty or not 

function add_amount()
{
   var add_value=document.getElementById('amount').value;
   var add_regex=/^[0-9]*$/;
   if((add_value.match(add_regex))&&(add_value))
   {
      value_data="valid value"
      console.log(add_value);
   }
   else
   {
      value_data="invalid data"
      console.log(value_data)
   }
}
function calculate()
{  

   var first_value,second_value,overall;
   first_value=(document.getElementById("inc_expense").innerHTML);
   res=first_value.replace('+','')
   console.log(res)
   document.getElementById("budget_value").innerHTML=res;

   second_value=(document.getElementById("inc_expense1").innerHTML);
   res1=second_value.replace('-','')
   console.log(res1);
   document.getElementById("budget_value").innerHTML=res1;

   overall=res-res1;
   document.getElementById("budget_value").innerHTML=overall;

}
var plus_i=1;
var new_value = 0;
var new_value1 = 0;
function done()
{  
   
      var slect_dropdown=document.getElementById('select_value');
      console.log(slect_dropdown.value);
      if(slect_dropdown.value=="+")
      {
        select_data="value is plus";
       

      }
      else if(slect_dropdown.value=="-")
      {
        select_data="Value is not plus";
        console.log(select_data)
      }
      add_Description()
      add_amount()
      if((select_data=="value is plus")&&(desc_data=="valid")&&(value_data=="valid value"))
      {  
         var descr=document.getElementById('Add').value;
         // document.getElementById('label_data').innerHTML=descr;
         var value=document.getElementById('amount').value;
         document.getElementById('container_income').innerHTML +="<div class='value_div'><label id='label_income_data"+plus_i+"' class='label_data'>"+descr+"</label><span id='data_income"+plus_i+"' class='amount_data'>"+'+'+value+"</span></div>";
         plus_i++;
         document.getElementById('Add').value="";
         document.getElementById('amount').value="";

         var current_value=value;
         new_value += parseInt(current_value);
         document.getElementById('inc_expense').innerHTML='+'+new_value;
      }
      else if((select_data="Value is not plus")&&(desc_data=="valid")&&(value_data=="valid value"))
      {  
          
         var descr=document.getElementById('Add').value;
         var value=document.getElementById('amount').value;
         document.getElementById('container_expense').innerHTML +="<div class='value_div'><label id='label_expense_data"+plus_i+"' class='label_data'>"+descr+"</label><span id='percentage'></span><span id='data_expense"+plus_i+"' class='amount_data'>"+'-'+value+"</span></div>";
         plus_i++;
         document.getElementById('Add').value="";
         document.getElementById('amount').value="";
         var current_value=value;
         new_value1 += parseInt(current_value);
         document.getElementById('inc_expense1').innerHTML='-'+new_value1;

         var first,second,ans;
         first=(document.getElementById("inc_expense").innerHTML);
         result1=first.replace('+','')
         console.log(result1)

         second=(document.getElementById("inc_expense1").innerHTML);
         result2=second.replace('-','')
         console.log(result2);

         findoutput=(result1/100)*result2;
         document.getElementById('percentage').innerHTML=findoutput/100+'%';
   
      }
      
}





  



