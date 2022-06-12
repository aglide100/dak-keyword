import React from "react"
import { useRouter } from "next/router";

export default function Job() {
    const router = useRouter();
    return (
        <>Hell {router.query.jobId}</>
    )
}