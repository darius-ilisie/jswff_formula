const CONN_SYM = [];

// \implies \iff \wedge \vee
const token_type = {
  Connective: "CONN",
  Parantheses: "PAR",
  Variables: "VAR"
};

const token_repr = {
  neg: "¬",
  wedge: "∧",
  vee: "∨",
  implies: "⇒",
  iff: "⇔",
};

class Token {
  constructor(_type, _value = undefined) {
    this.type = _type;
    this.value = _value;
  }

  toString() {
    return (this.value !== undefined) ? (" " + this.type + ": " + this.value) : this.type;
  }
}

class Lexer {
  static decodeTeX(inp) {
    //Split at space
    var parsed_inp = inp.split(" ");

    //Remove empty elements if any
    var temp = [];
    parsed_inp.forEach(e => {
      if (e !== '') temp.push(e);
    })
    parsed_inp = temp;

    var tokens = [];
    parsed_inp.forEach(e => {
      switch (e) {
        case "\\neg":
          tokens.push(new Token(token_type.Connective, token_repr.neg));
          break;
        case "\\wedge":
          tokens.push(new Token(token_type.Connective, token_repr.wedge));
          break;
        case "\\vee":
          tokens.push(new Token(token_type.Connective, token_repr.vee));
          break;
        case "\\implies":
          tokens.push(new Token(token_type.Connective, token_repr.implies));
          break;
        case "\\iff":
          tokens.push(new Token(token_type.Connective, token_repr.iff));
          break;

        case "(":
          tokens.push(new Token(token_type.Parantheses, "("));
          break;
        case ")":
          tokens.push(new Token(token_type.Parantheses, ")"));
          break;
        default:
          if (e.length === 1 && (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90)) {
            tokens.push(new Token(token_type.Variables, e));
          } else {
            console.error("[-] Unknow Token " + e);
          }
      }
    })

    console.log("["+String(tokens)+" ]");
  }
}


Lexer.decodeTeX("( A \\iff B )")