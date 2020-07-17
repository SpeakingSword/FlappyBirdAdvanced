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

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function () {
        this.drop = this.setDropAction();
        this.jump = this.setJumpAction();
        this.node.runAction(this.drop);
    },

    start () {

    },

    update: function (dt) {
        if (this.jump.isDone()) {
            this.node.runAction(this.drop);
        }
    },

    onCollisionEnter: function (other, self) {
        cc.find("GameManager").getComponent("GameManager").gameOver = true;
        this.node.stopAllActions();
    },

    setDropAction: function () {
        let dropDown = cc.moveTo(this.dropDownDuration, cc.v2(this.node.x, this.ground.y + this.ground.height / 2)).easing(cc.easeQuarticActionIn());
        let dropRotate = cc.rotateTo(this.dropRotateDuration, 90).easing(cc.easeCubicActionIn());
        return cc.spawn(dropDown, dropRotate);
    },

    setJumpAction: function () {
        // jumpUpDuration 待优化，其值不应该是固定的
        let jumpUp = cc.moveTo(this.jumpUpDuration, cc.v2(this.node.x, this.node.y + this.jumpHeight)).easing(cc.easeCubicActionOut());
        let jumpUpRotate = cc.rotateTo(this.jumpRotateDuration, -45).easing(cc.easeCubicActionOut());
        return cc.spawn(jumpUp, jumpUpRotate);
    }
});
