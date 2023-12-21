import React, { useEffect, useRef, useState } from 'react'

const UseRefComp = () => {
    console.log("Render => useRefComp");
    const [text, setText] = useState("");
    const inputRef = useRef();
    const divRef = useRef();

    const handleSearch=()=> {
        console.log(text);
        console.log(inputRef);
        console.log(inputRef.current.value);
        console.log(divRef.current);
        console.log(divRef.current.lastElementChild);
        console.log(divRef.current.lastElementChild.lastElementChild);
        console.log(divRef.current.lastElementChild.lastElementChild.innerText);
    };

    useEffect(() => {
     inputRef.current.focus();
    }, [])
    
    return (
        <div ref={divRef}>UseRefComp
            <div style={{display:"flex", justifyContent:"center"}}>
                {/* <input 
                onChange={(e)=> setText(e.target.value)} 
                type="text" 
                ref={inputRef} /> */}
                <input 
                //onChange={(e)=> setText(e.target.value)} 
                type="text" 
                ref={inputRef} />
                <button onClick={handleSearch} type="button">Search</button>
            </div>
        </div>
    );
}; 
export default UseRefComp;