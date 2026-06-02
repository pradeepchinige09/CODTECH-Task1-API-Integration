let allUsers = [];

async function getUsers() {

    document.getElementById("result").innerHTML =
        '<h2 class="loading">Loading Employees...</h2>';

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        allUsers = await response.json();

        displayUsers(allUsers);

    }
    catch(error){

        document.getElementById("result").innerHTML =
            '<h2 class="loading">Failed to load data</h2>';

        console.log(error);
    }
}

function displayUsers(users){

    document.getElementById("userCount").innerText =
        `${users.length} Employee(s) Found`;

    let output = "";

    users.forEach(user => {

        output += `
        <div class="card">

            <h3>${user.name}</h3>

            <p><strong>Username:</strong> ${user.username}</p>

            <p><strong>Email:</strong> ${user.email}</p>

            <p><strong>Phone:</strong> ${user.phone}</p>

            <p><strong>Website:</strong> ${user.website}</p>

            <p><strong>Company:</strong> ${user.company.name}</p>

            <p><strong>City:</strong> ${user.address.city}</p>

        </div>
        `;
    });

    document.getElementById("result").innerHTML = output;
}

function searchUsers(){

    const searchText =
        document.getElementById("search")
        .value
        .toLowerCase();

    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchText)
    );

    displayUsers(filteredUsers);
}