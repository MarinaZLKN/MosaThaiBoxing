import React, { useState } from 'react';
import '../../../styles/Group.scss';

interface GroupProps {
    groupName: string;
    groupImage: string;
    groupText: string;
    groupAlt: string;
}

const Group: React.FC<GroupProps> = ({groupName, groupImage, groupText, groupAlt}) => {
    const [showText, setShowText] = useState(false);

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <div className="group-card">
            <img className="group-img" src={groupImage} alt={groupAlt} onClick={toggleText}/>
            <div className="group-name">{groupName}</div>
            {showText && <p>{groupText}</p>}
        </div>
    );
};

export default Group;