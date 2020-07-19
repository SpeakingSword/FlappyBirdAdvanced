
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        this.node.on("touchstart", function () {
            this.gameManager.resumeGame();
        }, this);
    }

});
