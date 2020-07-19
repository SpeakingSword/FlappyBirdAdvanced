
cc.Class({
    extends: cc.Component,

    properties: {

        jumpHeight: 100,
        jumpUpDuration: 0.5,
        jumpRotateDuration: 0.3,

        dropDownDuration: 1,
        dropRotateDuration: 1,

        ground: {
            default: null,
            type: cc.Node
        }
        
    },

    onLoad: function () {
        this.gameManager = cc.find("GameManager").getComponent("GameManager");
        this.drop = this.setDropAction();
        this.jump = this.setJumpAction();
        this.node.runAction(this.drop);
    },

    update: function (dt) {
        if (this.jump.isDone() && !this.gameManager.gameOver && !this.gameManager.gameStop) {
            this.node.runAction(this.drop);
        }
    },

    onCollisionEnter: function (other, self) {

        let otherGroup = other.node.group;
        
        if (otherGroup == "DeathTrigger") {
            this.gameManager.finishGame();
        }
        
        if (otherGroup == "Medal") {
            this.collectMedal(other);
        }
    },

    setDropAction: function () {
        // dropDownDuration 待优化，其值不应该是固定的
        let dropDown = cc.moveTo(this.dropDownDuration, cc.v2(this.node.x, this.ground.y + this.ground.height / 2)).easing(cc.easeQuarticActionIn());
        let dropRotate = cc.rotateTo(this.dropRotateDuration, 90).easing(cc.easeCubicActionIn());
        return cc.spawn(dropDown, dropRotate);
    },

    setJumpAction: function () {
        let jumpUp = cc.moveTo(this.jumpUpDuration, cc.v2(this.node.x, this.node.y + this.jumpHeight)).easing(cc.easeCubicActionOut());
        let jumpUpRotate = cc.rotateTo(this.jumpRotateDuration, -45).easing(cc.easeCubicActionOut());
        return cc.spawn(jumpUp, jumpUpRotate);
    },

    collectMedal: function (medal) {
        this.gameManager.increaseScore();
        medal.node.destroy();
    }
});
