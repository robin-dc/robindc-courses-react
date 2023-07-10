export default function RenderCourses({data, active}){
    const filteredCourse = active === 'All' ? data : data.filter(course => course.category === active)
    return (
        filteredCourse.map(course => {
            return <div class="flex justify-center flex-col gap-1 pb-1 bg-bColor rounded-md overflow-hidden" key={course.id}>
                        <div class="w-full relative h-7 md:h-9">
                            <iframe src={`https://www.youtube.com/embed/${course.link}`} frameborder="0" allowfullscreen  padding="0px" class=" lazyload z-[999] mt-0 pt-0 opacity-100 w-full absolute left-0 top-0 right-0 h-7 md:h-9" title={course.category}></iframe>
                            <img src="https://i.ytimg.com/vi/uWPkwkvz770/maxresdefault.jpg" alt="Course Thumbnail" class="w-full absolute left-0 top-0 right-0 h-full z-10 opacity-60 pulse pointer-events-none"/>
                        </div>
                        <h4 class="text-white font-medium text-sm md:text-base px-[0.5rem] md:px-1">{course.title}</h4>
                        <ul class="flex gap-[0.2rem] md:gap-[0.5rem] self-start px-[0.5rem] md:px-1">
                            <li class="text-[#90c53f] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#coding</small> </li>
                            <li class="text-[#00d8ff] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#webdev</small> </li>
                            <li class="text-[#f0db4f]  px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#bscpe</small> </li>
                        </ul>
                    </div>
        })

    )
}
