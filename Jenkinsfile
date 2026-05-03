pipeline {
    agent any

    environment {
        // Simülasyon olduğu için gerçek kimlik bilgilerine gerek kalmayacak
        DOCKER_IMAGE = "my-node-app:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                // Kodları GitHub'dan çeker
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Docker imajını gerçekten oluşturur (Mac'inde Docker açıksa çalışır)
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Push to ECR') {
            steps {
                // AWS bağlantısı gerektirmemesi için simüle ediyoruz
                echo "Simulating: AWS ECR Login..."
                echo "Simulating: docker push ${DOCKER_IMAGE}"
                sh "echo 'Successfully pushed to ECR'"
            }
        }

        stage('Deploy to EKS') {
            steps {
                // kubectl hatası almamak için komutu echo ile simüle ediyoruz
                echo "Deploying to Kubernetes (EKS)..."
                sh "echo kubectl apply -f deployment.yaml"
                sh "echo 'Deployment successful!'"
            }
        }
    }

    post {
        success {
            echo "Pipeline başarıyla tamamlandı! 🚀"
        }
        failure {
            echo "Pipeline başarısız oldu. Logları kontrol et."
        }
    }
}