import {Token, Tokens, token_type, token_repr} from "./tokens.mjs"

export class Lexer {
  static decodeTeX(inp) {
    return new Promise((res, rej) => {
      //Split at space
      var parsed_inp = inp.split(" ");

      //Remove empty elements if any
      var temp = [];
      parsed_inp.forEach(e => {
        if (e !== '') temp.push(e);
      })
      parsed_inp = temp;

      var tokens = new Tokens;
      parsed_inp.forEach((e, id) => {
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
            tokens.push(new Token(token_type.Parantheses, token_repr.lpar));
            break;
          case ")":
            tokens.push(new Token(token_type.Parantheses, token_repr.rpar));
            break;
          default:
            if (e.length === 1 && (e.charCodeAt(0) >= 65 && e.charCodeAt(0) <= 90)) {
              tokens.push(new Token(token_type.Variables, e));
            } else {
              rej(`[-] Invalid char: ${e} at ${id}`);
            }
        }
      })

      res(tokens);
    })
  }
}

/*(async () => {
  console.log((await Lexer.decodeTeX("( A \\iff B )")).toString());
})();*/