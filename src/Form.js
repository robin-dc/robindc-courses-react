import { useState } from "react"

export default function Form({setInput, input}){
    const [currentValue, setCurrentValue] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
        setCurrentValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(currentValue)
    }
    return (
        <form className="flex gap-[0.5rem]" onSubmit={handleSubmit}>
            <input type="text"
            className="py-[0.6rem] px-1 rounded-md outline-none hidden md:block"
            placeholder="Search here."
            id="search"
            name="search"
            value={input}
            onChange={handleChange}
            />
            <button className=" rounded-md bg-primary px-1 py-[0.5rem] font-bold text-secondary text-base border-2 border-secondary hidden md:block active:scale-[0.9] cursor-pointer" id="search-btn">SEARCH</button>
        </form>
    )
}
