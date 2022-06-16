pipeline {
    agent any
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                nodejs('NodeJS-16.15.1') {
                    sh 'unset CI'
                    sh 'npm i'
                    sh 'npm run build'
                }

            }
        }
    }
}
