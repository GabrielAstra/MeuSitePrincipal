const menuLinks = document.querySelectorAll('.flex a[href^⁼"#"]');

function getDistanceFromTheTOp(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTOp){
    window.scroll({
        top: getDistanceFromTheTOp,
        behavior: "smooth",
    });
}
function scrollToSection(event){
    event.preventDefault();
    const getDistanceFromTheTOp = getDistanceFromTheTOp(event.target) - 90;

    nativeScroll(getDistanceFromTheTOp);

}

menuLinks.forEach((link)=> {
    link.addEventListener("click", scrollToSection)
});