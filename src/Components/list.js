import Listitem from "./listItem"

function List(){
    const Arr = [
        "Wake up",
        "Morning exercise",
        "Breakfast",
        "Commute to work/school",
        "Work/study",
        "Lunch",
        "Afternoon tasks",
        "Commute back home",
        "Dinner",
        "Evening relaxation",
        "Read/Watch TV/Listen to music",
        "Bedtime routine",
        "Sleep"
    ]

    return(
        <>
            <h1>List of Activities</h1>
            {
                Arr.map((data)=>{
                    return <Listitem activity = {data}></Listitem>
                })
            }            
        </>
    )
}

export default List