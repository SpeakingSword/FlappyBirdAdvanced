
let Pipe = cc.Class({
    extends: cc.Component,

    properties: {

        maxIncrease: 50,
    },

    onLoad: function () {
        this.initiate();
    },

    update: function (dt) {
        this.checkStatus();
    },

    initiate: function () {
        this.overpassed = false;
        this.bird = cc.find("Canvas/Bird");
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        this.destroyInX = cc.find("Canvas").width;
        this.pipeUp = this.node.getChildByName("PipeUp");
        this.pipeDown = this.node.getChildByName("PipeDown");
        this.increase = 0;
        this.randomIncrease();

    },

    randomIncrease: function () {
        let increase = Math.random() * 2 * this.maxIncrease - this.maxIncrease; // 返回 (-maxIncrease, maxIncrease) 区间的数
        
        this.pipeDown.height += increase;
        this.pipeUp.height -= increase;
        this.adjustPipe(increase);

        // 这个返回记录管道第一次增长了多少
        this.increase = increase;
    },

    adjustPipe: function (increase) {
        // 若 increase > 0，则 pipeDown 变长，其高度要降低才能体现它增加的长度
        // pipeDown 变长则 pipeUp 变短，同样的其高度要降低才能体现它减少的长度
        this.pipeDown.y -= increase / 2;
        this.pipeUp.y -= increase / 2;

        // 修改管道的 BoxCollider 以适应其本身
        this.pipeDown.getComponent(cc.BoxCollider).size.height += increase;
        this.pipeUp.getComponent(cc.BoxCollider).size.height -= increase;
    },

    mDestroy: function () {
        this.node.destroy();
    },

    checkStatus: function () {

        // 增加越过管道的数量
        if ((this.bird.x - this.node.x) > 50 && !this.overpassed) {
            this.gameManager.increaseOverPassPipe();
            this.overpassed = true;
        }

        // 销毁该管道
        if (this.node.x <= -this.destroyInX) {
            this.mDestroy();
        }
    }
});

module.exports = Pipe;