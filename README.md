## Hosted Link - https://hospital-api-2g58.onrender.com

## Installation

To run this application on your local machine, please follow these steps:

* Clone this repository:
```
https://github.com/arunesh-singhh/Hospital-API
```

* Install the required dependencies using the following command:
```
npm install
```

* Setup Mongodb Databade URL:

inside .env file copy and paste your mongodb database URL
   ```bash
    MONGODB_URL = mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.c6j8ygu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

* Start the application using the following command: 
```
npm start
```

* Open the application in your postman app by visiting the following URL: 
```
http://localhost:3000
```

### Features:

There can be 2 types of Users:

* Doctors

* Patients

### Doctors can log in
### Each time a patient visits, the doctor will follow 2 steps:
 
1. Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)

2. After the checkup, create a Report
* Patient Report will have the following fields:

1. Created by doctor

2. Status - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

3. Date


Routes:

* /api/doctors/register → with username and password
* /api/doctors/login → returns the JWT to be used
* /api/patients/register
* /api/patients/:id/create_report
* /api/patients/:id/all_reports → List all the reports of a patient oldest to latest
* /api/reports/:status → List all the reports of all the patients filtered by a specific status
