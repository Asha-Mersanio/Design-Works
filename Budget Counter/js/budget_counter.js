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
var income_cookie="";
var expense_cookie="";
var income_name="";
var total_budget_data="";
var income_data_cookies="";
var expense_data_cookies="";
var inc_i=1;
var exp_i=1;
window.onload=function()
{  
           if (document.cookie.length != 0)  
           {   
               console.log(document.cookie);
               var cookies_quotes=(document.cookie.replace(/['"]+/g, ''));
               console.log(cookies_quotes);
               var array = document.cookie.split(";");  
               console.log(array);
               for (var i = 0; i < array.length; i++) 
               {  
                  var income_data; 
                  var expense_data;
                  var budget;
                  var income_value;
                  var expense_value;

                  var quotes=array[i].replace(/'/g,'');
                  // console.log(quotes);
                  var split = array[i].split("="); 
                  
                     console.log(split[0])
                     if(split[0].trim()=="income_data")
                     {
                       document.getElementById("inc_expense").innerHTML = split[1];  
                       console.log("income");
                       new_value = parseInt(split[1].replace('+',''));  
                     }
                     if(split[0].trim()=="expense_data")
                     {
                       document.getElementById("inc_expense1").innerHTML = split[1];  
                       console.log("expense");
                       new_value1 = parseInt(split[1].replace('-','')); 
                     }
                    if(split[0].trim()=="budget")
                     {
                       document.getElementById("budget_value").innerHTML = split[1];  
                       console.log("budget");
                     }
                     if(split[0].trim()=="income_value")
                     {
                        let data_split=(document.cookie.split('='));
                        
                        let data_split1=(JSON.parse(split[1]));
                        console.log(data_split1);
                        // incomeObject = data_split1;
                         for (var key in data_split1) 
                         {
                            console.log(key);
                            console.log(data_split1[key]);
                             document.getElementById('container_income').innerHTML +="<div class='value_div'><label id='label_income_data"+inc_i+"' class='label_data'>"+key+"</label><span id='data_income"+inc_i+"' class='amount_data'>"+'+'+data_split1[key]+"</span></div>";
                            inc_i++;
                            incomeObject[key] = data_split1[key];
                         }
                        
                     }
                     if(split[0].trim()=="expense_value")
                     {   
                         let data_split=(document.cookie.split('='));
                         
                         let data_split1=(JSON.parse(split[1]))
                         console.log(data_split1)
                         for (var key in data_split1) 
                         {
                            console.log(key);
                            console.log(data_split1[key]);
                           document.getElementById('container_expense').innerHTML +="<div class='value_div'><label id='label_expense_data"+exp_i+"' class='label_data'>"+key+"</label><span id='percentage' hidden='hidden'></span><span id='data_expense"+exp_i+"' class='amount_data'>"+'-'+data_split1[key]+"</span></div>";
                           exp_i++;
                           expenseObject[key] = data_split1[key];

                         }

                     } 
                       
                    
               } 
            }
     
         else
         {
            console.log("cookies empty");
            
         }
  
}
// Check The Dropdown ("+","-")
function select()
{ 
   var slect_dropdown=document.getElementById('select_value');
   console.log(slect_dropdown.value);
   if(slect_dropdown.value=="+")
   {
      document.getElementById('done').style.borderColor="green";
      select_data="value is plus"
      document.getElementById('Add').value="";
      document.getElementById('amount').value="";

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
      console.log(desc_data)
     
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
      console.log(value_data);
     
   }
   else
   {
      value_data="invalid data"
      console.log(value_data)
     
   }
}

//Calculate the two input field
function calculate()
{  

   var first_value,second_value,overall;
   first_value=(document.getElementById("inc_expense").innerHTML);
   res=first_value.replace('+','')
   // console.log(res)
   document.getElementById("budget_value").innerHTML=res;

   second_value=(document.getElementById("inc_expense1").innerHTML);
   res1=second_value.replace('-','')
   // console.log(res1);
   document.getElementById("budget_value").innerHTML=res1;
   

   overall=res-res1;
   total_budget_data=document.getElementById("budget_value").innerHTML=overall;
   budget_cookie=(document.cookie="budget="+total_budget_data);
   console.log(budget_cookie);
   // document.getElementById("budget_value").innerHTML=budget_cookie[1];

} 

var plus_i=1;
var new_value = 0;
var new_value1 = 0;
var incomeObject = {};
var expenseObject= {};
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
         
         const income_keydata = descr;
         const income_valuedata= value;
         incomeObject[income_keydata] = income_valuedata;
         console.log(incomeObject);
         income_data_cookies=(document.cookie="income_value="+JSON.stringify(incomeObject));
         

         var current_value=value;
         console.log(current_value)
         new_value += parseInt(current_value);
         income_name=document.getElementById('inc_expense').innerHTML='+'+new_value;
         income_cookie=document.cookie="income_data="+income_name;
         if(income_cookie.length!=0)
         {
            console.log("income cookies")
         }
         else
         {
            console.log("income cookies are not available");
         }    
      }
      else if((select_data="Value is not plus")&&(desc_data=="valid")&&(value_data=="valid value"))
      {  
          
         var descr=document.getElementById('Add').value;
         var value=document.getElementById('amount').value;
         document.getElementById('container_expense').innerHTML +="<div class='value_div'><label id='label_expense_data"+plus_i+"' class='label_data'>"+descr+"</label><span id='percentage' hidden='hidden'></span><span id='data_expense"+plus_i+"' class='amount_data'>"+'-'+value+"</span></div>";
         plus_i++;
         document.getElementById('Add').value="";
         document.getElementById('amount').value="";
         
         const expense_keydata = descr;
         const expense_valuedata= value;
         expenseObject[expense_keydata] = expense_valuedata;
         console.log(expenseObject);
         expense_data_cookies=(document.cookie="expense_value="+JSON.stringify(expenseObject));

        
         var current_value=value;
         new_value1 += parseInt(current_value);
         console.log(new_value1)
         var expense_name=document.getElementById('inc_expense1').innerHTML='-'+new_value1;
         expense_cookie=document.cookie="expense_data="+expense_name;
         if(document.cookie.length!=0)
         {
            console.log("hey expense")
         }
         else
         {
            console.log("Cookies are not available");
         }
   
      }
      
}





  



