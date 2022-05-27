function mixCases(text) {
    let output = '';

    for (let i = 0; i < text.length; i++) {
        let generateOneOrZero = Math.floor(Math.random() * 2);

        if (i == 0) {
            output = output + text[i].toUpperCase();
            continue;
        }
        if (generateOneOrZero == 0) {
            output = output + text[i].toUpperCase();
        }
        else if (generateOneOrZero == 1) {
            output = output + text[i].toLowerCase();
        }
    }
    return output;
}

console.log(mixCases(``));
