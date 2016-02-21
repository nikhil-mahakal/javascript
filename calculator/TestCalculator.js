var Calculator = (function () {

    var result = "";

    var append = function (input, InputField) {

        result += input;
        displayResult(InputField);
    };

    var clear = function (InputField) {
        result = "";
        displayResult(InputField);
    }

    var evaluate = function (InputField) {

        result = eval(result);
        displayResult(InputField);
    }

    var displayResult = function (InputField) {

        document.getElementById(InputField).value = result;
    }

    return {

        append: append,
        clear: clear,
        evaluate: evaluate
    }

})();