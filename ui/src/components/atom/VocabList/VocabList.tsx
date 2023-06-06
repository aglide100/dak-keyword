import React, { useEffect } from "react";
// import { CallGetVocabList } from "../../../grpc/similarity";
// import Calendar from "react-calendar";
// import moment from "moment";

export const VocabList = () => {
    // const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log("VocabList loaded");
    }, []);

    // async function fetchVocabList() {
    //     try {
    //         // CallGetVocabList();
    //     } catch (err) {
    //         console.log(err);
    //         throw err;
    //     }
    // }
    return (
        <div className="w-full h-full">
            <div>
                {/* <Calendar onChange={onChange} value={value} />
                <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")}
                </div> */}
            </div>
            VocabList wip...
        </div>
    );
};

export default VocabList;
