# TUTORIAL CONFIG VSCODE --> GITHUB --> AWS Lambda

## AWS IAM
1. Create an Identity and Access Management (IAM)(https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-2#/users) and assign the necessary policies to carry out this practice; administrator access policies (AdministratorAccess) or full access to AWS-Lambda services (AWSLambda_FullAccess).

2. Follow the instructions given by AWS to get your credential keys (https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/id_credentials_access-keys.html). Select the created user and go to the Access keys section and click Create access key; choose your use case and select Create access key.

3. On the Retrieve access keys page, choose show to reveal the value of your user's secret access key, download the .csv file. Remember, this is your only chance to keep your password secret. Once you have saved the secret access key in a safe place, use it carefully.

## AWS Lambda Configuration
1. In AWS Lambda service and create a new function, give it a name (genId <- our practice case) and choose the language and version to use (Node.js v18.x <- our practice case).


## GITHUB Configuration

## VSCode Configuration
1. Create a folder where the project will be stored.
2. Run the command `code .` from a terminal inside the created folder or open the created folder from the VSCode development environment.
3. From an external or integrated terminal, located at the address of the created folder, execute the command `npm init -y` to initialize the project in a custom way or `npm init` to initialize it quickly.
4. Run from the terminal, the command `touch index.js` (JavaScript), `touch index.mjs` (ECMAScript Module) or `touch index.ts` (TypeScript) to create the main development file of the project.

(TypeScript): In case of having executed the command `touch index.ts` it is necessary to install the necessary modules for the compilation and construction of the project; to do this, run the command `npm i --save typescript`.

5. In this demo project, the function `uuid` is used through the programming language `TypeScript`, for the generation of parameters or random strings, for which the development libraries `uuid`, `node` and `aws-lambda` will be installed via terminal. 

(JavaScript) `npm i --save-dev uuid node aws-lambda`. 
(TypeScript) `npm i --save-dev @types/uuid @types/node @types/aws-lambda`. 
