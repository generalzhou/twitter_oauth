$(document).ready(function() {
    $('#tweet_area').keyup(function(e){
      var form_val = $(this).val(); 
      console.log(form_val.length);
      $('#characters_left').html(140-form_val.length) 
      if (form_val.length > 140) {
          $('#tweet_area').css('background-color', '#FF9999');
        } else {
          $('#tweet_area').css('background-color', 'white');
        }
    });
  });
