pipeline {
    //no global agent stages to be run on individual docker nodes and not from the controller
    agent {
        docker { image ''}
    } 

    stages {
        stage('Check Node Version') {
           
            steps {
                sh 'node --version'
            }
        }
   
    }
 
}