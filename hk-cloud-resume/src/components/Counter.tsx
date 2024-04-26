import {useEffect, useState} from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        load()
    }); // Empty array means this effect runs once on mount

    const load = async () => {
         fetch('http://cloud-resume-alb-1685217853.us-east-1.elb.amazonaws.com/counter')
             .then(response => response.json())
             .then(data => setCount(data));
    };

    return (
    <div>
      <h5>You are visitor number : {count}</h5>
    </div>
  );
}