$('aside a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL to load
  var $content = $('#content');                             // Cache selection

  $('aside a.active').removeClass('active');                // Update links
  $(this).addClass('active');
  $('#container').remove();                                 // Remove content

  $.ajax({
    type: "GET",                                            // GET or POST
    url: url,                                               // Path to file
    timeout: 2000,                                          // Waiting time
    beforeSend: function() {                                // Before Ajax 
      $content.append('<div id="load">Loading</div>');      // Load message
    },
    complete: function() {                                  // Once finished
      $('#load').remove();                                  // Clear message
    },
    success: function(data) {                               // Show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    error: function() {                                     // Show error msg 
      $content.html('<div class="container">Please try again soon.</div>');
    }
  });

});