import React from 'react';
import ParentCard from '../../Components/Parents/Parent';
import Child from '../../Components/Child/Child';

export default function Parent (props) {
    return (
        <div>
            <div>
                <ParentCard />
            </div>
            <div>
                <Child />
            </div>
        </div>
    )
}