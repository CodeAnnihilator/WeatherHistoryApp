export DOCKER_CONFIG_DEVELOPMENT=${DOCKER_CONFIG_DEVELOPMENT:-docker-compose.development.yml}
export DOCKER_CONFIG_PRODUCTION=${DOCKER_CONFIG_PROD:-docker-compose.production.yml}

dcdev() {
   docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_DEVELOPMENT "$@"
}

dcprod() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_PRODUCTION "$@"
}