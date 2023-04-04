// import { secrets } from "docker-secret";
import * as axios from "axios";
import { ManagerClient } from "../../gen/pb/svc/manager/manager_grpc_web_pb";
import { NodeHttpTransport } from "grpc-web-node-http-transport";

export class GrpcManager {
    private static instance: GrpcManager;
    private static host: string;
    private static client: ManagerClient;

    public static async getInstance(): Promise<GrpcManager> {
        if (!GrpcManager.instance) {
            const result = await Promise.all([GrpcManager.GetAddr()]);
            GrpcManager.SetHost(result);
            GrpcManager.instance = new GrpcManager();

            GrpcManager.SetClient();
            return GrpcManager.instance;
        }

        return GrpcManager.instance;
    }

    public GetHost(): string {
        return GrpcManager.host;
    }

    public static async GetAddr() {
        const axiosObj = axios.default;
        let addr;

        try {
            await axiosObj.get("/env").then((res) => {
                addr = res.data.addr;
            });
        } catch {
            console.log("Can't get env from server!");
            addr = "./pb";
            // addr = "https://envoy.like-a-junk.com";
        }

        return addr;
    }

    public static async SetHost(addr) {
        GrpcManager.host = addr.toString();
    }

    public GetClient(): ManagerClient {
        if (GrpcManager.client == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.client;
    }

    public static SetClient() {
        console.log("Debug!!,", GrpcManager.host);

        // const host = GrpcManager.host;
        // if (typeof host == "string") {
        GrpcManager.client = new ManagerClient(GrpcManager.host, null, {
            transport: NodeHttpTransport,
        });
        // }
    }
}
