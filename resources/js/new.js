function part1(ypos) {

    var minScroll=0;
    var maxScroll=2800;

    var startScroll=0;
    var endScroll=599;
    
    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement1.style.top=getMovementValue(ypos, startScroll, endScroll, 50, 31)+"%";
        scrollElement1.classList.add("jsedited");

        scrollElement2.style.top=getMovementValue(ypos,startScroll,endScroll,55,50)+"%";
        scrollElement2.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement1.style.top="50%";
        scrollElement1.classList.add("jsedited");

        scrollElement2.style.top="55%";
        scrollElement2.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement1.style.top="31%";
        scrollElement1.classList.add("jsedited");

        scrollElement2.style.top="50%";
        scrollElement2.classList.add("jsedited");
    }

    var startScroll=800;
    var endScroll=1399;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement3.style.top=getMovementValue(ypos, startScroll, endScroll, 105, 60)+"%";
        scrollElement3.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement3.style.top="105%";
        scrollElement3.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement3.style.top="60%";
        scrollElement3.classList.add("jsedited");
    }

    var startScroll=1400;
    var endScroll=1999;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement1.style.top=getMovementValue(ypos, startScroll, endScroll, 31, -18)+"%";
        scrollElement1.classList.add("jsedited");
        
        scrollElement3.style.top=getMovementValue(ypos, startScroll, endScroll, 60, 12)+"%";
        scrollElement3.classList.add("jsedited");
    } else if (ypos < startScroll && ypos > 1399) {
        scrollElement1.style.top="31%";
        scrollElement1.classList.add("jsedited");
        
        scrollElement3.style.top="60%";
        scrollElement3.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement1.style.top="-18%";
        scrollElement1.classList.add("jsedited");
        
        scrollElement3.style.top="12%";
        scrollElement3.classList.add("jsedited");
    }
    
    var startScroll=800;
    var endScroll=1999;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement4.style.right=getMovementValue(ypos, startScroll, endScroll, 4, 0)+"%";
        scrollElement4.classList.add("jsedited");
        
        scrollElement6.style.left=getMovementValue(ypos, startScroll, endScroll, 4, 0)+"%";
        scrollElement6.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement4.style.right="4%";
        scrollElement4.classList.add("jsedited");
        
        scrollElement6.style.left="4%";
        scrollElement6.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement4.style.right="0";
        scrollElement4.classList.add("jsedited");
        
        scrollElement6.style.left="0";
        scrollElement6.classList.add("jsedited");
    }

    var startScroll=2300;
    var endScroll=2599;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement4.style.height=getMovementValue(ypos, startScroll, endScroll, 550, 0)+"px";
        scrollElement4.classList.add("jsedited");

        scrollElement5.style.height=getMovementValue(ypos, startScroll, endScroll, 550, 0)+"px";
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.height=getMovementValue(ypos, startScroll, endScroll, 550, 0)+"px";
        scrollElement6.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement4.style.height="550px";
        scrollElement4.classList.add("jsedited");
        
        scrollElement5.style.height="550px";
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.height="550px";
        scrollElement6.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement4.style.height="0px";
        scrollElement4.classList.add("jsedited");
        
        scrollElement5.style.height="0px";
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.height="0px";
        scrollElement6.classList.add("jsedited");
    }

    var startScroll=2600;
    var endScroll=2799;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement4.style.opacity=getMovementValue(ypos, startScroll, endScroll, 1, 0);
        scrollElement4.classList.add("jsedited");
        
        scrollElement5.style.opacity=getMovementValue(ypos, startScroll, endScroll, 1, 0);
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.opacity=getMovementValue(ypos, startScroll, endScroll, 1, 0);
        scrollElement6.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement4.style.opacity="1";
        scrollElement4.classList.add("jsedited");
        
        scrollElement5.style.opacity="1";
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.opacity="1";
        scrollElement6.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement4.style.opacity="0";
        scrollElement4.classList.add("jsedited");
        
        scrollElement5.style.opacity="0";
        scrollElement5.classList.add("jsedited");
        
        scrollElement6.style.opacity="0";
        scrollElement6.classList.add("jsedited");
    }

}

