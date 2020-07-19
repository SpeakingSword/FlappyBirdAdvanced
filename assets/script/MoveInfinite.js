
const mDirection = require("./Direction");

cc.Class({
    extends: cc.Component,

    properties: {

        speed: 1,

        direction: {
            default: mDirection.directionType.right,
            type: cc.Enum(mDirection.directionType)
        }
        
    },

    moveAuto: function (dt) {
        this.node.x += mDirection.directionValue[this.direction] * dt * this.speed;
    }
});
