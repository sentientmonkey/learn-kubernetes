#!/usr/bin/env bash

./backend/push.sh
./frontend/push.sh
kubectl set image deployment/demo-backend hello=sentientmonkey/hello:latest --record
kubectl rollout status deployment/demo-backend
kubectl set image deployment/demo-frontend hello-frontend=sentientmonkey/hello-frontend:latest --record
kubectl rollout status deployment/demo-frontend

open http://minikube.internal
