$(document).ready(function(){

    $("#submit_button").on('click',function(){
        var Username = $("#Username").val();
        var Email =$("#Email").val();
        var Password =$("#Password").val();
        var Phonenumber=$("#Phonenumber").val();

       // console.log(username);
       console.log('1');

            $.ajax({

                url:'php/register.php',
                method:'post',
                data:{
                    register:1,
                    email:Email,
                    password:Password,
                    phonenumber:Phonenumber,
                    username:Username
                },
                success : function(response){
                    console.log('2');
                    console.log(response);
alert('registered successfully please login');
                    window.location='login.html';
                },
                dataType:'text'

                
            });


    });


});

