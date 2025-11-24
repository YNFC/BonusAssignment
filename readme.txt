Car Maintenance Log – README.txt file
Student: Ghayas Sher
Student Number: 100868509

The Car Maintenance Log is a full CRUD web application that allows users to 
track vehicle maintenance services such as oil changes, tire rotations, repairs, 
and other service records. Users can add, view, edit, and delete service records 
easily through the interface. I also used MongoDB to host this site as the 
assignment required us to do. The project was built following the MVC 
(Model–View–Controller) architecture.

FEATURES (CRUD)
1. Create – Add a new maintenance record (service type, cost, mileage, date, notes)
2. Read – View a list of all maintenance records
3. Update – Edit an existing service record
4. Delete – Remove a service record from the database

Additional features:
- Clean navigation bar
- Footer with personalized design
- Bootstrap styling for a professional layout
- Partials for header and footer
- .env file for secure database connection

TECHNOLOGIES USED IN THIS PROJECT
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS Templating Engine
- Bootstrap 5
- Dotenv
- MVC Architecture

HOW TO INSTALL & RUN THE PROJECT
1. Install all dependencies:
   npm install
2. Create a ".env" file in the main folder and add your MongoDB connection:
   MONGO_URI=URL
   the URL is a URL given by MongoDB to connect your code to the server and host it live.
   In the URL you need to input your username and password for it. 
3. Start the server:
   node app.js or nodemon app.js (if using nodemon)
4. Open the browser and go to:
   http://localhost:3000

The Header:
- Displays the Navbar and the Project title (Car Maintenance Log). 
  Also Displays the other sections of the sites you can go to like
  Services page or the Add Page or the Reviews page.
The Home Page:
- Shows a welcome message with buttons to view or add records.
The Services Page:
- Displays all maintenance logs in a table.
- Includes buttons for editing or deleting each entry.
THe Add Page:
- Form for adding a new service record.
The Reviews Page:
- A place where you can add reviews given by others about your website.
  In this case its just me because it is not yet a multi user application.
The Footer:
- Displays “All Rights Reserved 2025”, project title in the center,
  and “Ghayas Sher” my name on the right.

Some Known Limitations/ Possible Security Problems
- No authentication (anyone can access the app)
- Requires internet for MongoDB Atlas connection
- Designed for single-user use (not multi-account)

File Structure:
Assignment 3: 
--Config
   -.gitignore
   -database.js
--Controllers
   -Reviewcontroller.js
   -Servicecontroller.js
--models
   -Review.js
   -Service.js
--node modules
--routes
   -Reviewroutes.js
   -Serviceroutes.js
--Views
   --Partials
      -footer.ejs
      -header.ejs
   -add.ejs
   -addReview.ejs
   -edit.ejs
   -home.ejs
   -reviews.ejs
   -services.ejs
-.env
-package-lock.json
-package.json
-readme.txt

