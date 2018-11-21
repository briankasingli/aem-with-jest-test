# Maven Build With JEST and AEM 6.4

This is an example of how you can setup an automated Javascript Unit Test, Integration Test, and UI Test directly in your AEM component's client library while making a maven build.

As JEST standards, `\__tests__` folders are created to place Javascript test files. '.test.js' string is appended after the Javascript file name for convention. Building this project with maven will exclude all `__tests__` folders.

#### Project Setup
- AEM 6.4 Project (Maven AEM Archetype 15) (https://github.com/Adobe-Marketing-Cloud/aem-project-archetype)
- Node Project - https://docs.npmjs.com/cli/init

#### Pre Requirements
- JAVA JDK 1.8
- Maven 3+
- Node Version 9.3.0
- NPM Version 6.4.1 
  
#### How To Run
1. Clone Project
2. run command 'mvn clean install'

#### Important Notes
This project setup is fairly simple, take a look at the package.json. That is all the dependencies you need to setup automated Javascript testing on Maven build. 

#### Node Technologies Used
- Jest - https://jestjs.io/ (for Javascript Testing)
- Babel - https://babeljs.io/ (for test compilation (ES6))

#### Known Issues
- When JEST tests passes the output in Maven will be marked as ERROR; however, within the same context, the line of text is marked as 'PASSED'. This is a known issue, and will not be fixed - https://github.com/eirslett/frontend-maven-plugin/issues/584


## Modules

The main parts of the template are:

* ui.apps: contains the /apps parts of the project. Javascript unit tests, integration tests, and ui tests can be done with using JEST and Node.JS

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with  

    mvn clean install -PautoInstallPackage
    
Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish
    
Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html
