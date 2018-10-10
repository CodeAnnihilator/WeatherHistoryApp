export DOCKER_CONFIG_DEVELOPMENT=${DOCKER_CONFIG_DEVELOPMENT:-docker-compose.development.yml}

dcdev() {
   docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_DEVELOPMENT "$@"
}