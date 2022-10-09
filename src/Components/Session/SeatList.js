import React from "react";

import SeatButton from "./SeatButton";

export default function CreateRow({dataInfo, dadInfos}){
    const [row, setRow] = React.useState([
        [], [], [], [], []
    ]);

    React.useEffect(() => {
        const provisoreRow = [...row];

        function forRow(start, end, arrInsert, setter, indexSetter){
            let fixProblem = []; 
            for(let i=start;  i<end;  i++){
                fixProblem = [...fixProblem, {
                    id: i+1,
                    theme: dataInfo.seats[i].isAvailable && dataInfo.seats[i].isAvailable,
                    name: dataInfo.seats[i].name
                }];
            }
            provisoreRow[indexSetter] = fixProblem;
            setter(provisoreRow);
        }

        for( let i=0;  i<5;  i++ ){
            const countPerRow = 10;
            forRow(i*countPerRow, (i+1)*countPerRow, provisoreRow[i], setRow, i);
        }
    }, [])
    return (
        <>
            {row.map((rowIdentor, index) => {
                return (<div key={index}>
                    {
                        row[index].map((dataMap, index) => 
                            <SeatButton 
                                DrivenIdentifier="seat"
                                dadInfos={dadInfos} 
                                dataInfo={dataInfo} 
                                noCanClick={false} 
                                theme={dataMap.theme === true? "available": "unavailable"} 
                                key={dataMap.id} 
                                valueProp={dataMap.name}></SeatButton>)
                    }
                </div>)})
            }
        </>
    )
}