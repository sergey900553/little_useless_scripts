let elements = document.querySelectorAll(`.video-thumb-info a`);
let output = Array.from(elements).map(i=>{return i.href}).join("<br>");
window.open().document.write(output);
