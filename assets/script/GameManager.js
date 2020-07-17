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

        collision: true,
        collisionDebug: false,

        controlPad: {
            default: null,
            type: cc.Node
        },

        bird: {
            default: null,
            type: cc.Node
        },

        pipePrefab: [cc.Prefab],
        produceInterval: 1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function () {
        this.initiateGame();
        this.producePosX = cc.find("Canvas").width / 2 + 30;
        this.pipesNode = cc.find("Canvas/Pipes");
        this.backgroundsNode = cc.find("Canvas/Backgrounds");
        this.landsNode = cc.find("Canvas/Lands");
    },

    start () {
        this.producePipe();
    },

    // update (dt) {},
    update: function (dt) {
        if (!this.gameStop && !this.gameOver) {
            // 背景和地板循环移动
            let backgrounds = this.backgroundsNode.children;
            let lands = this.landsNode.children;
            for (let i = 0; i < backgrounds.length; ++i) {
                let bgScript = backgrounds[i].getComponent("Loop");
                let landScript = lands[i].getComponent("Loop");
                bgScript.moveAuto(dt);
                bgScript.checkPos();
                landScript.moveAuto(dt);
                landScript.checkPos();
            }

            // 移动管道
            let pipes = this.pipesNode.children;
            for (let i = 0; i < pipes.length; ++i) {
                pipes[i].getComponent("MoveInfinite").moveAuto(dt);
            }

            // 按照时间间隔持续制造新的管道
            if (this.timer >= this.produceInterval) {
                this.producePipe();
                this.timer = 0;
            }

            this.timer += dt;
        }
        else {
            if (this.controlPad.active) {
                this.controlPad.active = false;
            }
        }
    },

    producePipe: function () {
        let newPipe = cc.instantiate(this.pipePrefab[0]);
        newPipe.x = this.producePosX;
        this.pipesNode.addChild(newPipe, 1, "BasicNode");
    },

    initiateGame: function () {
        this.gameStop = false;
        this.gameOver = false;
        this.timeFrozen = false;
        this.timer = 0;
        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = this.collision;
        collisionManager.enabledDebugDraw = this.collisionDebug;
    }

});
