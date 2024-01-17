import React from 'react';
import '../../../styles/Decoration.scss';

const RunningText: React.FC = () => {
  return (
    <div className="container running-text-container">
        <div className="running-text">
            <span className="white-text"> MOSA <span className="yellow-text">THAI</span> BOXING </span><span className="white-text"> MOSA <span className="yellow-text">THAI</span> BOXING </span>
        </div>

        {/*<div className="running-text">*/}
        {/*    <span className="white-text">MOSA <span className="yellow-text">THAI</span> BOXING </span>*/}
        {/*</div>*/}

    </div>
  );
}

export default RunningText;
