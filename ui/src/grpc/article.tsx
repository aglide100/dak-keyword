import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service";
import { GrpcManager } from ".";

export async function CallGetArticleList(id, callback) {
    const getArticleListReq = new pb_svc_manager.GetArticleListReq();

    getArticleListReq.setId(id);
    // TODO add page
    getArticleListReq.setPage(0);

    // grpc.unary(Manager.GetArticleList, {
    //     host: (await GrpcManager.getInstance()).GetHost(),
    //     request: getArticleListReq,
    //     transport: NodeHttpTransport(),
    //     onEnd: (res) => {
    //         const { status, message } = res;
    //         if (status === grpc.Code.OK && message) {
    //             callback(message.toObject());
    //         }
    //     },
    // });
}

export async function CallGetArticleCountByDay(id, callback) {
    const getArticleCountByDayReq =
        new pb_svc_manager.GetArticleCountByDayReq();

    if (id == undefined) {
        return;
    }

    getArticleCountByDayReq.setId(id);

    // grpc.unary(Manager.GetArticleCountByDay, {
    //     host: (await GrpcManager.getInstance()).GetHost(),
    //     request: getArticleCountByDayReq,
    //     transport: NodeHttpTransport(),
    //     onEnd: (res) => {
    //         const { status, message } = res;
    //         if (status === grpc.Code.OK && message) {
    //             callback(message.toObject());
    //         }
    //     },
    // });
}

export async function CallGetArticleCountByHour(id, callback) {
    const getArticleCountByHourReq =
        new pb_svc_manager.GetArticleCountByHourReq();
    if (id == undefined) {
        return;
    }

    getArticleCountByHourReq.setId(id);

    // grpc.unary(Manager.GetArticleCountByHour, {
    //     host: (await GrpcManager.getInstance()).GetHost(),
    //     request: getArticleCountByHourReq,
    //     transport: NodeHttpTransport(),
    //     onEnd: (res) => {
    //         const { status, message } = res;
    //         if (status === grpc.Code.OK && message) {
    //             callback(message.toObject());
    //         }
    //     },
    // });
}
