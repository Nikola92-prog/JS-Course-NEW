//
// IMPLEMENTING THE MODULE PATTERN
/*
var budgetController = (function(){

    x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();


var UIController = (function() {

    //SOME CODE

})();

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);

*/

/*

//
//SETTING UP THE FIRST EVENT LISTENER

// BUDGET CONTROLLER
var budgetController = (function(){

    //SOME CODE

})();

// UI CONTROLLER
var UIController = (function() {

    //SOME CODE

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works!');
    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if(event.keyCode === 13) {
            ctrlAddItem();
        }

    });


})(budgetController, UIController);

*/

//
// READING INPUT DATA

// BUDGET CONTROLLER
var budgetController = (function(){

    //SOME CODE

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        },

        getDOMstrings: function() {
            return DOMstrings;
        }

    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        //console.log('It works!');
    }


    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if(event.keyCode === 13) {
            ctrlAddItem();
        }

    });


})(budgetController, UIController);