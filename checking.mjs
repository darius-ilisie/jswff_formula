import {Token, Tokens, token_type, token_repr} from "./tokens.mjs"


class CheckSyntax {

    /**
     * 
     * @param {Tokens} token_arr 
     */
    check(token_arr) {
        const len = token_arr.length
        var pos = 0;

        while(pos < len) {
            const token = token_arr.at(pos);
            var p_count = 0;

            if(token.type == token_type.Parantheses && token.value == token_repr.lpar) {
                p_count++;
            } else if(token.type == token_type.Connective) {
                
            }

            pos++;
        }
    }

}