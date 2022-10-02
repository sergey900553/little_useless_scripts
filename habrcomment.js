let comments = document.querySelectorAll("span[data-test-id='votes-meter-value']")
let commentWithPlus = [];




comments.forEach(e => {
    if (String(e.innerHTML).replace(/\D/g, '') < 1)
        commentWithPlus.push(e)
})

commentWithPlus.forEach(e => {
  //  console.log(e)
    console.log(e.closest(".tm-comment-thread__comment"));
   e.closest(".tm-comment-thread__comment").remove();
})
