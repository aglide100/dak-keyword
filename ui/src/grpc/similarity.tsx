import * as pb_svc_manager from "../../gen/pb/svc/manager/similarity_pb";
import { GrpcManager } from ".";
import * as grpcWeb from "grpc-web";

export async function CallGetCosineSimilarity(workerId, callback) {
    const getCosineSimilarityReq = new pb_svc_manager.GetCosineSimilarityReq();

    getCosineSimilarityReq.setWorkerId(workerId);

    const stream = (await GrpcManager.getInstance())
        .GetSimilarityClient()
        .getCosineSimilarity(
            getCosineSimilarityReq,
            undefined,
            (err, res: pb_svc_manager.GetCosineSimilarityRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    // stream.on("data", (response: pb_svc_manager.GetCosineSimilarityRes) => {
    //     console.log(response);
    // });
    // stream.on("status", (status: grpcWeb.Status) => {
    //     // if (status.metadata) {
    //     //     console.log("Received metadata");
    //     //     console.log(status.metadata);
    //     // }
    // });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
    });
    stream.on("end", () => {
        // console.log("stream end signal received");
    });
}

export async function CallGetTfidfScore(workerId, callback) {
    const getTfidfScoreReq = new pb_svc_manager.GetTfidfScoreReq();

    getTfidfScoreReq.setWorkerId(workerId);

    const stream = (await GrpcManager.getInstance())
        .GetSimilarityClient()
        .getTfidfScore(
            getTfidfScoreReq,
            undefined,
            (err, res: pb_svc_manager.GetTfidfScoreRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    // stream.on("data", (response: pb_svc_manager.GetTfidfScoreRes) => {
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

export async function CallGetVocabList(workerId, callback) {
    const getVocabListReq = new pb_svc_manager.GetVocabListReq();

    getVocabListReq.setWorkerId(workerId);

    const stream = (await GrpcManager.getInstance())
        .GetSimilarityClient()
        .getVocabList(
            getVocabListReq,
            undefined,
            (err, res: pb_svc_manager.GetVocabListRes) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (res != null) {
                    callback(res.toObject());
                }
            },
        );
    // stream.on("data", (response: pb_svc_manager.GetVocabListRes) => {
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
