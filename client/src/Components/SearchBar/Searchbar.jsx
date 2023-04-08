import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { countryByName } from "../../redux/actions"

const SearchBar = () =>{
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const handleChange = (event) =>{
        setName(event.target.value)
    }


    useEffect(()=>{
        dispatch(countryByName(name))
    },[name,dispatch])

    


    // console.log(name)

    return(
        <div>
            <input onChange={handleChange} type="text" placeholder="Search Countries.."/>
        </div>
    )
}


export default SearchBar