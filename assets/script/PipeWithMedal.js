
const Pipe = require("./Pipe");

cc.Class({
    extends: Pipe,

    properties: {
        maxMedalOffset: 50
    },

    // 重写父类 Pipe 的 onLoad()
    onLoad: function () {
        this.initiate();
        this.initiateMedal();
    },

    initiateMedal: function () {
        this.medal = this.node.getChildByName("Medal");
        this.randomMedalPos();
    },

    randomMedalPos: function () {
        let offset = Math.random() * 2 * this.maxMedalOffset - this.maxMedalOffset;
        this.medal.y -= this.increase;
        this.medal.y += offset;
    }
});
