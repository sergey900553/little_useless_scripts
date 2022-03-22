/* проще
let elements = document.querySelectorAll(`.video-thumb-info a`);
let output = Array.from(elements).map(i=>{return i.href}).join("<br>");
window.open().document.write(output);
*/


function urlSiteCrop(url) {
    let output = url.replace(/^/, `"`).replace(/$/, `",`);
    return output;
};

let elements = document.querySelectorAll(`.video-thumb-info a`);
let output = Array.from(elements).map(i => { return i.href });

let govno = [];
for (let i = 0; i < output.length; i++) {
    govno[i] = urlSiteCrop(output[i]) + "" + ("<br>");
}

window.open().document.write(govno.join(""));
