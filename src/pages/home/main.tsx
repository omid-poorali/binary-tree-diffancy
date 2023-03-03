import { useState } from "react";
import { InputBase } from "components";
import { useDebounce } from "hooks";
import { TreeVisualizer } from "./tree-visualizer";

export const Home = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(() => value);
    }

    const debouncedInputValue = useDebounce(inputValue, 500);

    return (
        <div className="p-8 flex flex-col justify-center items-center">
            <InputBase
                value={inputValue}
                onChange={handleInputChange}
            />
            <TreeVisualizer data={debouncedInputValue}/>
        </div>
    )
}