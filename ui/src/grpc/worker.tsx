import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GrpcManager } from ".";

export async function makeGetWorkers(jobId, callback) {
    const getWorkerListReq = new pb_svc_manager.GetWorkerListReq();
    getWorkerListReq.setId(jobId);

    grpc.unary(Manager.GetWorkerList, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: getWorkerListReq,
        transport: NodeHttpTransport(),
        onEnd: (res) => {
            const { status, statusMessage, headers, message, trailers } = res;
            console.log("getWorkerListReq.onEnd.status", status, statusMessage);
            console.log("getWorkerListReq.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                console.log(
                    "getWorkerListReq.onEnd.message",
                    message.toObject(),
                );

                callback(message.toObject());
            }

            console.log("getWorkerListReq.onEnd.trailers", trailers);
        },
    });
}
