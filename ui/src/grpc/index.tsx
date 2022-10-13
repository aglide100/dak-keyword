// import { secrets } from "docker-secret";

export const grpcWebAddr = getGrpcWebAddr();

function getGrpcWebAddr() {
    const val = process.env.NEXT_PUBLIC_GRPCWEBADDR;

    console.log("addr : " + val);

    return "";
    // var val = process.env.NEXT_PUBLIC_GRPCWEBADDR;

    // if (val) {
    //     return val;
    // } else {
    //     return "https://localhost:50011";
    // }
}

// export async function getStaticProps() {
//     const val = process.env.NEXT_PUBLIC_GRPCWEBADDR;

//     console.log(val);

//     return {
//         props: {
//             val,
//         },
//     };
// }

// export const grpcWebAddr = "https://localhost:50011";
