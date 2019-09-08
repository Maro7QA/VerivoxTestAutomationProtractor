function homepage() {
    this.compName = $("#name");
    this.introduced = $("#introduced");
    this.discontinued = $("#discontinued");
    this.company = $("#company");
    this.deleteBtn = $(".danger");
    this.saveComp = $(".primary");
    this.cancelBtn = $("a[href$='/computers']");
    this.missedFieldError = $(".help-inline");

}
module.exports = new AddEditPage();