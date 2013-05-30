;(function ($, window, undefined) {

  /* Javascript masterminded by Kevin Xu <kevin@imkevinxu.com> */
  $('#pledge form').submit(function() {
    var input = $('input#username');
    if (input.val()) {
      return true;
    } else {
      input.addClass("error animated shake");
      return false;
    }
  });

  var timeout;
  $('#sleephours').bind('textchange', function() {
    var self = this;
    var hours = $(this).val();
    clearTimeout(timeout);
    if (isNumber(hours)) {
      timeout = setTimeout(function() {
        hours = parseFloat(hours);
        $("#congrats, #good, #drowsy").addClass("hidden");
        $("#pledge").removeClass("hidden").addClass("animated fadeInDown");
        if (hours > 8) {
          $("#congrats").removeClass("hidden").addClass("animated fadeInDown");
        } else if (hours == 8) {
          $("#good").removeClass("hidden").addClass("animated fadeInDown");
        } else {
          $("#drowsy").removeClass("hidden").addClass("animated fadeInDown");
          var debt = 8 - hours;
          $("#weektotal").text(7*debt + " HOURS");
          $("#monthtotal").text(31*debt + " HOURS");
          $("#yeartotal").text(365*debt + " HOURS");
          for (var i = 0; i < 7*debt; i++) {
            $("#weekdebt").append("<div class=\"block\"></div>");
          }
          for (var i = 0; i < 31*debt; i++) {
            $("#monthdebt").append("<div class=\"block\"></div>");
          }
          for (var i = 0; i < 365*debt; i++) {
            $("#yeardebt").append("<div class=\"block\"></div>");
          }
        }
      }, 500);
    }
  });




  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };


  /* -----------------------------------------
     ZURB FOUNDATION INITIALIZATION
  ----------------------------------------- */

  $(document).foundation();

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (window.Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);