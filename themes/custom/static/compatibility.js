document.querySelectorAll("body > main * > img").forEach(img => {
    if (img.parentElement?.nextElementSibling?.nodeName == "BLOCKQUOTE") {
        img.parentElement.setAttribute("before-blockquote-has-img", "")
    }
})

document.querySelectorAll("body > main table tr > td > :is(em, i)").forEach(em => {
    em.parentElement.parentElement.setAttribute("has-em", "")
    em.parentElement.parentElement.previousElementSibling?.setAttribute("before-has-em", "")
})

document.querySelectorAll("body > main table tr > th:empty").forEach(th => {
    th.parentElement.setAttribute("has-empty-th", "")
})