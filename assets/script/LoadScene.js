
cc.Class({
    extends: cc.Component,

    properties: {

        sceneName: ""

    },

    onLoad: function () {
        this.node.on("touchstart", function () {
            cc.director.loadScene(this.sceneName);
        }, this);
    }

});
