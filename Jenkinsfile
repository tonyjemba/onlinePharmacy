pipeline {
    //no global agent stages to be run on individual docker nodes and not from the controller
    agent none 

    stages {
        stage('Clone repository') {
            agent {
                docker {
                    image 'alpine/git' 
                    args '-v ${WORKSPACE}/:/home/jenkins' 
                }
            }
            steps {
                checkout scm 
            }
        }
   
    }
 
}
