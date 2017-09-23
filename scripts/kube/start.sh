# Not currently used, recording build steps for the future.

minikube start

minikube addons enable ingress

docker build -t graphql:next -f ./images/Dockerfile.node.dev .

kubectl create -f kube/application.yml
