function isInViewport(element) {
    const yPos = element.getBoundingClientRect().y;
    return yPos < window.innerHeight && yPos > -element.offsetHeight;
}


var projects = document.getElementsByName("project");
updateProjectNodes();

$( document ).ready(function() {
   updateProjectNodes();
});

window.addEventListener("scroll", scroll);

function scroll(e) {
    updateProjectNodes();
}

function updateProjectNodes() {
    for (var i = 0; i < projects.length; i++) {
        var ele = projects[i];
        var inview = isInViewport(ele);
                    var even = false;
        if (inview) {
            ele.className = "card slideInLeft";
        } else {
            ele.className = "card left"
        }
    }
}
