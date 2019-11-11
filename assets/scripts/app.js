$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    $("#quote").text(config.preferences["Text"]);
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});
