import { useState } from "react";

export default function useInput(initValue: string) {
    const [value, setValue] = useState<string>(initValue);

    const handleChange = (element: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = element;
        setValue(target.value)
    }

    return {
        value: value,
        onChange: handleChange
    }

}
