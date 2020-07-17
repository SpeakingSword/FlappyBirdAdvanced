// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        maxIncrease: 50,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function () {
        this.initiate();
    },

    start () {

    },

    // update (dt) {},
    update: function () {
        if (this.node.x <= -this.destroyInX) {
            console.log("a pipe was destroyed!");
            this.mDestroy();
        }
    },

    initiate: function () {
        this.destroyInX = cc.find("Canvas").width;
        this.pipeUp = this.node.getChildByName("PipeUp");
        this.pipeDown = this.node.getChildByName("PipeDown");
        this.randomIncrease();
        //console.log("pipeDwon height: " + this.pipeDown.height);
        //console.log("pipeUp height: " + this.pipeUp.height)
    },

    randomIncrease: function () {
        let increase = Math.random() * 2 * this.maxIncrease - this.maxIncrease; // 返回 (-maxIncrease, maxIncrease) 区间的数
        // 若 increase > 0，则 pipeDown 变长，其高度要降低才能体现它增加的长度
        // pipeDown 变长则 pipeUp 变短，同样的其高度要降低才能体现它减少的长度
        this.pipeDown.height += increase;
        this.pipeDown.y -= increase / 2;
        this.pipeUp.height -= increase;
        this.pipeUp.y -= increase / 2;

        // 修改管道的 BoxCollider 以适应其本身
        this.pipeDown.getComponent(cc.BoxCollider).height += increase;
        this.pipeUp.getComponent(cc.BoxCollider).height += increase;

    },

    mDestroy: function () {
        this.node.destroy();
    }
});
