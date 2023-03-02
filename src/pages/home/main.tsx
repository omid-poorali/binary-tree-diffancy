import { InputBase } from "components";
import { useState } from "react";

export const Home = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(() => value);
    }

    return (
        <div className="p-8 flex flex-col justify-center items-center">
            <InputBase
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    )
}