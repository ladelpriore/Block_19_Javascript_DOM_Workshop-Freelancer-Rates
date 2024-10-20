
// Create an array for the initial freelancers 
let freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    {name: "Carol", price: 70, occupation: "Programmer"}
];



// Create a function to update the table. Find the table body by its ID to add new entries.
function createFreelancers() {           //The function will update the table on the webpage to show a list of freelancers.
    const table = document.getElementById('freelancerTable');            //Create a variable for the table, and retrieve the html element of the freelance table so we can manipulate it and store the result of this retrieval in the tableBody variable for use later
    table.innerHTML = freelancers.map(freelancer =>  // Use map method to change each element of the freelancer array into a row
        `<tr>
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
        </tr>`
    ).join('');  // Join the array of rows into a single string and set as innerHTML
}

// Function to add a new freelancer and update the table and average price
function newFreelancerAddition(name, price, occupation) {         //Create a second function, this time to add each new freelancer to the table with name, price, and occupation
    freelancers.push({ name, price, occupation });      //Use push method so that each new freelancer is pushed to the end of the array table
    createFreelancers();
}
    createFreelancers();               // Initialize the function for renderFreelancers so that the DOM table is access and update with a row for each free lancer added



// Add each freelancers in 3 second intervals. It's not the best way to do this, but I repeat this formula for each freelancer.... 
setTimeout(() => {
    newFreelancerAddition('Prof Goose', 72, 'Driver');
}, 3000);

setTimeout(() => {
    newFreelancerAddition('Dr. Slice', 25, 'gardener');
}, 6000);

setTimeout(() => {
    newFreelancerAddition('Dr. Pressure', 51, 'programmer');
}, 9000);

setTimeout(() => {
    newFreelancerAddition('Prof Possibility', 43, 'teacher');
}, 12000);
