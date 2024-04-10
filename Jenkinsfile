pipeline {
    //no global agent stages to be run on individual docker nodes and not from the controller
    agent none 

    stages {
        stage('Clone repository') {
            agent {
                docker {
                    image 'alpine/git:2.43.0' 
                    args '-v /var/jenkins_home/workspace/onlinepharmacy_pipeline:/repo' 
                }
            }
            steps {
                sh git clone https://github.com/tonyjemba/onlinePharmacy.git /repo
            }
        }
   
    }
 
}
