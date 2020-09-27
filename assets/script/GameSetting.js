
let gameSetting = {
    difficulty: 1,
    difficultyType: {
        easy: 1,
        medium: 2,
        hard: 3,
    },

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