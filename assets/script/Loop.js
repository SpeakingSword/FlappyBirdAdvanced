// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const mDirection = require("./Direction");

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

        distance: 100,

        speed: 1,

        direction: {
            default: mDirection.directionType.left,
            type: cc.Enum(mDirection.directionType)
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad () {
        this.originX = this.node.x;
    },

    start () {

    },

    moveAuto: function (dt) {
        this.node.x += mDirection.directionValue[this.direction] * this.distance * dt * this.speed;
    },

    checkPos: function () {
        let diff = Math.abs(this.originX - this.node.x);
        if (diff > this.distance)
            this.node.x = this.originX;
    }
});
