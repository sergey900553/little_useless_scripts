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
uniqueLinks.forEach(e=>{newRedditStyle.push(e)});



// console.log(newRedditStyle);


newRedditStyle.forEach(function(item, i) {
    setTimeout(function() {
      window.open(item, '_blank');
    }, i * 2000);
  });
