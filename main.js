function validation(){
    var name=document.getElementById("name").Value;

    var valid_name_regex=/^[A-Za-z]+$/;

    var name=document.getElementById("age").Value;

    var valid_name_regex=/^[1-100]+$/;

    var name=document.getElementById("city").Value;

   if(!(name.match(valid_name_regex))|| (Age.match(valid_age_regex)) || (city =="")){
   
            if(!(name.match(valid_name_regex))){
                document.getElementById("name_error").style.visibility="visible";
                document.getElementById("name").style.borderColor="red";
                
            }

            else{
                document.getElementById("name_error").style.visibility="hidden";
                document.getElementById("name").style.borderColor="black";
                
            }
   }

   if(!(age.match(valid_age_regex))){
    document.getElementById("age_error").style.visibility="visible";
    document.getElementById("age").style.borderColor="red";
    
}

 else{
    document.getElementById("age_error").style.visibility="hidden";
    document.getElementById("age").style.borderColor="black";
    
 }

   if(city == ""){
    document.getElementById("city_error").style.visibility="visible";
    document.getElementById("city").style.borderColor="red";
    
    }

    else{
    document.getElementById("city_error").style.visibility="hidden";
    document.getElementById("city").style.borderColor="black";
    
    }
 return false;

}else{
    document.getElementById("name_error").syle.vissibility="hidden";
    document.getElementById("name").syle.vissibility="black";
    document.getElementById("age_error").syle.vissibility="hidden";
    document.getElementById("age").syle.vissibility="black";
    document.getElementById("city_error").syle.vissibility="hidden";
    document.getElementById("city").syle.vissibility="black";
    return true;
}

}