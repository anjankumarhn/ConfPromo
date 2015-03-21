function UserValidator() {
  $("#new_user").validate({
    debug: true,
    rules: {
      "user[user_name]": {
        required:true
      },
      "user[email]": {
       email: true,
       required: true,
       remote:"/users/check_email"
     },
     "user[organization]" : {
      required: true
    },
    "user[designation]": {
      required:true
    }
  },

  errorElement: "span",
  errorClass: "help-block",

  messages: {
   "user[user_name]":{
    required: "This field is required!"
  },
  "user[email]": {
    required: "This field is required!",
    email: "Please enter a valid E-mail address!",
    remote: "Email has been already taken"
  },
  "user[organization]": {
    required:"This field is required!"
  },
  "user[designation]": {
    required: "This field is required!"
  }
},

highlight: function(element) {
 $(element).parent().parent().addClass("has-error");
},

unhighlight: function(element) {
 $(element).parent().parent().removeClass("has-error");
},

invalidHandler: function(event, validator) {
        // 'this' refers to the form
        var errors = validator.numberOfInvalids();
        if (errors) {

          // Populating error message
          var errorMessage = errors == 1
          ? 'You missed 1 field. It has been highlighted'
          : 'You missed ' + errors + ' fields. They have been highlighted';

          // Removing the form error if it already exists
          $("#div_user_js_validation_error").remove();

          errorHtml = "<div id='div_user_js_validation_error' class=\"alert alert-danger\" data-alert=\"alert\" style=\"margin-bottom:5px;\">"+ errorMessage +"</div>"
          //$("#div_user_details").prepend(errorHtml);
          $("#div_modal_generic div.modal-body-main").prepend(errorHtml);

          // Show error labels
          $("div.error").show();

        } else {
          // Hide error labels
          $("div.error").hide();
          // Removing the error message
          $("#div_user_js_validation_error").remove();
        }

      },
      submitHandler: function(form) {
        form.submit();
      }
    });

}
