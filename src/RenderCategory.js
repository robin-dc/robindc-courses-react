export default function RenderCategory({data, getCourse, setInput}){
    const uniqueCategories = [...new Set(data.map(item => item.category))];

    return (
        uniqueCategories.map(category => {
            return <button className="text-tertiary py-[0.5rem] px-1 font-semibold hover:text-white filter-btn" data-id={category} key={category} onClick={() => {
                getCourse(category)
                setInput('')
            }}>{category}</button>
        })
    )
}
