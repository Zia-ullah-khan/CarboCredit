use('CarboCredit'); // Assuming 'CarboCredit' is the name of your MongoDB database

// Get all users from the database
let users = db.getCollection('userids').find(); // Replace 'users' with the actual collection name

// Iterate over the users and print each user to the output window
users.forEach(user => {
    console.log(user);
});
