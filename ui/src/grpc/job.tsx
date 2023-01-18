import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
// import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GrpcManager } from ".";

export async function CallGetJobList(callback) {
    const getJobListReq = new pb_svc_manager.GetJobListReq();
    // console.log((await GrpcManager.getInstance()).GetHost());
    grpc.unary(Manager.GetJobList, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: getJobListReq,
        // transport: NodeHttpTransport(),
        onEnd: (res) => {
            const { status, message } = res;
            // console.log("getJobListReq.onEnd.status", status, statusMessage);
            // console.log("getJobListReq.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                // console.log("getJobListReq.onEnd.message", message.toObject());

                callback(message.toObject());
            }

            // console.log("getJobListReq.onEnd.trailers", trailers);
        },
    });
}

export async function CallReRunJob(id, accessCode, callback) {
    const reRunJobReq = new pb_svc_manager.ReRunJobReq();
    console.log("Call Re Run jobs");
    reRunJobReq.setId(id);
    reRunJobReq.setAccesscode(accessCode);

    grpc.unary(Manager.ReRunJob, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: reRunJobReq,
        onEnd: (res) => {
            const { status, message, statusMessage, headers } = res;

            console.log("CallReRunJob.onEnd.status", status, statusMessage);
            console.log("CallReRunJob.onEnd.headers", headers);

            if (status === grpc.Code.OK && message) {
                callback(message.toObject(), statusMessage);
            } else if (
                status === grpc.Code.Canceled &&
                statusMessage.length > 1
            ) {
                callback("", statusMessage);
            }
        },
    });
}

export async function CallNewJob(keyword, owner, accessCode, callback) {
    const createNewJobReq = new pb_svc_manager.CreateNewJobReq();

    createNewJobReq.setKeyword(keyword);
    createNewJobReq.setOwner(owner);
    createNewJobReq.setAccesscode(accessCode);

    grpc.unary(Manager.CreateNewJob, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: createNewJobReq,
        // transport: NodeHttpTransport(),
        onEnd: (res) => {
            const { status, message, statusMessage } = res;

            // console.log("createNewJobReq.onEnd.status", status, statusMessage);
            // console.log("createNewJobReq.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                // console.log(
                //     "createNewJobReq.onEnd.message",
                //     message.toObject(),
                // );

                callback(message.toObject(), statusMessage);
            } else if (
                status === grpc.Code.Canceled &&
                statusMessage.length > 1
            ) {
                callback("", statusMessage);
            }

            // console.log("createNewJobReq.onEnd.trailers", trailers);
        },
    });
}
