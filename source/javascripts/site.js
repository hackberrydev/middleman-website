window.Hackberry = {};

Hackberry.PlanExample = (function() {
  function formatDayDate(dateDelta) {
    var date = new Date();

    date.setDate(date.getDate() + dateDelta);

    var weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

    return date.toISOString().slice(0, 10) + ", " + weekday;
  }

  function init() {
    document.querySelectorAll("[data-date-example]").forEach(function(el) {
      var dateDelta = parseInt(el.getAttribute("data-date-example"));

      el.innerHTML = formatDayDate(dateDelta);
    });
  }

  return {
    init: init
  };
})();

Hackberry.PlanExample.init();
