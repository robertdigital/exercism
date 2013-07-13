exercism.models.SelectFilter = Backbone.Model.extend({
  defaults: {
    user: $(".dropdown-toggle[data-filter=user]").attr("data-selected"),
    exercise: $(".dropdown-toggle[data-filter=exercise]").attr("data-selected"),
    language: $(".dropdown-toggle[data-filter=language]").attr("data-selected"),
    nits: $("input[type=checkbox][data-filter=nits]").attr("data-selected"),
    arguments: $("input[type=checkbox][data-filter=arguments]").attr("data-selected")
  },

  setCheck: function (attribute, value) {
    this.set(attribute, value ? "0" : "All" );
  }
});
