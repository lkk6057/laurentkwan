function isInViewport(element) {
    const yPos = element.getBoundingClientRect().y;
    return yPos < window.innerHeight && yPos > -element.offsetHeight;
}


var projects = document.getElementsByName("project");

$(document).ready(function () {
    window.addEventListener("scroll", updateProjectNodes);
    updateProjectNodes();
});


function updateProjectNodes() {
    for (var i = 0; i < projects.length; i++) {
        var ele = projects[i];
        var inview = isInViewport(ele);
        if (inview) {
            ele.className = "card slideInLeft";
        } else {
            ele.className = "card left"
        }
    }
}
