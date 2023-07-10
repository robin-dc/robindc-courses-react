import RenderCategory from "./RenderCategory";
import RenderCourses from "./RenderCourses";
import Search from "./Search";

export default function Courses({activeCourse, setActiveCourse, data, input, setInput}){

    const getCourse = (course) => {
        setActiveCourse(course)
    }

    return (
        <main className="container pt-2 pb-5">
            <h1 className="text-3xl font-extrabold text-white text-center">COURSES</h1>
            <p className="font-medium text-pColor text-center">These are the courses I personally took that helped me in my journey.</p>
            <div className="flex justify-center mt-3 bg-bColor rounded-md py-[0.5rem] gap-0 md:gap-2 z-[9999999] flex-wrap sticky top-0 filter-btns">
                <button className="text-tertiary py-[0.5rem] px-1 font-semibold hover:text-white filter-btn all" data-id="All" onClick={() => getCourse('All')}>ALL</button>
                <RenderCategory data={data} getCourse={getCourse} setInput={setInput}/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 py-4 course-container gap-[0.5rem] md:gap-1">
                {input ? <Search data={data} input={input}/> : activeCourse && <RenderCourses data={data} active={activeCourse}/>}
            </div>
        </main>
    )
}
