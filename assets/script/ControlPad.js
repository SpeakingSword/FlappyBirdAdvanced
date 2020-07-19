
cc.Class({
    extends: cc.Component,

    properties: {

        bird: {
            default: null,
            type: cc.Node
        }
    },

    onLoad: function () {
        this.node.on("touchstart", function () {
            //console.log(this.node.name + " was pressed!");
            let bird = this.bird.getComponent("Bird");
            bird.drop.stop();
            bird.jump = bird.setJumpAction();
            bird.node.runAction(bird.jump);

        }, this);
    },

});
