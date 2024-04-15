export const SearchBar=({className}:{className:string})=>{
    return(
        <div className={className}>
            <fieldset >
                <legend>Search your favorites songs</legend>
                <form className={"search-form"}>
                    <input type={"text"} className={"w-90 m-5"} placeholder={"hola"}/>
                    <button type={"submit"}>Search</button>
                </form>
            </fieldset>

        </div>
    )
}