function part2(ypos) {

    var minScroll=2000;
    var maxScroll=4400;

    var startScroll=2000;
    var endScroll=2599;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement7.style.top=getMovementValue(ypos, startScroll, endScroll, 124, 35)+"%";
        scrollElement7.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement7.style.top="124%";
        scrollElement7.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement7.style.top="35%";
        scrollElement7.classList.add("jsedited");
    }
    
    var startScroll=3000;
    var endScroll=3799;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement7.style.transform="translateY(-50%) scale("+getMovementValue(ypos, startScroll, endScroll, 1, 0)+")";
        scrollElement7.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement7.style.transform="translateY(-50%) scale(1)";
        scrollElement7.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement7.style.transform="translateY(-50%) scale(0)";
        scrollElement7.classList.add("jsedited");
    }

    var startScroll=3200;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement8.style.opacity=getMovementValue(ypos, startScroll, endScroll, 0, 1);
        scrollElement8.style.transform="translateX(-50%) scale("+getMovementValue(ypos, startScroll, endScroll, 4, 1)+")";
        scrollElement8.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement8.style.opacity="0";
        scrollElement8.style.transform="translateX(-50%) scale(4)";
        scrollElement8.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement8.style.opacity="1";
        scrollElement8.style.transform="translateX(-50%) scale(1)";
        scrollElement8.classList.add("jsedited");
    }

    var startScroll=3800;
    var endScroll=4399;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement9.style.top=getMovementValue(ypos, startScroll, endScroll, 100, 48)+"%";
        scrollElement9.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement9.style.top="100%";
        scrollElement9.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement9.style.top="48%";
        scrollElement9.classList.add("jsedited");
    }

    var startScroll=3940;
    var endScroll=4399;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement10.style.transform="translateY("+getMovementValue(ypos, startScroll, endScroll, 50, 0)+"%)";
        scrollElement10.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement10.style.transform="translateY(50%)";
        scrollElement10.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement10.style.transform="translateY(0)";
        scrollElement10.classList.add("jsedited");
    }
}

function part3(ypos) {
    var startScroll=4500;
    var endScroll=4999;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement11.style.transform="translateY("+getMovementValue(ypos, startScroll, endScroll, 50, 0)+"%)";
        scrollElement11.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement11.style.transform="translateY(50%)";
        scrollElement11.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement11.style.transform="translateY(0)";
        scrollElement11.classList.add("jsedited");
    }

    var startScroll=5500;
    var endScroll=6099;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement12.style.transform="translateY("+getMovementValue(ypos, startScroll, endScroll, 0, -75)+"%)";
        scrollElement12.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement12.style.transform="translateY(0)";
        scrollElement12.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement12.style.transform="translateY(-75%)";
        scrollElement12.classList.add("jsedited");
    }

    var startScroll=5700;
    var endScroll=6299;

    if (ypos >= startScroll && ypos <= endScroll) {
        scrollElement13.style.opacity=getMovementValue(ypos, startScroll, endScroll, 0, 1);
        scrollElement13.style.transform="translateX(-50%) scale("+getMovementValue(ypos, startScroll, endScroll, 4, 1)+")";
        scrollElement13.classList.add("jsedited");
    } else if (ypos < startScroll) {
        scrollElement13.style.opacity="0";
        scrollElement13.style.transform="translateX(-50%) scale(4)";
        scrollElement13.classList.add("jsedited");
    } else if (ypos > endScroll) {
        scrollElement13.style.opacity="1";
        scrollElement13.style.transform="translateX(-50%) scale(1)";
        scrollElement13.classList.add("jsedited");
    }
}

document.body.addEventListener("scroll", function(ev) {

    var scrollElement1 = document.getElementById("scrollElement1")
    var scrollElement2 = document.getElementById("scrollElement2")
    var scrollElement3 = document.getElementById("scrollElement3")
    var scrollElement4 = document.getElementById("scrollElement4")
    var scrollElement5 = document.getElementById("scrollElement5")
    var scrollElement6 = document.getElementById("scrollElement6")
    var scrollElement7 = document.getElementById("scrollElement7")
    var scrollElement8 = document.getElementById("scrollElement8")
    var scrollElement9 = document.getElementById("scrollElement9")
    var scrollElement10 = document.getElementById("scrollElement10")
    var scrollElement11 = document.getElementById("scrollElement11")

    var ypos = getYPositionTotal();
    console.log(ypos);

    if (ypos >= 0 && ypos <= 3800) {
        part1(ypos)
    }
    if (ypos >= 2000 && ypos <= 5800) {
        part2(ypos)
    }
    if (ypos >= 4500) {
        part3(ypos)
    }

});

function showNoScrollFrame() {
    document.getElementById("redirectFrame").style.display="initial"
    document.getElementById("redirectToggle1").style.display="none"
    document.getElementById("redirectToggle2").style.display="flex"
}

function hideNoScrollFrame() {
    document.getElementById("redirectFrame").style.display="none"
    document.getElementById("redirectToggle1").style.display="flex"
    document.getElementById("redirectToggle2").style.display="none"
}