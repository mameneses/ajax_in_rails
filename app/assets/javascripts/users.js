$(document).ready(function(){

  // DOM manipultution to add user
  function addUserToIndex (data) {
    $(".index-all-users").append("<hr>\
                                      <div>\
                                        <h5>Name:</h5>\
                                        <h3>"+ data.first_name + " " + data.last_name + "</h3>\
                                        <h5>Location:</h5>\
                                        <h3>" + data.location.address + "</h3>\
                                        <h5>Start Up:</h5>\
                                        <h3>" + data.start_up.name + "</h3>\
                                      </div>")
        $('#user_first_name').val("")
        $('#user_last_name').val("")
        $('#user_location_attributes_address').val("")
  }

  // adds listener to submit form on user index page
  $('.index-user-submit').on('click', function(e){
    
    var form = $(this).parent('form');
    // prevents form from submitting and reloading page
    event.preventDefault();

    // makes ajax call to create user
    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
      // on success manipulate DOM to show new user
      success: function(data){
        addUserToIndex(data)
      },
      error: function(data){
        console.log("Something send wrong!")
      },
      dataType: "JSON"
    });
  });
});