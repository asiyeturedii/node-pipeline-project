pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Kodları Git'ten çek
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                // Dockerfile'ı kullanarak imajı oluştur
                sh 'docker build -t my-node-app:latest .'
            }
        }
        stage('Push to ECR') {
            steps {
                // İmajı AWS'deki depoya gönder
                sh 'echo "Pushing to AWS ECR..."'
            }
        }
        stage('Deploy to EKS') {
            steps {
                // Kubernetes'e (EKS) yerleşim planını uygula
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}