# microfinance-react-app
website is built using React and React Router for client-side routing. It's organized into different components and routes for modularity and easy maintenance. The components in the "Components" folder are used to create a consistent and reusable UI, while the "Routes" folder houses the main content of each page.

It also has a simple backend for receiving data from a contact form by setting up a server, defining routes, and handling POST requests using Node.js and Express.js.
![contact form](https://github.com/jimmyurl/microfinance-react-app/assets/33938444/8d929125-90cd-4cb7-8d68-c943debf84e0)




Here are the steps to create a simple backend to receive the form data:

1. **Initialize a Node.js Project:**

   If you don't have a Node.js project already, you can create one by running:

   ```bash
   mkdir contact-form-backend
   cd contact-form-backend
   npm init -y
   ```

2. **Install Required Dependencies:**

   You'll need Express.js to create the server and handle routes. Install it using:

   ```bash
   npm install express
   ```

3. **Create Your Express.js Server:**

   Create an `index.js` file in your project directory and set up your Express server:

   ```javascript
   const express = require("express");
   const bodyParser = require("body-parser");

   const app = express();
   const port = 3000; // You can use any port you prefer

   // Parse JSON and form data
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: false }));

   // Create a route to handle form submissions
   app.post("/submit-form", (req, res) => {
     const formData = req.body; // This will contain the form data
     console.log(formData); // You can process or store the data as needed
     res.json({ message: "Form data received successfully!" });
   });

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

4. **Start Your Server:**

   You can start your Node.js server by running:

   ```bash
   node index.js
   ```

   Your server will be accessible at `http://localhost:3000` (or your chosen port).

5. **Update Your React Frontend:**

   In your React frontend, make sure that the form's `action` attribute in the HTML form tag is set to the URL where your server is running, including the route you defined. For example:

   ```jsx
   <form action="http://localhost:3000/submit-form" method="POST" onSubmit={handleSubmit}>
   ```

   This tells the browser to send a POST request to your server's `/submit-form` route when the form is submitted.



6. **Test Your Contact Form:**

   With your backend running, you can test your contact form in your React app. When you submit the form, the data will be sent to your server's `/submit-form` route, and you should see the form data logged in your server's console.
