import * as pb_svc_job from "../../gen/pb/svc/manager/manager_pb"
import { Manager } from "../../gen/pb/svc/manager/manager_pb_service"
import { grpc } from "@improbable-eng/grpc-web";
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

const grpcWebAddr = "http://localhost:50011"
// const myTransport = grpc.CrossBrowserHttpTransport({ withCredentials: false });

export async function makeGetJobList(callback ) {
    const getJobListReq = new pb_svc_job.GetJobListReq();
    

    grpc.unary(Manager.GetJobList, {
        host: grpcWebAddr,
        request: getJobListReq,
        transport: NodeHttpTransport(),
        onEnd: (res) => {
            const { status, statusMessage, headers, message, trailers } = res;
            console.log("getJobListReq.onEnd.status", status, statusMessage);
            console.log("getJobListReq.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                console.log("getJobListReq.onEnd.message", message.toObject());
                
                callback(message.toObject())
            }

            console.log("getJobListReq.onEnd.trailers", trailers);
        }
    })
    
}

export default makeGetJobList;
