document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById('calculateBtn');
    calculateButton.addEventListener('click', calculatePlates);
    
    const resetButton = document.getElementById('resetBtn');
    resetButton.addEventListener('click', reset);

    function reset() {
        document.getElementsByClassName('userInput')[0].value = '';
        document.getElementById('fortyFive').textContent = '';
        document.getElementById('thirtyFive').textContent = '';
        document.getElementById('twentyFive').textContent = '';
        document.getElementById('ten').textContent = '';
        document.getElementById('five').textContent = '';
        document.getElementById('twoAndAHalf').textContent = '';
        document.getElementById('result').textContent = ''; 
    }

        
    
    function calculatePlates() {
       
        let userInput = document.getElementsByClassName('userInput')[0].value; 
        let numberToCalculate = parseFloat(userInput); 
        let sixtyPercent = numberToCalculate *.6;
        let eightyPercet = numberToCalculate *.8;

      
        if (isNaN(numberToCalculate)) {
            document.getElementById('result').textContent = "Please enter a valid number.";
            return;
        }

        let fortyFive = 0;
        let thirtyFive = 0;
        let twentyFive = 0;
        let ten = 0;
        let five = 0;
        let twoAndAHalf = 0;

        if (numberToCalculate >= 45) {
            let weight = (numberToCalculate - 45) / 2; 

            fortyFive = Math.floor(weight / 45);
            weight = weight % 45;

            thirtyFive = Math.floor(weight / 35);
            weight = weight % 35;

            twentyFive = Math.floor(weight / 25);
            weight = weight % 25;

            ten = Math.floor(weight / 10);
            weight = weight % 10;

            five = Math.floor(weight / 5);
            weight = weight % 5;

            twoAndAHalf = Math.floor(weight / 2.5);
            weight = weight % 2.5;

            let weightArry = [fortyFive,thirtyFive,twentyFive,ten,five,twoAndAHalf];


            // Display results
            document.getElementById('fortyFive').textContent = fortyFive;
            document.getElementById('thirtyFive').textContent = thirtyFive;
            document.getElementById('twentyFive').textContent = twentyFive;
            document.getElementById('ten').textContent = ten;
            document.getElementById('five').textContent = five;
            document.getElementById('twoAndAHalf').textContent = twoAndAHalf;

            document.getElementById('result').textContent = ""; 
        } else {
            document.getElementById('result').textContent = "Try the bar!"; 
        }
        

        



    }

    
});
