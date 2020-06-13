$( document ).ready(function() {
  new WOW().init();

  $('#my-form').on('submit', function(e) {
      e.preventDefault();

      //get the name field value
      var name = $('#name').val();
      //get the name field value
      var email = $('#email').val();
      //get the subject
      var subject = $('#subject').val();
      //get the message
      var message = $('#message').val();
      //get the status
      var status = $('#status').val();


      //send to formspree
      $.ajax({
        url:"https://formspree.io/mknqbqbb",
        method:'POST',
        data:{
          name:name,
          email:email,
          subject:subject,
          message:message,
        },
        dataType:"json",
        success:function() {
          $('#my-form')[0].reset(); //clear form
          document.getElementById("status").innerHTML = "Thank you for your message."; //display message
        },
        error:function() {
          document.getElementById("status").innerHTML = "Oops! There was a problem.";
        }

      });

    });



});
