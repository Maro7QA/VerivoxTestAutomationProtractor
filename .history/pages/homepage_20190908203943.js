function homepage() {
    this.compName = $("document.querySelector("body > div.page-container > header > div.page-navigation > div > nav > ul > li:nth-child(5));
    this.introduced = $("#introduced");
    this.discontinued = $("#discontinued");
    this.company = $("#company");
    this.deleteBtn = $(".danger");
    this.saveComp = $(".primary");
    this.cancelBtn = $("a[href$='/computers']");
    this.missedFieldError = $(".help-inline");

}
module.exports = new AddEditPage();