const init = function () {
    let main = document.createElement("div");
    main.id = 'btns';
    main.className = "buttonContainer";
    document.body.appendChild(main);
    let counter = 1;
    let arr = [1, 2, 3, 6, 9, 8, 7, 4];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let clickMeButton = document.createElement('button');
            clickMeButton.id = `btn${counter}`;
            clickMeButton.className = 'buttonClass';
            clickMeButton.innerHTML = counter;
            if (counter === 5) {
                clickMeButton.addEventListener("click", () => {
                    arr.unshift(arr.pop());
                    for (let b = 1; b < arr.length; b++) {
                        if (b !== 5) {
                            document.getElementById(`btn${b}`).innerHTML = arr[b - 1];
                        }
                    }
                });
            }
            main.appendChild(clickMeButton);
            ++counter;
        }
        linebreak = document.createElement("br");
        main.appendChild(linebreak);
    }
};
init();
© 2019 GitHub, Inc.
