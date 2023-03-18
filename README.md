# QuotationApp
 Main intention of this “Quotation Web App” is quick generation of quotation to serve to customers in all shops sales and factory direct sales.



## For Backend
cd quotation_backend

npm i

node index.js


## For Frontend
cd quotation_ui

npm i  (If it dosent work please try with - npx yarn install (or) yarn install )

npm run start









## Deploying Inside Server

git clone https://github.com/VikashMediboina/QuotationApp.git




## Backend starting server

cd quotation_backend

npm i

node index.js

server starts at port 5001



## Frontend Starting server if there are no changes in UI as backend will point to http://localhost:5001 

cd UI-Server

npm i

node index.js

server starts at http://localhost:3000



## If we have any changes in UI

#### step-1:Building the UI local

   cd quotation_ui

   npm i  (If it dosent work please try with   -  npx yarn install  (or) yarn install )

   npm run build

   build file will be generated at quotation_ui/build

#### step-2:- pushing to github / Copying the build file at quotation_ui/build

#### Step-3:- pulling it in server / pasting the file in the server at location quotation_ui/build





