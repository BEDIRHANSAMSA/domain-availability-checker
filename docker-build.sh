#!/bin/sh

docker build . -t bedirhansamsa/domain-availability-checker 
docker push bedirhansamsa/domain-availability-checker:latest