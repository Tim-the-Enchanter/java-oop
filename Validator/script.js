 
         function validate() {
         var text;
            if( document.myForm.name.value == "" ) {
              text = "Name cannot be empty";
               document.getElementById("demo").innerHTML = text;
               document.myForm.name.focus() ;
               return false;
            }
            if( document.myForm.email.value == "" ) {
              text = "E-mail cannot be empty";
               document.getElementById("demo").innerHTML = text;
               document.myForm.email.focus() ;
               return false;
            }
       var emailID = document.myForm.email.value;
       atposn = emailID.indexOf("@");
       dotposn = emailID.lastIndexOf(".");
       if (atposn < 1 || ( dotposn - atposn < 2 )) {
       text = "Please enter valid email ID";
       document.getElementById("demo").innerHTML = text;
       document.myForm.email.focus() ;
       return false;
     }
            if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
               document.myForm.phone.value.length != 10 ) {
               text = "Please enter a valid 10-digit phone number";
               document.getElementById("demo").innerHTML = text;
               document.myForm.phone.focus() ;
               return false;
            }
            if( document.myForm.subject.value == "0" ) {
               text = "Please provide your area of expertise";
               document.getElementById("demo").innerHTML = text;
               return false;
            }else{
              //Opens a webpage, you will need to add your code here. You can use any condional 
              //statement such as the if statement or a case statement based on the user's selection.
              window.open('https://www.tesla.com/careers'); 
            }
            return( true );
         }