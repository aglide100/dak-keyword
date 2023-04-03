import * as pb_svc_manager from "../gen/pb/svc/manager/manager_pb";
import {
    Manager,
    ManagerClient,
} from "../gen/pb/svc/manager/manager_pb_service";
import { ClientReadableStream, Metadata } from "grpc-web";
import { GrpcManager } from ".";
// import { Metadata } from "@grpc/grpc-js";
import * as grpcWeb from "grpc-web";

export async function CallGetJobList(callback: any) {
    // let stream: ClientReadableStream<pb_svc_manager.GetJobListRes>;
    // let metadata: Metadata;

    let stream: grpcWeb.ClientReadableStream<pb_svc_manager.GetJobListRes>;

    const req = new pb_svc_manager.GetJobListReq();
    const metadata: Metadata;

    // metadata.set("", "");

    stream = (await GrpcManager.getInstance())
        .GetClient()
        .getJobList(req, metadata);

    (await GrpcManager.getInstance())
        .GetClient()
        .getJobList(req, {}, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }

            if (res != null) {
                const data = JSON.stringify(res.toObject());
                callback(data);
            }
        });

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
