import React from "react";

export type TruncatedTextProps = {
    text: string;
    maxLength: number;
};

export const TruncatedText = (props: TruncatedTextProps) => {
    const truncatedText =
        props.text.length > props.maxLength
            ? props.text.slice(0, props.maxLength) + "..."
            : props.text;

    return <span>{truncatedText}</span>;
};
