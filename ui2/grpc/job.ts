import * as pb_svc_manager from "../gen/pb/svc/manager/manager_pb";
import {
    Manager,
    ManagerClient,
} from "../gen/pb/svc/manager/manager_pb_service";

import { GrpcManager } from ".";

export async function CallGetJobList(callback: any) {
    const client = new ManagerClient(
        // (await GrpcManager.getInstance()).GetHost(),
        "http://192.168.0.22:50008",
    );
    const req = new pb_svc_manager.GetJobListReq();
    client.getJobList(req, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        if (res != null) {
            callback(res.toObject());
        }
    });
}
