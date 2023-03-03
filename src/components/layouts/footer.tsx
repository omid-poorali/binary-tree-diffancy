import React from "react";

export const Footer = () => {
    const text = [
        "Binary Trees are trees whose nodes can only have up to two children (Hence the name Binary)"
    ]
    return (
        <div className="bg-slate-500 p-5">
            <h2 className="font-medium text-2xl text-slate-100 py-2">Info</h2>
            {React.Children.toArray(text.map(x => (
                <h6 className="mb-2 text-white">{x}</h6>
            )))}
        </div>
    );
}