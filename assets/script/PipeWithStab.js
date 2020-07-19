
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
        this.stabDown = this.node.getChildByName("StabDown");
        this.stabUp = this.node.getChildByName("StabUp");
        this.stabDown.y = this.pipeDown.y - this.pipeDown.height / 2;
        this.stabUp.y  = this.pipeUp.y + this.pipeUp.height / 2;
    }
});
