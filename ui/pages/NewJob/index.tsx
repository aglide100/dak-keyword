import React from "react";
import dynamic from "next/dynamic";

const NewJobForm = dynamic(
    () =>
        import("../../src/components/layout/NewJobForm/NewJobForm").catch(
            (err) => {
                return () => <>Can't load NewJobForm {err}</>;
            },
        ),
    {
        loading: () => <></>,
        ssr: true,
    },
);

export const NewJob: React.FC = () => {
    return (
        <>
            <NewJobForm></NewJobForm>
        </>
    );
};
export default NewJob;
