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

## Deploy with argo-cd

Needs: `argo-cd` and an authenticated argo cli

To create as argocd app

```bash
argocd app create test-env-web \
  --repo https://github.com/lmammino/minikube-helm-init-container \
  --path argocd \
  --dest-namespace default \
  --dest-server https://kubernetes.default.svc \
  --directory-recurse
```
Keep in mind that the images in this project are NOT published anywhere, so you need to build them locally before you can deploy the app. 

This particular setup requires manual synchronisation of deployments (it will not check git)

## License

MIT licensed. See full [LICENSE](LICENSE)
