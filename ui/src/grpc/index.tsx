// import { secrets } from "docker-secret";

export const grpcWebAddr = getGrpcWebAddr();

function getGrpcWebAddr() {
    var val = process.env.GRPCWEBADDR;

    if (val) {
        return val;
    } else {
        return "https://localhost:50011";
    }
}

// export const grpcWebAddr = "https://localhost:50011";
