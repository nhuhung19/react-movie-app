import React, {useState} from 'react'
// import ReactDOM from 'react-dom';
import 'react-input-range/lib/css/index.css'
import InputRange from 'react-input-range';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InputRangeRate() {

    let [value, setValue] = useState({min: 0, max: 10})
    let onChange = (value) => {
        setValue(value)
    }

    return (
        <form className="w-50 ml-5 ">
            <InputRange
                maxValue={10}
                minValue={0}
                value={value}
                onChange={onChange} />
        </form>
    )
}
