/*
let links = document.querySelectorAll('.pcVideoListItem.js-pop.videoblock.videoBox.canEdit .usernameWrap a');
let arrayoflinks = [];
for(var i = 0; i< links.length; i++){
  arrayoflinks.push(links[i].href)
}

console.log(arrayoflinks);
*/





function sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


let links = document.querySelectorAll(".index-container a");
for (let i = 0; i < links.length; i++) {

     window.open(links[i], '_blank');
     sleep(100);
}





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
