 const validateForm = () => {

    //get the name field value
    let name = $('#name').val();
    //get the name field value
    let email = $('#email').val();
    //get the subject
    let subject = $('#subject').val();
    //get the message
    let message = $('#message').val();
    //get the status
    let status = $('#status').val();



    if (name == "") {
        document.getElementById("status").innerHTML = "Name cannot be empty";
        return false;
    }
    if (email == "") {
        document.getElementById("status").innerHTML = "Email cannot be empty";
        return false;
    } else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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


export { validateForm };
