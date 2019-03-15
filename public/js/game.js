$("#startButton").click(function () {
    $("#startScreen").hide();
    $("#gameContainer").show();
    startGame();
})

function startGame() {
    // Elements
    let myMonkey = document.querySelector("#myMonkey");
    let container = document.querySelector("#gameContainer");
    let banana = document.querySelector("#banana")
    let score = 0;

    // Initial spawn of banana
    spawnBanana();

    container.addEventListener("click", getClickPosition, false);

    // Moves monkey
    function getClickPosition(e) {
        let parentPosition = getPosition(e.currentTarget);
        let xPosition = e.clientX - parentPosition.x - (myMonkey.clientWidth / 2);
        let yPosition = e.clientY - parentPosition.y - (myMonkey.clientHeight / 2);

        myMonkey.style.left = xPosition + "px";
        myMonkey.style.top = yPosition + "px";

        const rect1 = myMonkey.getBoundingClientRect();
        const rect2 = banana.getBoundingClientRect();

        var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);


        if (overlap === true) {
            updateScore();
            spawnBanana();
        }
    }

    function updateScore() {
        score++;
        $("#score").text(score);


    }

    // Spawn Banana
    function spawnBanana() {
        let stageWidth = 642;
        let stageHeight = 400;
        let monkeyWidth = 120;
        let monkeyHeight = 100;


        // Generate a random x position.
        let randomXPosition = Math.floor(Math.random() * (stageWidth - monkeyWidth)) + 1;

        // Generate a random y position.
        let randomYPosition = Math.floor(Math.random() * (stageHeight - monkeyHeight)) + 1;

        //Create a new Enemy instance and use above coordinates to place it in a random spot.
        //Fill the rest of this object like you did with let bullet = {...}.

        let bananaXPosition = randomXPosition;
        let bananaYPosition = randomYPosition;


        // Push your new enemy in the enemies array so you can render them all at once in the draw loop.
        banana.style.left = bananaXPosition + "px";
        banana.style.top = bananaYPosition + "px";

    }

    // Helper function to get an element's exact position
    function getPosition(el) {
        let xPos = 0;
        let yPos = 0;

        while (el) {
            if (el.tagName == "BODY") {
                // deal with browser quirks with body/window/document and page scroll
                let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                let yScroll = el.scrollTop || document.documentElement.scrollTop;

                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                // for all other non-BODY elements
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPos,
            y: yPos
        };
    }
}