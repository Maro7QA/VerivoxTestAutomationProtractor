function CompPage() {
    this.searchField = $("#searchbox");
    this.filterBtn = $("#searchsubmit");
    this.result = $(".current > a");
    this.compInTheTable = $("td:nth-child(1) > a");
    this.addBtn = $("#add");
    this.nextBtn = $(".next > a");
    this.prevBtn = $(".prev > a");
    this.successMessage = $(".alert-message");
    this.nothToDisplay = $(".well");

}
module.exports = new CompPage();