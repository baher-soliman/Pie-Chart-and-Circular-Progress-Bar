$.fn.pie = function (settings) {
    if (settings == null || settings == undefined)
        settings = {};
    if (settings.radius == undefined || settings.radius == null)
        settings.radius = 50;
    if (settings.borderWidth == undefined || settings.borderWidth == null)
        settings.borderWidth = 10;
    if (settings.fillColor == undefined || settings.fillColor == null)
        settings.fillColor = "#fff";
    if (settings.borderColor == undefined || settings.borderColor == null)
        settings.borderColor = "#000";
    if (settings.valuePercentage == undefined || settings.valuePercentage == null)
        settings.valuePercentage = 0;
    if (settings.emptyFillColor == undefined || settings.emptyFillColor == null)
        settings.emptyFillColor = "Transparent";
    if (settings.emptyBorderColor == undefined || settings.emptyBorderColor == null)
        settings.emptyBorderColor = "#eee";
    if (settings.hideValue == undefined || settings.hideValue == null)
        settings.hideValue = false;

    settings.valuePercentage = parseInt(settings.valuePercentage);
    if (settings.valuePercentage != NaN && settings.valuePercentage>=0 && settings.valuePercentage <= 100) {
        var degrees = 360 * settings.valuePercentage / 100;
        var movingHalfZIndex = 2;
        var rightHalfBackGroundColor = settings.emptyFillColor;
        var rightHalfBorderColor = settings.emptyBorderColor;
        if (settings.valuePercentage > 50) {
            movingHalfZIndex = 4;
            rightHalfBackGroundColor = settings.fillColor;
            rightHalfBorderColor = settings.borderColor;
        }

        

        this.css("position", "relative").css("height", ((settings.radius + settings.borderWidth) * 2) + "px").css("width", ((settings.radius + settings.borderWidth) * 2) + "px").css("direction","ltr");
        this.append("<div class='leftHalf' style='width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;background-color:" + settings.emptyFillColor + ";border-top-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-color:" + settings.emptyBorderColor + ";border-width:" + settings.borderWidth + "px;'></div>");
        this.append("<div class='rightHalf' style='width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;left:" + (settings.radius + settings.borderWidth).toString() + "px;border-top-right-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-right-radius:" + (settings.radius + settings.borderWidth).toString() + "px;z-index:1;background-color:" + rightHalfBackGroundColor + ";border-color:" + rightHalfBorderColor + ";border-width:" + settings.borderWidth + "px;'></div>");
        this.append("<div class='movingHalf' style='-webkit-transform:rotate(" + degrees + "deg);-moz-transform:rotate(" + degrees + "deg);-ms-transform:rotate(" + degrees + "deg);transform:rotate(" + degrees + "deg);width:" + settings.radius + "px;height:" + settings.radius * 2 + "px;border-top-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;border-bottom-left-radius:" + (settings.radius + settings.borderWidth).toString() + "px;z-index:" + movingHalfZIndex + ";background-color:" + settings.fillColor + ";border-color:" + settings.borderColor + ";border-width:" + settings.borderWidth + "px;'></div>");
        this.append("<div class='pieOverlay' style='width:" + ((settings.radius + settings.borderWidth) * 2) + "px" + ";height:" + ((settings.radius + settings.borderWidth) * 2) + "px;'></div>");
        if (!settings.hideValue) {
            this.find(".pieOverlay").append("<span>" + settings.valuePercentage + "%</span>");
        }
    }
};