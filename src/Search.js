export default function Search({data, input}){
    const filteredCourse = data.filter(course => course.title.toLowerCase().includes(input.toLowerCase()) )
    return (

        filteredCourse.length > 0 ? filteredCourse.map(course => {
            return <div className="flex justify-center flex-col gap-1 pb-1 bg-bColor rounded-md overflow-hidden" key={course.id}>
                        <div className="w-full relative h-7 md:h-9">
                            <iframe src={`https://www.youtube.com/embed/${course.link}`} frameborder="0" allowfullscreen  padding="0px" className=" lazyload z-[999] mt-0 pt-0 opacity-100 w-full absolute left-0 top-0 right-0 h-7 md:h-9" title={course.category}></iframe>
                            <img src="https://i.ytimg.com/vi/uWPkwkvz770/maxresdefault.jpg" alt="Course Thumbnail" className="w-full absolute left-0 top-0 right-0 h-full z-10 opacity-60 pulse pointer-events-none"/>
                        </div>
                        <h4 className="text-white font-medium text-sm md:text-base px-[0.5rem] md:px-1">{course.title}</h4>
                        <ul className="flex gap-[0.2rem] md:gap-[0.5rem] self-start px-[0.5rem] md:px-1">
                            <li className="text-[#90c53f] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small className="text-[0.6rem] md:text-[0.8rem]">#coding</small> </li>
                            <li className="text-[#00d8ff] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small className="text-[0.6rem] md:text-[0.8rem]">#webdev</small> </li>
                            <li className="text-[#f0db4f]  px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small className="text-[0.6rem] md:text-[0.8rem]">#bscpe</small> </li>
                        </ul>
                    </div>
        }) : <div className="text-3xl absolute left-1/2 -translate-x-1/2 text-gray-400">404 Not Found 🚀</div>

    )
}
