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

        playButton: {
            default: null,
            type: cc.Node
        },

        /**
        optionsButton: {
            default: null,
            type: cc.Node
        },
        */

        exitButton: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function () {
        this.playButton.on("mousedown", function (event) {
            console.log(this.playButton.name + " was pressed!");
        }, this);

        /**
        this.optionsButton.on("mousedown", function (event) {
            console.log(this.optionsButton.name + " was pressed!" + " And it's parent is " + this.name);
            let optionsBoard = this.node.getChildByName("OptionsBoard");
            optionsBoard.active = optionsBoard.active? false: true;

        }, this);
        */

        this.exitButton.on("mousedown", function (event) {
            console.log(this.exitButton.name + "was pressed!");

        }, this);
    },

    start () {

    },

    // update (dt) {},
});