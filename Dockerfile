FROM node:latest
EXPOSE 3000
COPY entrypoint.sh entrypoint.sh
COPY build.sh build.sh
RUN chmod -R 750 entrypoint.sh
RUN chmod -R 750 build.sh
RUN ./build.sh
ENTRYPOINT ./entrypoint.sh
CMD sleep 1000
