import React from "react";
interface KeyValue {
    [key: string]: any;
}
export const goThrough = (my_obj:KeyValue) => {
    const elements = [];

    for (let key in my_obj) {
        if (typeof my_obj[key] === "object") {
            elements.push(
                <li key={key}><span>{key}</span>:
                    <ul>
                        {goThrough(my_obj[key])}
                    </ul>
                </li>
            );
        } else {
            elements.push(<li key={key}>{key}: {my_obj[key]}</li>);
        }
    }

    return elements;
};
