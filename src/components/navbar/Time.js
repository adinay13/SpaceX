import React, {useEffect, useState} from "react";


const Time = () => {
    const [time, setTime] = useState({time: new Date()});

    useEffect(() => {
        const flagInterval = setInterval(() => setTime(new Date() + 1), 1000);
        return clearInterval(flagInterval)

    })

    return (
        <div>
            <h4>{time.time.toLocaleString()}</h4>

        </div>
    );
};

export default Time;

//
// class Time extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =({time: new Date()})
//     }
//     render () {
//         return (
//             <div>
//                 <h4>{this.state.time.toLocaleTimeString()}</h4>
//             </div>
//         )
//     }
// }
// export default Time;