
type coursesType = {
    price: number
    title: string
}
const courses = [
    {title: "css", price: 110},
    {title: "js", price: 200},
    {title: "react", price: 150}
]

export const chipPredicate = (course: coursesType) => {
    return course.price < 160
}
