$(document).ready(function(){


var mydata = localStorage.getItem('userdetails');
if(mydata){
var jsondata = JSON.parse(mydata);
$("#pname").html(jsondata.username);
$("#pphone").html(jsondata.phonenumber);
$("#pmail").html(jsondata.email);

$("#Logoutbutton").on('click',function(){
    localStorage.clear();
    window.location='profile.html';


});
}
else{
    window.location='login.html';
}

}); 