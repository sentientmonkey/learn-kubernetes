FROM openjdk:14-jdk-alpine AS builder
WORKDIR build/dependency
ARG APPJAR=build/libs/*.jar
COPY ${APPJAR} app.jar
RUN jar -xf ./app.jar

FROM openjdk:14-jdk-alpine
VOLUME /tmp
ARG DEPENDENCY=build/dependency
COPY --from=builder ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=builder ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=builder ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.sentientmonkey.hello.HelloApplicationKt"]
