$(document).ready(function(){

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

  $('.index-user-submit').on('click', function(e){
    
    var form = $(this).parent('form');

    event.preventDefault();

    $.ajax({
      type: "POST",
      url: form.attr('action'),
      data: form.serialize(),
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