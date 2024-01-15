import React from 'react';
import '../../../styles/Decoration.scss';
import RunningRow from "./RunningRow";
import RunningText from "./RunningText";
import InfiniteLooper from'./InfiniteLooper'



const Decoration: React.FC = () => {

    return (
        <div className="container decoration-container">
            <RunningText/>


        </div>
    )
}

export default Decoration;