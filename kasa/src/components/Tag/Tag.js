import React from 'react';
import './Tag.css';

const Tag = (tag) => {

    return (
        <li className='tag'>
            {tag.tagname}
        </li>
    );
};

export default Tag;