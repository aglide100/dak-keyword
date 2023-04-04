// import * as pb_svc_manager from "../gen/pb/svc/manager/manager_grpc_pb";
// import { ManagerClient } from "../gen/pb/svc/manager/manager_grpc_web_pb";
import { GetJobListReq, GetJobListRes } from "../gen/pb/svc/manager/manager_pb";

// import {
//     Manager,
//     ManagerClient,
// } from "../gen/pb/svc/manager/manager_pb_service";
import { ClientReadableStream, Metadata } from "grpc-web";
import { GrpcManager } from ".";
// import { Metadata } from "@grpc/grpc-js";
import * as grpcWeb from "grpc-web";

export async function CallGetJobList(callback: any) {
    // let stream: ClientReadableStream<pb_svc_manager.GetJobListRes>;
    // let metadata: Metadata;

    // let stream: grpcWeb.ClientReadableStream<GetJobListRes>;

    const req = new GetJobListReq();

    const stream = (await GrpcManager.getInstance())
        .GetClient()
        .getJobList(req, undefined, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }

            if (res != null) {
                // const data = JSON.stringify(res.toObject());
                callback(res);
            }
        });

    stream.on("data", (response: GetJobListRes) => {
        console.log(response);
        // EchoApp.addRightMessage(response.getMessage());
    });
    stream.on("status", (status: grpcWeb.Status) => {
        if (status.metadata) {
            console.log("Received metadata");
            console.log(status.metadata);
        }
    });
    stream.on("error", (err: grpcWeb.RpcError) => {
        console.log(err);
        // EchoApp.addRightMessage(
        //     'Error code: ' + err.code + ' "' + err.message + '"');
    });
    stream.on("end", () => {
        console.log("stream end signal received");
    });
    // const metadata: Metadata;

    // metadata.set("", "");

    // const stream = (await GrpcManager.getInstance())
    //     .GetClient()
    //     .getJobList(req, (err, res) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }

    //         if (res != null) {
    //             const data = JSON.stringify(res.toObject());
    //             callback(data);
    //         }
    //     });

    // (await GrpcManager.getInstance())
    //     .GetClient()
    //     .getJobList(req, {}, (err, res) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }

    //         if (res != null) {
    //             const data = JSON.stringify(res.toObject());
    //             callback(data);
    //         }
    //     });

    // (await GrpcManager.getInstance())
    //     .GetClient()
    //     .getJobList(req, (err, res) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }

    //         if (res != null) {
    //             callback(res.toObject());
    //         }
    //     });
}
