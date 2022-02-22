import React, { useState } from 'react';

export default function Authorize() {
   const code = 'kk3cex8xoCxm_rPl1_RHqEXgG1E6B9kDDHWEYZBHnps';
   const [redirect_uri, setRedirectUri] = useState('');  
   const [state, setState] = useState('');  
   
   React.useEffect(() => {
    const redirect_uri = new URLSearchParams(
        window.location.search.split("").slice(1).join("")
    ).get("redirect_uri");

    if(redirect_uri){
        setRedirectUri(redirect_uri);
    }

    const state = new URLSearchParams(
        window.location.search.split("").slice(1).join("")
    ).get("state");

    if(state){
        setState(state);
    }

    }, []);



    const generateAuthCode = () => {
        window.location.href = redirect_uri + "?code="+code+"&state="+state;
    }

  return <>
    <label>Username: </label>
    <label>Password: </label>
    <button onClick={generateAuthCode}>Submit</button>
  </>
}