//Pipeline as code
pipeline {
    agent any

    stages {
        stage('Git') {
            steps {
                echo 'Hello World'
            }
        }
        stage('build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
        stage('Testing') {
            steps {
                echo 'Testing'
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing...'
            }
        }
    }
}
