import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { GrpcManager } from ".";
import * as grpcWeb from "grpc-web";

// export async function CallGetArticleList(id, callback) {
//     const getArticleListReq = new pb_svc_manager.GetArticleListReq();

//     getArticleListReq.setId(id);
//     // TODO add page
//     getArticleListReq.setPage(0);

//     grpc.unary(Manager.GetArticleList, {
//         host: (await GrpcManager.getInstance()).GetHost(),
//         request: getArticleListReq,
//         transport: NodeHttpTransport(),
//         onEnd: (res) => {
//             const { status, message } = res;
//             if (status === grpc.Code.OK && message) {
//                 callback(message.toObject());
//             }
//         },
//     });
// }

export async function CallGetArticleList(id, callback) {
    const getArticleListReq = new pb_svc_manager.GetArticleListReq();

    getArticleListReq.setId(id);
    // TODO add page
    getArticleListReq.setPage(0);

    const stream = (await GrpcManager.getInstance())
        .GetClient()
        .getArticleList(
            getArticleListReq,
            undefined,
            (err, res: pb_svc_manager.GetArticleListRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    stream.on("data", (response: pb_svc_manager.GetArticleListRes) => {
        console.log(response);
    });
    stream.on("status", (status: grpcWeb.Status) => {
        if (status.metadata) {
            console.log("Received metadata");
            console.log(status.metadata);
        }
    });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
    });
    stream.on("end", () => {
        console.log("stream end signal received");
    });
}

// export async function CallGetArticleCountByDay(id, callback) {
//     const getArticleCountByDayReq =
//         new pb_svc_manager.GetArticleCountByDayReq();

//     if (id == undefined) {
//         return;
//     }

//     getArticleCountByDayReq.setId(id);

//     grpc.unary(Manager.GetArticleCountByDay, {
//         host: (await GrpcManager.getInstance()).GetHost(),
//         request: getArticleCountByDayReq,
//         transport: NodeHttpTransport(),
//         onEnd: (res) => {
//             const { status, message } = res;
//             if (status === grpc.Code.OK && message) {
//                 callback(message.toObject());
//             }
//         },
//     });
// }

// export async function CallGetArticleCountByHour(id, callback) {
//     const getArticleCountByHourReq =
//         new pb_svc_manager.GetArticleCountByHourReq();
//     if (id == undefined) {
//         return;
//     }

//     getArticleCountByHourReq.setId(id);

//     grpc.unary(Manager.GetArticleCountByHour, {
//         host: (await GrpcManager.getInstance()).GetHost(),
//         request: getArticleCountByHourReq,
//         transport: NodeHttpTransport(),
//         onEnd: (res) => {
//             const { status, message } = res;
//             if (status === grpc.Code.OK && message) {
//                 callback(message.toObject());
//             }
//         },
//     });
// }
export async function CallGetArticleCountByHour(id, callback) {
    const getArticleCountByHourReq =
        new pb_svc_manager.GetArticleCountByHourReq();
    if (id == undefined) {
        return;
    }

    getArticleCountByHourReq.setId(id);

    const stream = (await GrpcManager.getInstance())
        .GetClient()
        .getArticleCountByHour(
            getArticleCountByHourReq,
            undefined,
            (err, res: pb_svc_manager.GetArticleCountByHourRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    stream.on("data", (response: pb_svc_manager.GetArticleCountByHourRes) => {
        console.log(response);
    });
    stream.on("status", (status: grpcWeb.Status) => {
        if (status.metadata) {
            console.log("Received metadata");
            console.log(status.metadata);
        }
    });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
    });
    stream.on("end", () => {
        console.log("stream end signal received");
    });
}

export async function CallGetArticleCountByDay(id, callback) {
    const getArticleCountByDayReq =
        new pb_svc_manager.GetArticleCountByDayReq();

    if (id == undefined) {
        return;
    }

    getArticleCountByDayReq.setId(id);

    const stream = (await GrpcManager.getInstance())
        .GetClient()
        .getArticleCountByDay(
            getArticleCountByDayReq,
            undefined,
            (err, res: pb_svc_manager.GetArticleCountByDayRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    stream.on("data", (response: pb_svc_manager.GetArticleCountByDayRes) => {
        console.log(response);
    });
    stream.on("status", (status: grpcWeb.Status) => {
        if (status.metadata) {
            console.log("Received metadata");
            console.log(status.metadata);
        }
    });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
    });
    stream.on("end", () => {
        console.log("stream end signal received");
    });
}
