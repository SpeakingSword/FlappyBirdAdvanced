
const Pipe = require("./Pipe");

cc.Class({
    extends: Pipe,

    properties: {
        minHeight: 20,
        maxHeight: 500,
        scaleSpeed: 50,

        scaleDirection: {
            default: 1,
            type: cc.Integer,
            visible: false
        }
    },

    // 重写父类 Pipe 的 update()
    update: function (dt) {
        this.checkStatus();
        this.updateScale(dt);
    },

    updateScale: function (dt) {
        if (!this.gameManager.gameStop && !this.gameManager.gameOver) {
            let increase = this.scaleSpeed * dt;

            if (this.pipeDown.height > this.maxHeight || this.pipeDown.height < this.minHeight) {
                this.scaleDirection = -this.scaleDirection;
            }

            this.pipeDown.height += increase * this.scaleDirection;
            this.pipeUp.height -= increase * this.scaleDirection;
            this.adjustPipe(increase * this.scaleDirection);
        }
    }
});
