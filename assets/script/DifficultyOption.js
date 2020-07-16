// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
let gameSetting = require("./GameSetting");

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

        easyButton: {
            default: null,
            type: cc.Node
        },

        mediumButton: {
            default: null,
            type: cc.Node
        },

        hardButton: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function () {
        // 注册三个按钮的回调
        this.easyButton.on("touchstart", function (event) {
            console.log(this.easyButton.name + " was pressed!");
            gameSetting.setDifficulty(0);
            this.easyButton.color = cc.color(248, 156, 46, 255);
            console.log("difficulty: " + gameSetting.getDifficulty());
        }, this);

        this.mediumButton.on("touchstart", function (event) {
            console.log(this.mediumButton.name + " was pressed!");
            gameSetting.setDifficulty(1);
            console.log("difficulty: " + gameSetting.getDifficulty());
        }, this);

        this.hardButton.on("touchstart", function () {
            console.log(this.hardButton.name + " was pressed!");
            gameSetting.setDifficulty(2);
            console.log("difficulty: " + gameSetting.getDifficulty());
        }, this);

    },

    start () {

    },

    // update (dt) {},
    update: function () {
        let easyTxt = this.easyButton.getChildByName("Label");
        easyTxt.color = cc.Color.WHITE;
        let mediumTxt = this.mediumButton.getChildByName("Label");
        mediumTxt.color = cc.Color.WHITE;
        let hardTxt = this.hardButton.getChildByName("Label");
        hardTxt.color = cc.Color.WHITE;

        switch (gameSetting.getDifficulty()) {
            case 0:
                easyTxt.color = cc.color(248, 156, 46, 255);
                break;
            case 1:
                mediumTxt.color = cc.color(248, 156, 46, 255);
                break;
            case 2:
                hardTxt.color = cc.color(248, 156, 46, 255);
                break;
            default:
                
        }
    }
});
