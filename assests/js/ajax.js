import { validateForm } from './form-validation.js';

const myForm = () => {


     $('#my-form').on('submit', function(e) {
      e.preventDefault();

        let name = $('#name').val();
        //get the name field value
        let email = $('#email').val();
        //get the subject
        let subject = $('#subject').val();
        //get the message
        let message = $('#message').val();
        //get the status
        let status = $('#status').val();


      if(!validateForm()) return false;

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

    })

}

export { myForm };
