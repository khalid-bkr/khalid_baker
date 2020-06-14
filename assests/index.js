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


      function validateForm() {
        if (name == "") {
            document.getElementById("status").innerHTML = "Name cannot be empty";
            return false;
        }
        if (email == "") {
            document.getElementById("status").innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.getElementById("status").innerHTML = "Email format invalid";
                return false;
            }
        }
        if (subject == "") {
            document.getElementById("status").innerHTML = "Subject cannot be empty";
            return false;
        }
        if (message == "") {
            document.getElementById("status").innerHTML = "Message cannot be empty";
            return false;
        }
        document.getElementById("status").innerHTML = "Sending...";
        return true;
      }

      if(!validateForm())  return false;

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
          document.getElementById("status").innerHTML = "Thank you for your message <br> i'll respond to your message shortly."; //display message
        },
        error:function() {
          document.getElementById("status").innerHTML = "Oops! There was a problem.";
        }

      });



    });





});
