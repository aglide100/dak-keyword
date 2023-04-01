# https://github.com/envoyproxy/envoy/issues/23339#issuecomment-1290509732 cannot running on rpi4
# FROM envoyproxy/envoy:v1.22.9
FROM thegrandpkizzle/envoy:1.25.2

COPY ./envoy.yaml /etc/envoy/envoy.yaml

ENTRYPOINT [ "/usr/local/bin/envoy" ]
CMD [ "-c /etc/envoy/envoy.yaml", "-l trace", "--log-path /tmp/envoy_info.log" ]

