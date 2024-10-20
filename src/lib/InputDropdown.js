import React, {useEffect} from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

export function InputDropdown({title, list, keyName, status, selection, setSelection}) {

    useEffect(()=>{
    },[status])

    function renderList(){
        if (status && list){
            return (
                <>
                    {
                        list.map((item,index)=>{
                            return (
                                <Dropdown.Item
                                    key={index}
                                    as="button"
                                    onClick={()=>changeToSelected(index)}>
                                {item[keyName]}
                                </Dropdown.Item>)
                        })
                    }
                </>
            )

        }else{
            return (<Dropdown.Item as="button">Loading...</Dropdown.Item>)
        }
    }
    function changeToSelected(index){

        setSelection(list[index][keyName])
    }

    return (
        <DropdownButton id="dropdown-item-button"
                        variant={"danger"}
                        title={selection ? selection :`Select ${title}...`}>
            {
                renderList()
            }
        </DropdownButton>
    );
}

export default InputDropdown;