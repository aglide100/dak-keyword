// import { secrets } from "docker-secret";
import * as axios from "axios";
import { makeGetArticleList } from "./article";
import { makeNewJob } from "./job";

export class GrpcManager {
    private static instance: GrpcManager;
    private static host: string;

    constructor() {}

    public static getInstance(): GrpcManager {
        if (!GrpcManager.instance) {
            GrpcManager.instance = new GrpcManager();

            GrpcManager.instance.GetHost();
        }

        return GrpcManager.instance;
    }

    public GetHost(): string {
        return GrpcManager.host;
    }

    public static async SetHost() {
        const axiosObj = axios.default;
        let addr;

        axiosObj.get("/env").then((res) => {
            console.log(res.data.addr);
            addr = res.data.addr;
        });

        GrpcManager.host = addr;
    }
}
