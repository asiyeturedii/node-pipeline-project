pipeline {
    agent any

    environment {
        // Docker Hub kullanıcı adın ve imaj adın
        DOCKER_HUB_USER = "asiyeturedi" 
        IMAGE_NAME = "node-pipeline-app"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        FULL_IMAGE = "${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
    }

    stages {
        stage('Checkout') {
            steps {
                // GitHub'dan son kodları çekiyoruz
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                // Bilgisayarındaki Docker'ı kullanarak build alıyoruz
                sh "docker build -t ${FULL_IMAGE} ."
            }
        }

        stage('Login & Push to Docker Hub') {
            steps {
                // 'docker-hub-credentials' ID'li veriyi Jenkins ayarlarından çekiyoruz
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', 
                                                 passwordVariable: 'DOCKER_HUB_PASSWORD', 
                                                 usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    
                    // Docker Hub'a giriş yap
                    sh "echo ${DOCKER_HUB_PASSWORD} | docker login -u ${DOCKER_HUB_USERNAME} --password-stdin"
                    
                    // Benzersiz build numarasıyla pushla
                    echo "Pushing: ${FULL_IMAGE}"
                    sh "docker push ${FULL_IMAGE}"
                    
                    // Bir de 'latest' etiketiyle işaretleyip pushla (en güncel sürüm için)
                    sh "docker tag ${FULL_IMAGE} ${DOCKER_HUB_USER}/${IMAGE_NAME}:latest"
                    sh "docker push ${DOCKER_HUB_USER}/${IMAGE_NAME}:latest"
                }
            }
        }
    }

    post {
        always {
            // İş bittiğinde güvenlik için logout ol
            sh "docker logout"
        }
        success {
            echo "Pipeline başarıyla tamamlandı ve imaj Docker Hub'a yüklendi! "
        }
        failure {
            echo "Bir hata oluştu, logları kontrol et. "
        }
    }
}