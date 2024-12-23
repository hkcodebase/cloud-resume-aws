import {useEffect, useState} from "react";

class RequestData {
    total_requests: string;
    count_200: string;
    count_other_status: string;
    total_unique_IPs: string;
    total_unique_IPs_200: string;
    total_unique_IPs_Other_Status: string;

    constructor(total_requests: string, count_200 : string, count_other_status: string, total_unique_IPs: string,
                total_unique_IPs_200: string, total_unique_IPs_Other_Status: string) {
        this.total_requests = total_requests;
        this.count_200 = count_200;
        this.count_other_status = count_other_status;
        this.total_unique_IPs = total_unique_IPs;
        this.total_unique_IPs_200 = total_unique_IPs_200;
        this.total_unique_IPs_Other_Status = total_unique_IPs_Other_Status;
    }
}

export default function Counter() {

    const [data, setData] = useState<RequestData>(Object);

    useEffect(() => {
        fetch('https://4lgyawlxmgqtsdrwmyb6jctxh40tzvgg.lambda-url.us-west-2.on.aws/', {method: "GET"})
            .then(response => response.json())
            .then(responseData => setData(responseData));
    }, []); // Empty array means this effect runs once on mount


    // const data = {
    //     "total_requests": "59048",
    //     "count_200": "7808",
    //     "count_other_status": "51240",
    //     "total_unique_IPs": "3769",
    //     "total_unique_IPs_200": "2932",
    //     "total_unique_IPs_Other_Status": "1558"
    // };
    const tableData = Object.entries(data).map(([key, value]) => ({key, value}));
    return (
        <div className={"container"}>
            <h2>API Insights</h2>
        <table className={"border"}>
            <thead>
            <tr>
                <th>Metric</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody> {tableData.map((row, index) => (<tr key={index}>
                <td>{row.key}</td>
                <td>{row.value}</td>
            </tr>))} </tbody>
        </table>
    </div>
    );

}