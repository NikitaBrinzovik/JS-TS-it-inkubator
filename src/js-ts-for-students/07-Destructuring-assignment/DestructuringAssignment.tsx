

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

export const ManComponents: React.FC<PropsType> = (props) => {
    // const {title} = props;
    // const {name} = props.man;
    const {title, man:{name}} = props;



    return <div>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>
}