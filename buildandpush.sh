docker buildx build \
  --platform linux/amd64 \
  -t lubshad/saleor-dashboard-exlynatural:latest \
  --load .
docker buildx build \
  --platform linux/arm64 \
  -t lubshad/saleor-dashboard-exlynatural:latest-arm64 \
  --load .

docker push lubshad/saleor-dashboard-exlynatural:latest
