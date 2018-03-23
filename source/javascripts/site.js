window.Hackberry = {};

Hackberry.ToggleNext = (function($) {
  function init() {
    $(document).on("click", "[data-toggle-next]", function() {
      $(this).next().slideToggle();
    });
  }

  return {
    init: init
  };
}(jQuery));

Hackberry.ToggleNext.init();
