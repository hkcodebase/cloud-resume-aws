import {useEffect, useState} from "react";

class RequestData {
    total_requests: string;
    //count_200: string;
    //count_other_status: string;
    total_unique_IPs: string;
    //total_unique_IPs_200: string;
    //total_unique_IPs_Other_Status: string;

    constructor(total_requests: string, total_unique_IPs: string) {
        this.total_requests = total_requests;
        this.total_unique_IPs = total_unique_IPs;
    }
}

export default function Counter() {

    const [data, setData] = useState(new RequestData("n/a", "n/a"));

    useEffect(() => {
        fetch('https://4lgyawlxmgqtsdrwmyb6jctxh40tzvgg.lambda-url.us-west-2.on.aws/',{method:"GET"})
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

    return (
        <div>
            <h4>Stats: </h4>
            Total Requests: {data.total_requests}
            <br/>
            Unique Visitors : {data.total_unique_IPs}
    </div>
    );

}