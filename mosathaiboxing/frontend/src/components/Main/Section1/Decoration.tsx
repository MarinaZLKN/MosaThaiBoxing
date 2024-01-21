import React from 'react';
import '../../../styles/Decoration.scss';
import RunningText from "./RunningText";
import InfiniteMarquee from '../Section2/InfiniteMarquee';



const Decoration: React.FC = () => {

    return (
        <div className="container decoration-container">
            {/*<RunningText/>*/}
            <InfiniteMarquee />


        </div>
    )
}

export default Decoration;