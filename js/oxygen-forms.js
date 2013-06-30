var forms = {

  elReal: ".form_el__real",
  elFake: ".form_el__fake",

  init: function() {
    $(".form_checkbox__real").change(forms.updateCheckboxLabel);
    $(".form_radio__real").change(forms.updateRadioLabel);
    $(".form_select__real").change(forms.updateSelectLabel);
    
    $(".form_file__fake").click(function() {
      if ($(this).next(forms.elReal).prop("disabled") == false) {
        $(this).next(forms.elReal).trigger("click");
      }
    });
    $(".form_file__real").change(forms.updateFileLabel);

    $("input:reset").click(function() {
      this.form.reset();
      forms.updateElementsLabels(this.form);
      return false;
    });

    forms.updateElementsLabels();
  },

  updateElementsLabels: function(parent) {
    parent = $(parent || document);
    parent.find(".form_file__real").each(forms.updateFileLabel);
    parent.find(".form_select__real").each(forms.updateSelectLabel);
    parent.find(".form_checkbox__real").each(forms.updateCheckboxLabel);
    parent.find(".form_radio__real").each(forms.updateRadioLabel);
  },

  updateFileLabel: function() {
    var filename = $(this).val().replace(/^.*[\\\/]/, '');
    if (filename == "") {
      filename = "Выберите файл...";
    }
    $(this).prev(forms.elFake).find("p").text(filename);
    if ($(this).prop("disabled") == true) {
      $(this).prev(forms.elFake).attr("disabled", "disabled");
    }
    if ($(this).attr("data-valid") == "true") {
      $(this).prev(forms.elFake).attr("data-valid", "true");
    } else if ($(this).attr("data-valid") == "false") {
      $(this).prev(forms.elFake).attr("data-valid", "false");
    }
  },

  updateSelectLabel: function() {
    var optionSelectedText = $(this).find("option:selected").text();
    $(this).prev("p").text(optionSelectedText);
    forms.updateElAttr($(this));
  },

  updateCheckboxLabel: function() {
    if ($(this).prop("checked") == true) {
      $(this).closest(forms.elFake).attr("data-checked", "true");
    } else {
      $(this).closest(forms.elFake).attr("data-checked", "false");
    }
    forms.updateElAttr($(this));
  },

  updateRadioLabel: function(parent) {
    $(forms.elReal).each(function() {
      $(this).closest(forms.elFake).attr("data-checked", $(this).prop("checked"));
      forms.updateElAttr($(this));
    });
  },

  updateElAttr: function(el) {
    if (el.prop("disabled") == true) {
      el.closest(forms.elFake).attr("disabled", "disabled");
    }
    if (el.attr("data-valid") == "true") {
      el.closest(forms.elFake).attr("data-valid", "true");
    } else if (el.attr("data-valid") == "false") {
      el.closest(forms.elFake).attr("data-valid", "false");
    }
  }

};