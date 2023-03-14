// import { secrets } from "docker-secret";
import * as axios from "axios";

export class GrpcManager {
    private static instance: GrpcManager;
    private static host: string;

    public static async getInstance(): Promise<GrpcManager> {
        if (!GrpcManager.instance) {
            const result = await Promise.all([GrpcManager.GetAddr()]);
            GrpcManager.SetHost(result);
            GrpcManager.instance = new GrpcManager();

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
}
