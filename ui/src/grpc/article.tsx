import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { GrpcManager } from ".";

export async function CallGetArticleList(id, callback) {
    const getArticleListReq = new pb_svc_manager.GetArticleListReq();

    getArticleListReq.setId(id);
    // TODO add page
    getArticleListReq.setPage(0);

    grpc.unary(Manager.GetArticleList, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: getArticleListReq,
        transport: NodeHttpTransport(),
        onEnd: (res) => {
            const { status, statusMessage, headers, message, trailers } = res;
            console.log(
                "getArticleListReq.onEnd.status",
                status,
                statusMessage,
            );
            console.log("getArticleListReq.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                console.log(
                    "getArticleListReq.onEnd.message",
                    message.toObject(),
                );

                callback(message.toObject());
            }

            console.log("getArticleListReq.onEnd.trailers", trailers);
        },
    });
}
