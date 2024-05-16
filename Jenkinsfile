pipeline {
    agent any
    
    environment {
        NODEJS_HOME = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}\\node_modules\\.bin;${env.PATH}"
    }

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}
