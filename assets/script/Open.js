
cc.Class({
    extends: cc.Component,

    properties: {

        target: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function () {
        this.node.on("touchstart", this.displayTarget, this);

    },

    displayTarget: function () {
        this.target.active = true;
    }
});
