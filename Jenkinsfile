pipeline {
    agent any
    environment {
        // Her build için benzersiz bir etiket oluşturuyoruz (Örn: my-node-app:12)
        DOCKER_IMAGE = "asiyeturedii/node-pipeline-app:${env.BUILD_NUMBER}"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Unit Test') {
            steps {
                // Kodun gerçekten çalışıp çalışmadığını kontrol eden aşama
                echo "Running tests..."
                sh "echo 'npm test (simulated)'"
            }
        }
        stage('Build Docker Image') {
            steps {
                // Yeni dinamik ismi kullanarak build alıyoruz
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage('Push to ECR (Simulated)') {
            steps {
                echo "Pushing ${DOCKER_IMAGE} to repository..."
                sh "echo 'Successfully pushed ${DOCKER_IMAGE}'"
            }
        }
    }
}