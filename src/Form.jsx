import React, { useState } from 'react';

const Form = () => {
    const [text, setText] = useState('');
    const [blur, setBlur] = useState(false);
    const [sended, setSended] = useState(false);

    const handleSetText = (e) => {
        setText(e.target.value);
        setSended(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            console.log(text);
            setText('');
            setBlur(false);
            setSended(true);
        }
    };

    const handleSetBlur = () => {
        setBlur(true);
        setSended(false);
    };

    return (
        <div className='main'>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            onBlur={handleSetBlur} 
            value={text} onChange={handleSetText} 
            />
            <button disabled={!text}>click</button>
        </form>
        {!text && blur ? <div>empty</div> : null}
        {sended && <div>Отправлено</div>}
        </div>
    );

};


export default Form;