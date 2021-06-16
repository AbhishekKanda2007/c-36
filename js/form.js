class Form {
    constructor() {

    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130, 0);


        var greeting = createElement('h3');


        var input = createInput("name");
        input.position(130, 160);

        var button = createButton("play");
        button.position(250, 200);

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();
            greeting.html("hello " + name);
            greeting.position(130, 160);


        });



    }
}