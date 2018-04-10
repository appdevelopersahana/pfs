 $('#category').on('change', function() {
         $('.packages').show();
});
    
    
 $('button').click(function(){
        $('#name1').val($('input[type="text"]').val());
         $('#email1').val($('#email').val());
         $('#phone1').val($('#phone').val());
    });
        

        $(document).ready(function(){
    $("button").click(function(){
    var firstname=$("#name").val();
    var name_regex = /^[a-zA-Z\s\.]+$/;
        
   if( ! firstname.match(name_regex)  )
      return " Name is required";
        
        return " ";       
    });
    $("button").click(function(event){
        $("#nameError").html(event.result);
    
    });  
}); 
       $(document).ready(function(){
    $("button").click(function(){
        var email=$.trim($("#email").val());
        var email_regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if( ! email.match(email_regex)  )
      return " Email is required";
        
        return " ";     
    });
    $("button").click(function(event){
         $("#emailError").html(event.result);
    
    });  
});
$(document).ready(function(){
    $("button").click(function(){
        var phone=$.trim($("#phone").val());
        var num_regex=/^\d{10}$/;
   if( ! phone.match(num_regex)  )
      return "Mobile number is required";
        
        return " ";     
    });
    $("button").click(function(event){
         $("#phoneError").html(event.result);
    
    });  
});
      