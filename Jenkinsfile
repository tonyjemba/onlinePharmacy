pipeline {
    //no global agent stages to be run on individual docker nodes and not from the controller
    agent none

    stages {

        stage('Check Node Version') {
             agent {
        docker { image 'node:lts'}
       } 
           
            steps {
                sh 'node --version'
            }
    }

    
   
    }
 
}
