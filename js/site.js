// get the sart and end numbers from the page
function getValues() {
    //get the fizz number
    let fizzNumber = document.getElementById('fizzValue').value;  // "0"

    // get the buzz number
    let buzzNumber = document.getElementById('buzzValue').value; // "0"

    // get the end number
    let endNumber = document.getElementById('endValue').value; // "100"


    // turn the values into actual numbers

    fizzNumber = parseInt(fizzNumber); // 0
    buzzNumber = parseInt(buzzNumber); //0
    endNumber = parseInt(endNumber);  // 100


    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber) && Number.isInteger(endNumber)) {
        // generate teh range of numbers
        let generatedNumbers = generateValues(endNumber);

        displayValues(fizzNumber, buzzNumber, generatedNumbers);

    } else {
        // Uh oh! Something is wrong!  
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid numbers and ensure your start number is less than your end number'
        });
    }



}

//generate a list of all numbers between the start and end
function generateValues(end) {
    // create a variable that can hold a bunch of numbers
    let numbers = [];

    // put a number into that variable 
    // add one to that number, then add that to the variable.
    // keep adding one and putting it inot the variable until we get to the end number
    for (let n = 1; n <= end; n = n + 1) {

        numbers.push(n);
    }

    //somhow tell displayvalues to show those numbers???

    return numbers;

}

// display each of those numbers on the page
function displayValues(fizz, buzz, numbers) {

    let html = '';
    let className = '';


    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index = index += 1) {

        let currentNumber = numbers[index];

        if (currentNumber % fizz == 0 && currentNumber % buzz == 0) {

            html += `<tr><td> ${currentNumber} FizzBuzz ! </td> </tr>`

        } else if (currentNumber % fizz == 0) {
            html += `<tr><td> ${currentNumber}Fizz </td></tr>`;
        }
        else if (currentNumber % buzz == 0) {
            html += `<tr><td> ${currentNumber}Buzz</td></tr>`;
        } else (html += `<tr><td >${currentNumber}</td></tr>`);



        // if (currentNumber % 3 == 0) {
        //     html += `<tr><td> ${currentNumber} fizz </td></tr>`;
        // } else if (currentNumber % 5 == 0) {
        //     html += `<tr><td> ${currentNumber}buzz </td></tr>`;
        // } else if (currentNumber % 5 == 0 && currentNumber % 3 == 0){
        //     html += `<tr><td> ${currentNumber}FizzBuzz! </td></tr>`;
        // }
        //  html += `<tr><td class="${className}">${currentNumber}</td></tr>`;
        // html += `<tr><td >${currentNumber}</td></tr>`;

    }



    let tbody = document.getElementById('results');

    tbody.innerHTML = html;
    // tbody.innerHTML = 'Hi Tom';


    /*
        NOTES:
        -make the even numbers bold
    */

}
