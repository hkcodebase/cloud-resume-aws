import {useEffect, useState} from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/counter',{method:"GET"})
            .then(response => response.json())
            .then(data => setCount(data));
    }, []); // Empty array means this effect runs once on mount


         //fetch('https://backend.hkcloudresume.com/counter')




    return (
    <div>
      <h5>You are visitor number : {count}</h5>
    </div>
  );
}