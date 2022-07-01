window.Hackberry = {};

Hackberry.PlanExample = (function() {
  function init() {
    document.querySelectorAll("[data-date-example]").forEach(function(el) {
      console.log(el.getAttribute("data-date-example"));
    });
  }
  return {
    init: init
  };
})();

Hackberry.PlanExample.init();
