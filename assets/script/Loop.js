// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let DirectionType = {
    Left: 0,
    Right: 1
}

let DirectionValue = [-1, 1];

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
            default: DirectionType.Left,
            type: cc.Enum(DirectionType)
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad () {
        this.originX = this.node.x;
    },

    start () {

    },

    // update (dt) {},
    update: function (dt) {
        //console.log(this.direction);
        //console.log(DirectionType.Right);
        /**
        switch (this.direction) {
            case DirectionType.Left:
                this.node.x -= this.distance * dt * this.speed;
                break;
            case DirectionType.Right:
                this.node.x += this.distance * dt * this.speed;
                break;
            default:
                this.node.x -= this.distance * dt * this.speed;
        }
        */
        this.node.x += DirectionValue[this.direction] * this.distance * dt * this.speed;    
        let diff = Math.abs(this.originX - this.node.x);
        if (diff > this.distance)
            this.node.x = this.originX;
    }
});
