// import { secrets } from "docker-secret";
import * as axios from "axios";
import { ManagerClient } from "../../gen/pb/svc/manager/manager_grpc_web_pb";

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
        }

        return addr;
    }

    public static async SetHost(addr) {
        GrpcManager.host = addr;
    }

    public static SetClient() {
        const addr = GrpcManager.host.toString();
        GrpcManager.client = new ManagerClient(addr);
    }

    public GetClient(): ManagerClient {
        if (GrpcManager.client == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.client;
    }
}
