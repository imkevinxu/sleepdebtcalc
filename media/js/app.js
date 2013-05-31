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
        $("#wat, #suspicious, #congrats, #good, #drowsy, #tips").addClass("hidden");
        $("#pledge, .social").removeClass("hidden").addClass("animated fadeInDown");
        $(".temp").remove();
        if (hours < 0) {
          $("#wat").removeClass("hidden").addClass("animated fadeInDown");
          $("#wat h3").after($(".social"));
        } else if (hours > 24) {
          $("#suspicious").removeClass("hidden").addClass("animated fadeInDown");
          $("#suspicious h3").after($(".social"));
        } else if (hours > 8) {
          $("#congrats").removeClass("hidden").addClass("animated fadeInDown");
          $("#congrats h3").after($(".social"));
        } else if (hours == 8) {
          $("#good").removeClass("hidden").addClass("animated fadeInDown");
          $("#good h3").after($(".social"));
        } else {
          $("#weekdebt, #monthdebt, #yeardebt").empty();
          $("#drowsy, #tips").removeClass("hidden").addClass("animated fadeInDown");
          $("#drowsy h3").after($(".social"));
          $("#tips").append($(".social").clone().addClass("temp"));
          var debt = 8 - hours;
          $("#weektotal").text(Math.round(7*debt) + " HOURS");
          $("#monthtotal").text(Math.round(31*debt) + " HOURS");
          $("#yeartotal").text(Math.round(365*debt) + " HOURS");
          for (var i = 0; i < Math.round(7*debt); i++) {
            $("#weekdebt").append("<div class=\"block\"></div>");
          }
          for (var i = 0; i < Math.round(31*debt); i++) {
            $("#monthdebt").append("<div class=\"block\"></div>");
          }
          for (var i = 0; i < Math.round(365*debt); i++) {
            $("#yeardebt").append("<div class=\"block\"></div>");
          }
        }
      }, 300);
    }
  });

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  $.scrollDepth();

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