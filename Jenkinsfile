pipeline {
    agent any

    environment {
        HARBOR_REGISTRY = 'harbor.bigarson.com/library'
        HARBOR_CREDENTIALS_ID = 'harbor-credentials'
        IMAGE_NAME = 'landing-page'
        CONTAINER_NAME = 'landing-page'
        CONTAINER_PORT = '3000:3000'
        DOCKER_NETWORK = 'bigarson'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Kod çekiliyor...'
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Docker image build ediliyor...'
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Tag for Harbor') {
            steps {
                echo 'Image Harbor için tagleniyor...'
                script {
                    sh "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${HARBOR_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}"
                    sh "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${HARBOR_REGISTRY}/${IMAGE_NAME}:latest"
                }
            }
        }

        stage('Push to Harbor') {
            steps {
                echo 'Harbor\'a push ediliyor...'
                script {
                    docker.withRegistry("https://${HARBOR_REGISTRY}", "${HARBOR_CREDENTIALS_ID}") {
                        sh "docker push ${HARBOR_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}"
                        sh "docker push ${HARBOR_REGISTRY}/${IMAGE_NAME}:latest"
                    }
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                echo 'Eski container durduruluyor...'
                sh 'docker stop ${CONTAINER_NAME} || true'
                sh 'docker rm ${CONTAINER_NAME} || true'
            }
        }

        stage('Deploy New Container') {
            steps {
                echo 'Yeni container başlatılıyor...'
                sh """
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --network ${DOCKER_NETWORK} \
                        --restart unless-stopped \
                        ${HARBOR_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}
                """
            }
        }

        stage('Cleanup') {
            steps {
                echo 'Eski image\'lar temizleniyor...'
                sh 'docker image prune -f'
            }
        }
    }

    post {
        success {
            echo 'Pipeline başarıyla tamamlandı!'
        }
        failure {
            echo 'Pipeline başarısız oldu!'
        }
    }
}
