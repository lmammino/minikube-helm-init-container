# Sample-helm

Sample helm based web application using an init container

Needs: `minikube` and `helm`

## 1. Build images

To build the images inside minikube use:

```bash
./images/dump-envs/build.sh
./images/env-web-server/build.sh
```

## 2. Install chart

To install the chart:

```bash
helm install test-env-web charts/env-web-server
```

## 3. Debug

To access the actual applications from your machine:

```bash
minikube service test-env-web
```

To visualize the state of the system:

```bash
kubectl get all
```

or, if you prefer a visual dashboard:

```bash
minikube dashboard
```

To visualize the logs:

```bash
# show pods
kubectl get pods
kubectl logs <pod-id>
```

To visualize the logs for an init container

```bash
kubectl logs <pod-id> -c <init-container-name> # (in our case "test-env-web-init")
```


## License

MIT licensed. See full [LICENSE](LICENSE)
