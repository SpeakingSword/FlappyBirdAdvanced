
const Pipe = require("./Pipe");

cc.Class({
    extends: Pipe,

    properties: {
        
    },

    // 重写父类 Pipe 的 onLoad()
    onLoad: function () {
        this.initiate();
        this.initiateStabs();
    },

    initiateStabs: function () {
        this.downStabs = this.node.getChildByName("downStabs");
        this.upStabs = this.node.getChildByName("upStabs");
        this.downStabs.y = this.pipeDown.y - this.pipeDown.height / 2;
        this.upStabs.y  = this.pipeUp.y + this.pipeUp.height / 2;
    }
});
