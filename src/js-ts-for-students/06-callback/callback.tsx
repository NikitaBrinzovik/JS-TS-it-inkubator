import {ChangeEvent, MouseEventHandler} from "react"

export const User = () => {
    const deleteUser = () => {

        alert('user deleted')
        //alert(event.currentTarget.name)
    }
    const addUser = () => {
        alert('user added')
    }
    const onNameChanged = () => {
        console.log("name changed")
    }
    const focusLost = () => {
        console.log('focus lost')
    }
    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log("aaaaa" + event.currentTarget)
    }
    return <div>
        <textarea name="" id="" onChange={onNameChanged} onBlur={focusLost}>Nik</textarea>
        <button onClick={deleteUser} name="delete">-</button>
        <button onClick={addUser} name="delete">+</button>
        <input type={"number"} onBlur={focusLost} onChange={onAgeChanged}/>
    </div>
}