import React, {useEffect, useState} from 'react';
import {Popover, OverlayTrigger, Button, Image} from "react-bootstrap";
import tooltip_img from "../../img/tooltip.png"
import {getStringData} from "../../lib/GetData";

export function MyToolTip({url, keyName="", title, custom="",
                              defaultTitle="Title Loading", defaultMain="Loading..."}) {

    const [main, setMain] = useState("")
    //console.log(url)
    useEffect(()=>{
        if (custom===""){
            getStringData(url).then(res=>{
                if(keyName===""){
                    setMain(res)
                }else{
                    setMain(res[keyName])
                }
            }).catch(err=>{
                setMain("Error on getting data")
            })
        }else{
            setMain(custom)
        }

    },[url])


    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>
                {main}
            </Popover.Content>
        </Popover>
    );

    const RenderPopup = () => (
        <OverlayTrigger  trigger="click" placement="right" overlay={popover}>
            {/*<Button variant="success"></Button>*/}
                <Image className={"m-2"} src={tooltip_img} style={{height:"20px"}} fluid></Image>
        </OverlayTrigger>
    );

    return (
        <RenderPopup />
    );
}

export default MyToolTip;