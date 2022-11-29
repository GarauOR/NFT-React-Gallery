import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { currencyAPI } from '../utilities/utilities';


function Currency(props) {
    const [currency1, setCurrency1] = useState("eth");
    const [currency2, setCurrency2] = useState("gbp");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [inputVal, setInputVal] = useState("");
    
    const handleChange1 = (e) => {
        setCurrency1(e.target.value)
    };
    const handleChange2 = (e) => {
        setCurrency2(e.target.value)
    };
    const exchange = () => {
        return inputVal * value2 / value1
        };
    
    useEffect(() => {
        async function fetchData() {
            setValue1(await currencyAPI(currency1));
            setValue2(await currencyAPI(currency2));    
        }
        fetchData();
    }, [currency1, currency2]);



    return (
        <div className="currencyCont">
            <input type="number" placeholder="Enter a value here..." onChange={(e)=>{setInputVal(e.target.value)}}></input>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency1}
                    label="Currency"
                    onChange={handleChange1}
                >
                    <MenuItem value={"eth"}>Ethereum</MenuItem>
                    <MenuItem value={"btc"}>Bitcoin</MenuItem>
                    <MenuItem value={"doge"}>Dogecoin</MenuItem>
                    <MenuItem value={"eur"}>Euro</MenuItem>
                    <MenuItem value={"gbp"}>GB Pound</MenuItem>
                    <MenuItem value={"usd"}>US Dollar</MenuItem>
                </Select>
            </FormControl>
            <p id="exchange">{ exchange() }</p>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currency2}
                    label="Currency"
                    onChange={handleChange2}
                >
                    <MenuItem value={"eth"}>Ethereum</MenuItem>
                    <MenuItem value={"btc"}>Bitcoin</MenuItem>
                    <MenuItem value={"doge"}>Dogecoin</MenuItem>
                    <MenuItem value={"eur"}>Euro</MenuItem>
                    <MenuItem value={"gbp"}>GB Pound</MenuItem>
                    <MenuItem value={"usd"}>US Dollar</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}

export default Currency;