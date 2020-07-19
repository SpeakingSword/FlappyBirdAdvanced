
cc.Class({
    extends: cc.Component,

    properties: {
       loopSet: {
           default: null,
           type: cc.Node
       }
    },

    onLoad: function () {
        this.allLoopNodes = this.loopSet.children;
    },

    update: function (dt) {
        for (let i = 0; i < this.allLoopNodes.length; ++i) {
            let loop = this.allLoopNodes[i].getComponent("Loop");
            loop.moveAuto(dt);
            loop.checkPos();
        }
    }
});
