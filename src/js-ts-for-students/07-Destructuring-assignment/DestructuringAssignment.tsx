import {useState} from "react";


type LessonType = {
    title: string
}
export type MainType = {
    name: string
    age: number
    lessons: Array<LessonType>//Array<title: string>
    address: {
        street: {
            title: string
        }
    }

}
type PropsType = {
    title: string
    man: MainType

}

let proops = {
    name: "Nick",
    age: 29,
    lessons: [{title: "1"}, {title: "2"},],
    address:{
        street:{
            title:"ssssss street"
        }
    }
}
export const ManComponents: React.FC<PropsType> = (proops) => {
    // const {title} = props;
    // const {name} = props.man;
    const {title, man:{name}} = proops;



    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
            {proops.man.age}
        </div>
    </div>
}

const PrimerComp: React.FC<PropsType> = ({title, ...proops}) => {
    return <div>
        {title}
        {proops.man}//через остаточные парам-ры
    </div>
}
const Primer2Comp: React.FC<PropsType> = (proops) => {
    const {man, ...restProps} = proops//дали имя остаточным парам
    return <div>
        {restProps.title}
        {man}
    </div>
}

const Primer3Comp: React.FC<PropsType> = (proops) => {
    const {man, ...restProps} = proops//дали имя остаточным парам

    const [message, setMessage] = useState<string>("hello")

    return <div>
        {restProps.title}
        {man}
    </div>
}