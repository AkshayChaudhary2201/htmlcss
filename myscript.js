function validateForm() {
  var x = document.myform.name.value;
  var price=document.myform.price.value;
   var active=document.myform.act.value;
    var dat=document.myform.date.value;
  if (x == ""){ {
    alert("Name must be filled out");
    return false;
  }
  if(x.length<2 || x.length>62){
	  alert("Name must be between 2 to 65 letters");
	  return false;
  }
  if(price==""){
	  alert("price must be filled out");
	  return false;
  }
  if(active==""){
	  alert("choose an option");
	  return false;
  }
  if(dat==""){
	  alert("choose a date");
	  return false;
  }
 return true; 
}