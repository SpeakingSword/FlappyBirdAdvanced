
let gameSetting = {
    difficulty: 0,

    setDifficulty: function (level) {
        if (typeof level === "number") {
            this.difficulty = level;
        }
        else {
            console.error("Can not set difficulty, cause the level is not a number!");
        }
    },

    getDifficulty: function () {
        return this.difficulty;
    }
}

module.exports = gameSetting;