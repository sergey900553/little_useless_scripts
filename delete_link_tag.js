
    let listDeletes = [
      "https://ru.wikipedia.org/wiki/%D0%AD%D0%BC%D0%BF%D0%B8%D1%80%D0%B8%D0%B7%D0%BC",
      "",
      "",
  ];

  


const links = document.querySelectorAll('a[href="/wiki/Память"]')
links.forEach(link => {
    const el = document.createElement('span')
    el.textContent = link.textContent
    link.parentNode.replaceChild(el, link)
})
