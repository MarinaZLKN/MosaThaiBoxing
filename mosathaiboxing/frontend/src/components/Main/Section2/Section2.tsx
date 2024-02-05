import React from 'react';
import '../../../styles/Decoration.scss';
import InfiniteMarquee2 from './InfiniteMarquee2';
import InfiniteMarquee from './InfiniteMarquee';



const Section2: React.FC = () => {

    return (
        <div className="container decoration-container">
            {/*<RunningText/>*/}
            <InfiniteMarquee />
            <InfiniteMarquee2 />


        </div>
    )
}

export default Section2;