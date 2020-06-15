#!/usr/bin/env bash

helm install my-release \
  --set postgresqlUsername=hello,postgresqlPassword=hello,postgresqlDatabase=hello \
    bitnami/postgresql
