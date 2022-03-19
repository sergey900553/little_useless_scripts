console.log("Роскомнадзор начал запрещать слово война и буквы")
let text = "Роскомнадзор запретил букву";
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
for (let i in alphabet) {
    let letter = alphabet[i];
    let re = new RegExp(letter,`ig`);
    if (text.search(re)!== -1){
        console.log(text.replace(re,"")+" - "+letter.toLocaleUpperCase());
    }
     text=text.replace(re,"").trim();
}