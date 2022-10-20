export const token_type = {
    Connective: "CONN",
    Parantheses: "PAR",
    Variables: "VAR"
};

export const token_repr = {
    neg: "¬",
    wedge: "∧",
    vee: "∨",
    implies: "⇒",
    iff: "⇔",

    lpar: "(",
    rpar: ")"
};

export class Token {
    constructor(_type, _value = undefined) {
        this.type = _type;
        this.value = _value;
    }

    toString() {
        return (this.value !== undefined) ? (`${this.type}: ${this.value}`) : this.type;
    }
}

export class Tokens {
    constructor() {
        this._tokens = [];
        this.length = 0;
    }

    push(...items) {
        this._tokens.push(items);
        this.length += items.length;
         
    }

    toString() {
        return `[${this._tokens.toString()}]`
    }

    /**
     * 
     * @param {Number} index 
     * @returns {Token}
     */
    at(index) {
        return this._tokens[index];
    }
}