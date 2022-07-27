function urlSiteCrop(url) {
    let output = url.replace("old.", "");
    return output;
};

let allLinks = [];
document.querySelectorAll(`.thing .author`).forEach(e=>{allLinks.push(e.href)});

let uniqueLinks = [];
allLinks.forEach((element) => {
    if (!uniqueLinks.includes(element)) {
        uniqueLinks.push(element);
    }
});

let newRedditStyle = [];
uniqueLinks.forEach(e=>{newRedditStyle.push(urlSiteCrop(e))})

console.log(newRedditStyle);
