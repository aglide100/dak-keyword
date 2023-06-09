import * as pb_svc_manager from "../../gen/pb/svc/manager/worker_pb";
import { GrpcManager } from ".";
import * as grpcWeb from "grpc-web";

// export async function CallGetWorkers(jobId, callback) {
//     const getWorkerListReq = new pb_svc_manager.GetWorkerListReq();
//     getWorkerListReq.setId(jobId);

//     grpc.unary(Manager.GetWorkerList, {
//         host: (await GrpcManager.getInstance()).GetHost(),
//         request: getWorkerListReq,
//         transport: NodeHttpTransport(),
//         onEnd: (res) => {
//             const { status, message } = res;
//             // console.log("getWorkerListReq.onEnd.status", status, statusMessage);
//             // console.log("getWorkerListReq.onEnd.headers", headers);
//             if (status === grpc.Code.OK && message) {
//                 // console.log(
//                 //     "getWorkerListReq.onEnd.message",
//                 //     message.toObject(),
//                 // );

//                 callback(message.toObject());
//             }

//             // console.log("getWorkerListReq.onEnd.trailers", trailers);
//         },
//     });
// }

export async function CallGetWorkers(jobId, callback) {
    const getWorkerListReq = new pb_svc_manager.GetWorkerListReq();
    getWorkerListReq.setId(jobId);

    const stream = (await GrpcManager.getInstance())
        .GetWorkerClient()
        .getWorkerList(
            getWorkerListReq,
            undefined,
            (err, res: pb_svc_manager.GetWorkerListRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    // stream.on("data", (response: pb_svc_manager.GetWorkerListRes) => {
    //     console.log(response);
    // });
    // stream.on("status", (status: grpcWeb.Status) => {
    //     if (status.metadata) {
    //         console.log("Received metadata");
    //         console.log(status.metadata);
    //     }
    // });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
    });
    // stream.on("end", () => {
    //     console.log("stream end signal received");
    // });
}
