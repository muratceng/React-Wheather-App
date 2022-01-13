import {useEffect} from 'react'
import Select from 'react-select'

function Header({city,changeCity}) {
    const optionsCity=[
        {value:"samsun",label:"samsun"},
        {value:"ankara",label:"ankara"},
        {value:"eskişehir",label:"eskişehir"},
        {value: "istanbul",label:"istanbul"}
    ]
  

    const handleCahnged = e =>{
        changeCity(e.value)
    }

    


    return (
        <div>
            <Select className='dropdown' options={optionsCity} onChange={handleCahnged} ></Select>
        </div>
    )
}

export default Header
