
/*
//every few seconds, add a new freelancer
//each new freelancer is $20 more expensive
//each freelancer increases the average starting price $10


//Define initial array of rfreelancers 
//Create a function to display the freelancers info on the page
let freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 43, occupation: "Programmer" },
];

//Create a function to generate new freelancers
const allFreelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 43, occupation: "Programmer" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];


//Create a function to calculate the average starting price of the freelancers array
//Update the function so the message updates the pricing  

*/


  // Initial array of freelancers
let freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" }
];

// Function to render the freelancers table
function renderFreelancers() {
    const table = document.getElementById('freelancerTable');
    table.innerHTML = ''; // Clear table before rendering
    
    freelancers.forEach(freelancer => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
        table.appendChild(row);
    });
}

// Function to calculate the average price
function calculateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const avg = (total / freelancers.length).toFixed(2);
    document.getElementById('avgPrice').innerText = `$${avg}`;
}

// Function to add a new freelancer and update the table and average price
function addFreelancer(name, price, occupation) {
    freelancers.push({ name, price, occupation });
    renderFreelancers();           
    calculateAveragePrice();
}

// Render initial data
renderFreelancers();           
calculateAveragePrice();

// Add Carol after 3 seconds
setTimeout(() => {
    addFreelancer('Carol', 70, 'Programmer');
}, 3000);

// Example of adding new freelancers every few seconds
setInterval(() => {
    const names = ["Dr. Slice", "Prof. Possibility", "Dr. Pressure"];
    const occupations = ["Gardener", "Teacher", "Programmer"];
    const newFreelancer = {
        name: names[Math.floor(Math.random() * names.length)],
        price: Math.floor(Math.random() * 100) + 20, // Random price between $20 and $120
        occupation: occupations[Math.floor(Math.random() * occupations.length)]
    };
    addFreelancer(newFreelancer.name, newFreelancer.price, newFreelancer.occupation);
}, 5000);
