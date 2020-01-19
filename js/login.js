$(document).ready(function(){

    $("#submit_button").on('click',function(){
        
        var Email =$("#Email").val();
        var Password =$("#Password").val();
        
    //    console.log('1');

            $.ajax({

                url:'php/login.php',
                method:'post',
                data:{
                    register:1,
                    email:Email,
                    password:Password,
                   
                },
                success:function(response){
                    // console.log('2');

                    var data = JSON.parse(response);
                    localStorage.setItem('userdetails',response);
                    window.location='profile.html';

                    console.log(response);
                },
                dataType:'text'




                
            });


    });


});
