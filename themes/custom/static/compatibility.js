document.querySelectorAll("body > main * > img").forEach(img => {
    if (img.parentElement?.nextElementSibling?.nodeName == "BLOCKQUOTE") {
        img.parentElement.setAttribute("has-blockquote", "")
        img.parentElement.nextElementSibling.setAttribute("after-img", "")
    }
})

document.querySelectorAll("body > main table tr > td > :is(em, i)").forEach(em => {
    em.parentElement.parentElement.setAttribute("has-em", "")
    em.parentElement.parentElement.previousElementSibling?.setAttribute("before-em", "")
})