
cc.Class({
    extends: cc.Component,

    properties: {

        collision: true,
        collisionDebug: false,

        controlPad: {
            default: null,
            type: cc.Node
        },

        scoreText: {
            default: null,
            type: cc.Label
        },

        overPassText: {
            default: null,
            type: cc.Label
        },

        bird: {
            default: null,
            type: cc.Node
        },

        pipePrefab: [cc.Prefab],
        produceInterval: 1
    },

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

    update: function (dt) {
        if (!this.gameStop && !this.gameOver) {
            if (!this.controlPad.active) {
                this.controlPad.active = true;
            }
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
            // 游戏暂停和游戏失败时禁止玩家操作
            if (this.controlPad.active) {
                this.controlPad.active = false;
            }

            // 停止小鸟的所有动画
            this.bird.stopAllActions();
        }
    },

    producePipe: function () {
        let index = this.getPrefabIndex();
        //console.log("index: " + index);
        let newPipe = cc.instantiate(this.pipePrefab[index]);
        newPipe.x = this.producePosX;
        this.pipesNode.addChild(newPipe, 1, "BasicNode");
    },

    initiateGame: function () {
        this.gameStop = false;
        this.gameOver = false;
        this.timeFrozen = false;
        this.overPassPipe = 0;
        this.score = 0;
        this.timer = 0;
        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = this.collision;
        collisionManager.enabledDebugDraw = this.collisionDebug;
    },

    getPrefabIndex: function () {
        //console.log("prefab num: " + this.pipePrefab.length);
        let index = Math.floor(Math.random() * this.pipePrefab.length);
        return index;
    },

    finishGame: function () {
        this.gameOver = true;
        cc.find("Canvas/GameOver").active = true;
    },

    pauseGame: function () {
        this.gameStop = true;
        cc.find("Canvas/PauseBoard").active = true;
    },

    resumeGame: function () {
        cc.find("Canvas/PauseBoard").active = false;
        this.gameStop = false;
    },

    increaseScore: function () {
        this.score += 1;
        this.scoreText.string = this.score;
    },

    increaseOverPassPipe: function () {
        this.overPassPipe += 1;
        this.overPassText.string = this.overPassPipe;
    }

});
