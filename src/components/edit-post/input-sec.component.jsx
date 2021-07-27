import { Err, Input } from "./edit-post.components"

const InputSec = ({name, handleInputChange, err, value}) => {
    return (
        <Input>
            <label htmlFor={name}>{name}</label>
            {
                name === 'body' ?  <textarea onChange={(e) => handleInputChange(e.target.value, name)} id="body" rows="5" placeholder={name} value={value === undefined ? '' : value} ></textarea>
                                : <input onChange={(e) => handleInputChange(e.target.value, name)} id={name} placeholder={name} value={value === undefined ? '' : value} />
            }
            {err && <Err>{err}</Err>}
        </Input>
    )
}

export default InputSec
