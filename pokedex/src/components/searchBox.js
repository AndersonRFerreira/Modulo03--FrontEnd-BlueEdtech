export default function searchBox (filter){
    return(
        <div className="search">
            <input 
                type="text"
                placeholder={filter.placeholder}
                onChange={filter.action}
                />
            
        </div>
    )
}