import { useState } from "react"

const UpdatedComponent = (OrignalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(10);
        const handleIncrement = () => {
            setCount(count * 2);
        }
        return <OrignalComponent count={count} handleIncrement={handleIncrement} />
    }
    return NewComponent;
}
export default UpdatedComponent;