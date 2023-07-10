import Form from "./Form";

export default function Navbar({setInput, input}){
    return (
        <header>
            <nav className="container flex justify-between py-2">
                <a href="index.html" className="font-bold text-[1.5rem] text-secondary">DEVELOPEROBIN</a>
                <div className="flex gap-[0.5rem] items-center">
                    <a href="https://github.com/robin-dc/robindc-courses" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-pColor text-2xl md:mr-[0.5rem]"></i></a>
                    <Form setInput={setInput} input={input}/>
                </div>
            </nav>
        </header>
    )
}
