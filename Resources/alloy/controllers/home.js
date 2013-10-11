function Controller() {
    function openAdd1() {
        var add1 = Alloy.createController("add1");
        add1.getView().open({
            modal: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeWindow = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "homeWindow",
        titleid: "home",
        layout: "vertical"
    });
    $.__views.Btadd = Ti.UI.createButton({
        top: "10dp",
        width: "200dp",
        color: "white",
        title: L("adicionar"),
        id: "Btadd"
    });
    $.__views.homeWindow.add($.__views.Btadd);
    openAdd1 ? $.__views.Btadd.addEventListener("click", openAdd1) : __defers["$.__views.Btadd!click!openAdd1"] = true;
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.homeWindow.add($.__views.__alloyId0);
    $.__views.Lprocurar = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: "10dp",
        color: "white",
        font: {
            fontSize: "16dp"
        },
        textid: "procurarText",
        id: "Lprocurar"
    });
    $.__views.__alloyId0.add($.__views.Lprocurar);
    $.__views.TFprocurar = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: L("procurarDica"),
        id: "TFprocurar"
    });
    $.__views.__alloyId0.add($.__views.TFprocurar);
    $.__views.homeTab = Ti.UI.createTab({
        backgroundColor: "#00688B",
        backgroundSelectedColor: "#00BFFF",
        backgroundFocusedColor: "#009ACD",
        icon: "/images/ic_home.png",
        window: $.__views.homeWindow,
        id: "homeTab",
        titleid: "home"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Btadd!click!openAdd1"] && $.__views.Btadd.addEventListener("click", openAdd1);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;