window.JestTest = window.JestTest || {};

JestTest.Helpers = (function () {

    function add(num1, num2) {
        return num1 + num2;
    }

    function divide(num1, num2) {
        return _secretDivide(num1, num2);
    }

    function _secretDivide(num1, num2) {
        return num1 / num2;
    }

    return {
        add: add,
        divide: divide
    }

}());