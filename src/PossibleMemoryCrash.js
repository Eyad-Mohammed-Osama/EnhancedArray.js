class PossibleMemoryCrash extends Error {
    constructor(...parameters) {
        super(...parameters);
        this.name = "PossibleMemoryCrash";
        this.message = parameters[0];
        this.stack = (new Error()).stack;
    }
}

module.exports = PossibleMemoryCrash;