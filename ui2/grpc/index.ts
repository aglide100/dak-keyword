// import { secrets } from "docker-secret";
import * as axios from "axios";
import { ManagerClient } from "../gen/pb/svc/manager/manager_grpc_web_pb";

export class GrpcManager {
    private static instance: GrpcManager;
    private static host: string;
    private static client: ManagerClient;

    // const client = new ManagerClient(
    //     // (await GrpcManager.getInstance()).GetHost(),
    //     "http://192.168.0.22:50008",
    // );

    public static async getInstance(): Promise<GrpcManager> {
        if (!GrpcManager.instance) {
            const result = await Promise.all([GrpcManager.getAddr()]);
            GrpcManager.SetHost(result);
            GrpcManager.instance = new GrpcManager();

            GrpcManager.SetClient;
            // this.client = new ManagerClient("http://192.168.0.22:50008");

            return GrpcManager.instance;
        }

        return GrpcManager.instance;
    }

    public GetHost(): string {
        return GrpcManager.host;
    }

    public GetClient(): ManagerClient {
        if (GrpcManager.client == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.client;
    }

    public static async getAddr() {
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

    public static async SetHost(addr: any) {
        GrpcManager.host = addr;
    }

    public static SetClient() {
        // let addr: string;

        const addr = GrpcManager.host.toString();
        GrpcManager.client = new ManagerClient(addr);
    }
}
