import Alert, { AlertColor } from '@mui/material/Alert';
import React from 'react';

function FeedBackHelper({message ="nullMessage",open = false,severity = 'error' as AlertColor}) {
        const [isOpen, setOpen] = React.useState(open);
        

        React.useEffect(()=>{
            setOpen(open)
            console.log(open)
        },[open])

    return (
        isOpen ? <Alert  className='alertCustom' severity={severity} onClose={()=>setOpen(false)}>{message}</Alert> : <></>
    )
}

export default FeedBackHelper