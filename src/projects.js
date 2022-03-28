function isInViewport(element) {
    const yPos = element.getBoundingClientRect().y;
    return yPos<window.innerHeight;
}

var projects = document.getElementsByName("project");
window.addEventListener("scroll",scroll);
function scroll(e){
    for(var i = 0;i<projects.length;i++){
        var ele = projects[i];
        var inview = isInViewport(ele);
        if(inview){
           ele.className = "card left slideInLeft";
           }
        else{
          ele.className = "card left";  
        }
    }
}