# Not currently used, recording build steps for the future.

brew install docker-machine-driver-xhyve

eval $(minikube docker-env)

minikube start --vm-driver=xhyve

helm install stable/iginx-ingress

docker build -t node:next -f ./images/Dockerfile.node.dev .

#kubectl create -f kube/application.yml

kubectl create -f kube/application.yml


kubectl create -f kube/client-deployment.yml
kubectl create -f kube/graphql-deployment.yml
kubectl create -f kube/users-service-deployment.yml

kubectl delete -f kube/client-deployment.yml
kubectl delete -f kube/graphql-deployment.yml
kubectl delete -f kube/users-service-deployment.yml
