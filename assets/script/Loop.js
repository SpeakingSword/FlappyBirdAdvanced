
const mDirection = require("./Direction");

cc.Class({
    extends: cc.Component,

    properties: {

        distance: 100,

        speed: 1,

        direction: {
            default: mDirection.directionType.left,
            type: cc.Enum(mDirection.directionType)
        }
    },

    onLoad () {
        this.originX = this.node.x;
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
