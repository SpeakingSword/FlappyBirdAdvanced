
let gameSetting = require("./GameSetting");

cc.Class({
    extends: cc.Component,

    properties: {

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
