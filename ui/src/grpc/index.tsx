// import { secrets } from "docker-secret";
import * as axios from "axios";
import { ArticleServiceClient } from "../../gen/pb/svc/manager/article_grpc_web_pb";
import { JobServiceClient } from "../../gen/pb/svc/manager/job_grpc_web_pb";
import { WorkerServiceClient } from "../../gen/pb/svc/manager/worker_grpc_web_pb";
import { SimilarityServiceClient } from "../../gen/pb/svc/manager/similarity_grpc_web_pb";

export class GrpcManager {
    private static instance: GrpcManager;
    private static host: string;
    private static articleClient: ArticleServiceClient;
    private static jobClient: JobServiceClient;
    private static workerClient: WorkerServiceClient;
    private static similarityClient: SimilarityServiceClient;

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
        GrpcManager.jobClient = new JobServiceClient(addr);
        GrpcManager.articleClient = new ArticleServiceClient(addr);
        GrpcManager.workerClient = new WorkerServiceClient(addr);
        GrpcManager.similarityClient = new SimilarityServiceClient(addr);
    }

    public GetArticleClient(): ArticleServiceClient {
        if (GrpcManager.articleClient == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.articleClient;
    }

    public GetSimilarityClient(): SimilarityServiceClient {
        if (GrpcManager.articleClient == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.similarityClient;
    }

    public GetWorkerClient(): WorkerServiceClient {
        if (GrpcManager.workerClient == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.workerClient;
    }

    public GetJobClient(): JobServiceClient {
        if (GrpcManager.jobClient == undefined) {
            GrpcManager.SetClient();
        }

        return GrpcManager.jobClient;
    }
}
