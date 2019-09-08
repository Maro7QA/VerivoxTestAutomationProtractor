function homepage() {
    this.cellPhone = $("#mps-tab-6 > span.mps-label-text");
    this.introduced = $("#introduced");
    this.discontinued = $("#discontinued");
    this.company = $("#company");
    this.deleteBtn = $(".danger");
    this.saveComp = $(".primary");
    this.cancelBtn = $("a[href$='/computers']");
    this.missedFieldError = $(".help-inline");

}
module.exports = new homepage();