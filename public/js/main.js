function mySend() {
    document.getElementById("message").value = document.getElementById("write").value;
}

$(document).ready(function(){
   var message = $('#write').val
   
    
   $('#btn').on('click',function(){
       $('#messages-display').append('<p>'+message+'</p>');
   });
    alert('debug');
});