document.addEventListener("DOMContentLoaded", function() {
    const flexContainer = document.getElementById("flexContainer");

    document.getElementById("resetFlexbox").addEventListener("click", function() {
        flexContainer.style.flexDirection = "row";
        flexContainer.style.justifyContent = "flex-start";
        flexContainer.style.alignItems = "stretch";
        flexContainer.style.gap = "0";
        document.getElementById("box1").style.flexGrow = "0";
        document.getElementById("box2").style.flexGrow = "0";
        document.getElementById("box3").style.flexGrow = "0";
    });

    document.getElementById("gap").addEventListener("input", function() {
        flexContainer.style.gap = this.value + "px";
    });

    document.getElementById("flexRow").addEventListener("click", function() {
        flexContainer.style.flexDirection = "row";
    });

    document.getElementById("flexColumn").addEventListener("click", function() {
        flexContainer.style.flexDirection = "column";
    });

    document.getElementById("justifyStart").addEventListener("click", function() {
        flexContainer.style.justifyContent = "flex-start";
    });

    document.getElementById("justifyCenter").addEventListener("click", function() {
        flexContainer.style.justifyContent = "center";
    });

    document.getElementById("justifyEnd").addEventListener("click", function() {
        flexContainer.style.justifyContent = "flex-end";
    });

    document.getElementById("justifySpaceBetween").addEventListener("click", function() {
        flexContainer.style.justifyContent = "space-between";
    });

    document.getElementById("justifySpaceAround").addEventListener("click", function() {
        flexContainer.style.justifyContent = "space-around";
    });

    document.getElementById("justifySpaceEvenly").addEventListener("click", function() {
        flexContainer.style.justifyContent = "space-evenly";
    });

    document.getElementById("alignStart").addEventListener("click", function() {
        flexContainer.style.alignItems = "flex-start";
    });

    document.getElementById("alignCenter").addEventListener("click", function() {
        flexContainer.style.alignItems = "center";
    });

    document.getElementById("alignEnd").addEventListener("click", function() {
        flexContainer.style.alignItems = "flex-end";
    });

    document.getElementById("growReset").addEventListener("click", function() {
        document.getElementById("box1").style.flexGrow = "0";
        document.getElementById("box2").style.flexGrow = "0";
        document.getElementById("box3").style.flexGrow = "0";
    });

    document.getElementById("growAll").addEventListener("click", function() {
        document.getElementById("box1").style.flexGrow = "1";
        document.getElementById("box2").style.flexGrow = "1";
        document.getElementById("box3").style.flexGrow = "1";
    });

    document.getElementById("box1Grow").addEventListener("click", function() {
        const growValue = document.getElementById("box1Input").value;
        document.getElementById("box1").style.flexGrow = growValue;
    });

    document.getElementById("box2Grow").addEventListener("click", function() {
        const growValue = document.getElementById("box2Input").value;
        document.getElementById("box2").style.flexGrow = growValue;
    });

    document.getElementById("box3Grow").addEventListener("click", function() {
        const growValue = document.getElementById("box3Input").value;
        document.getElementById("box3").style.flexGrow = growValue;
    });

    document.getElementById("addBox").addEventListener("click", function() {
        const newBox = document.createElement("div");
        newBox.className = "box";
        newBox.textContent = flexContainer.children.length + 1;
        flexContainer.appendChild(newBox);
    });
});
