$.fn.pieChart = function (settings) {

    if (settings == null || settings == undefined)
        settings = {};
    if (settings.radius == undefined || settings.radius == null)
        settings.radius = 50;
    if (settings.borderWidth == undefined || settings.borderWidth == null)
        settings.borderWidth = 10;

    if (settings.data == undefined || settings.data == null)
        settings.data = [];

    var total = 0;
    for (var i = 0; i < settings.data.length; i++) {
        if (settings.data[i] == undefined || settings.data[i] == null)
            settings.data[i] = {};
        if (settings.data[i].title == undefined || settings.data[i].title == null)
            settings.data[i].title = "item" + (i + 1).toString();
        if (settings.data[i].measure == undefined || settings.data[i].measure == null)
            settings.data[i].measure = 0;
        if (settings.data[i].borderColor == undefined || settings.data[i].borderColor == null)
            settings.data[i].borderColor = "#eee";
        if (settings.data[i].fillColor == undefined || settings.data[i].fillColor == null)
            settings.data[i].fillColor = "Transparent";

        if (settings.data[i].measure < 0) {
            alert("Invalid measure in data item index: " + i);
            return;
        }

        total += settings.data[i].measure;
    }

    if (total == 0) {
        alert("Sum of all measures cannot be zero");
        return;
    }


    this.css("position", "relative").css("height", ((settings.radius + settings.borderWidth) * 2) + "px").css("width", ((settings.radius + settings.borderWidth) * 2) + "px").css("direction","ltr");
    var zIndexIndexer = settings.data.length + 1;

    this.append("<div class='leftHalf' style='width:" + (settings.radius + settings.borderWidth) + "px;height:" + ((settings.radius + settings.borderWidth) * 2) + "px;'></div>");
    this.append("<div class='rightHalf' style='width:" + (settings.radius + settings.borderWidth) + "px;height:" + ((settings.radius + settings.borderWidth) * 2) + "px;left:" + (settings.radius + settings.borderWidth) + "px;'></div>");
    this.after("<div class='appendix' style='width:" + ((settings.radius + settings.borderWidth) * 2) + "px;'></div>");


    for (var i = 0; i < settings.data.length; i++) {
        settings.data[i].percentage = (settings.data[i].measure / total) * 100;
    }

    var percentageIndexer = 0;
    for (var i = 0; i < settings.data.length; i++) {
        zIndexIndexer--;
        tempPercentageIndexer = percentageIndexer;
        percentageIndexer += settings.data[i].percentage;
        var degrees = 360 * percentageIndexer / 100;

        settings.data[i].degrees = degrees;

        var itemApproxPercentage = round(settings.data[i].percentage, 2);
        var tooltip = settings.data[i].tooltip;
        if (tooltip == undefined)
            tooltip = settings.data[i].title + " (" + itemApproxPercentage + "%)";

        if (settings.data[i].percentage > 50) {
            this.find(".rightHalf").append("<div title='" + tooltip + "' class='movingHalf' style='left:-" + (settings.radius + settings.borderWidth) + "px;-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;border-top-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;z-index:" + zIndexIndexer + ";background-color:" + settings.data[i].fillColor + ";border-color:" + settings.data[i].borderColor + ";border-width:" + settings.borderWidth + "px;'></div>");
        }
        if (tempPercentageIndexer < 50)
            this.find(".rightHalf").append("<div title='" + tooltip + "' class='movingHalf' style='left:-" + (settings.radius + settings.borderWidth) + "px;-webkit-transform:rotate(" + degrees + "deg);-moz-transform:rotate(" + degrees + "deg);-ms-transform:rotate(" + degrees + "deg);transform:rotate(" + degrees + "deg);width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;border-top-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;z-index:" + zIndexIndexer + ";background-color:" + settings.data[i].fillColor + ";border-color:" + settings.data[i].borderColor + ";border-width:" + settings.borderWidth + "px;'></div>");
        if (percentageIndexer > 50)
            this.find(".leftHalf").append("<div title='" + tooltip + "' class='movingHalf' style='-webkit-transform:rotate(" + degrees + "deg);-moz-transform:rotate(" + degrees + "deg);-ms-transform:rotate(" + degrees + "deg);transform:rotate(" + degrees + "deg);width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;border-top-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;z-index:" + zIndexIndexer + ";background-color:" + settings.data[i].fillColor + ";border-color:" + settings.data[i].borderColor + ";border-width:" + settings.borderWidth + "px;'></div>");

        this.find("+div.appendix").append("<div class='appItem'><span class='colorBullet' style='background-color:" + settings.data[i].borderColor + ";'></span> <span class='appItemText'>" + settings.data[i].title + " (" + itemApproxPercentage + "%)" + "</span></div>");
    }
    this.find("+div.appendix").append("<div class='clear'></div>");

}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}