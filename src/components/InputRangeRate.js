import React, {useState} from 'react'
// import ReactDOM from 'react-dom';
import 'react-input-range/lib/css/index.css'
import InputRange from 'react-input-range';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InputRangeRate(props) {

    let [value, setValue] = useState({min: 0, max: 10})
    let onChange = (value) => {
        setValue(value)
        props.onFilterRating(value)
    }

    return (
        <form className="w-50 text-center " >
            <InputRange 
                style={{ color: 'red' }}
                maxValue={10}
                minValue={0}
                value={value}
                onChange={onChange} 
                
                 />
                <span style={{ color: 'yellow' }}>Rating</span>
        </form>
    )
}
