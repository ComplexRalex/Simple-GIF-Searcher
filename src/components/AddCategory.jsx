import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = ({ target }) => setInputValue(target.value);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        const value = inputValue.trim();
        
        if (value.length == 0) return;
        
        onNewCategory(value);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="¡Busca gifs, como 'One Punch Man'!"
                value={inputValue}
                onChange={onChangeHandler}
            />
        </form>
    )
}
