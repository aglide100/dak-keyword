import React from "react";
import { CosineSimilarity } from "../../layout/CosineSimilarityList/CosineSimilarityList";
import {
    AutoSizer,
    List,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";

export const CosineSimilarityItem = (props: CosineSimilarity) => {
    if (props != undefined) {
        console.log("Waring find undefined");
    }

    const cache = new CellMeasurerCache({
        // defaultWidth: 500,
        fixedWidth: true,
    });

    console.log(props);
    const sortedRows = props.ColumnIdList.map((column, idx) => ({
        column,
        rowId: props.RowIdList[idx],
        score: props.ScoreList[idx],
    }))
        // .filter((row) => row.score !== 1)
        .sort((a, b) => b.score - a.score);

    console.log(sortedRows);
    const rowRenderer = ({ index, key, parent, style }) => {
        return (
            <CellMeasurer
                cache={cache}
                columnIndex={0}
                key={key}
                rowIndex={index}
                parent={parent}
            >
                <div
                    style={style}
                    className="w-full h-fit flex justify-center mb-5"
                >
                    <span>{sortedRows[index].column}</span> /
                    <span>{sortedRows[index].rowId}</span>
                    <p>{sortedRows[index].score}</p>
                </div>
            </CellMeasurer>
        );
    };
    const table =
        sortedRows.length > 0 ? (
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        deferredMeasurementCache={cache}
                        rowCount={sortedRows.length}
                        height={height}
                        rowHeight={cache.rowHeight}
                        width={width}
                        rowRenderer={rowRenderer}
                        overscanRowCount={1}
                    />
                )}
            </AutoSizer>
        ) : (
            <>No data...</>
        );

    // const table = sortedRows.map((row, idx) => {
    //     if (row.score != 1) {
    //         return (
    //             <div key={"column_" + idx}>
    //                 <span>{row.column}</span> / <span>{row.rowId}</span>
    //                 <p>{row.score}</p>
    //             </div>
    //         );
    //     }
    // });

    return (
        <div>
            <div>{table}</div>
        </div>
    );
};

export default CosineSimilarityItem;
