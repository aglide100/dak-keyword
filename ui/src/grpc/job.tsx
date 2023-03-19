/* eslint-disable no-async-promise-executor */
import * as pb_svc_manager from "../../gen/pb/svc/manager/manager_pb";
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service";
import { grpc } from "@improbable-eng/grpc-web";
import { GrpcManager } from ".";

export async function CallGetJobList(callback) {
    const getJobListReq = new pb_svc_manager.GetJobListReq();
    grpc.unary(Manager.GetJobList, {
        host: (await GrpcManager.getInstance()).GetHost(),
        request: getJobListReq,
        onEnd: (res) => {
            const { status, message } = res;
            if (status === grpc.Code.OK && message) {
                callback(message.toObject());
            }
        },
    });
}

export async function CallReRunJob(id, accessCode, isSchedule, callback) {
    const reRunJobReq = new pb_svc_manager.ReRunJobReq();
    console.log("Call Re Run jobs");
    reRunJobReq.setId(id);
    reRunJobReq.setSchedule(isSchedule);
    reRunJobReq.setAccesscode(accessCode);

    await new Promise<void>(async (resolve) => {
        grpc.unary(Manager.ReRunJob, {
            host: (await GrpcManager.getInstance()).GetHost(),
            request: reRunJobReq,
            onEnd: async (res) => {
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
                resolve();
            },
        });
    });
}

export async function CallGetJobIsReRun(id, callback) {
    const reRunJobReq = new pb_svc_manager.GetJobIsReRunReq();
    console.log("Call GetJobIsReRunReq");
    reRunJobReq.setId(id);

    await new Promise<void>(async (resolve) => {
        grpc.unary(Manager.GetJobIsReRun, {
            host: (await GrpcManager.getInstance()).GetHost(),
            request: reRunJobReq,
            onEnd: async (res) => {
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
                resolve();
            },
        });
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
