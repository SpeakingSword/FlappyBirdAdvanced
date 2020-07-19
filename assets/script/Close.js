
cc.Class({
    extends: cc.Component,

    properties: {

        target: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function () {
        this.node.on("touchstart", this.targetDispear, this)
    },

    targetDispear: function () {
        this.target.active = false;
    }
    
});
