function MyList(){
    const countries = ["Ghana", "Kenya", "Nigeria", "Canada"]

    return(
        <ul>
            {
                countries.map((country, index)=> (
                    <li key={index}>{country}</li>
                ) )
            }
        </ul>
    )
}

export default MyList