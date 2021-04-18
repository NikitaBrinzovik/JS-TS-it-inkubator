type SkillType = {
    id: number
    name: string
}

type LocalAddressType = {
    street: string
    building: number
    apartments: number
    city: LocalCityType
}

type LocalCityType = {
    name: string
    country: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<string>
    skills: Array<SkillType>
}

const student: StudentType = {
    id: 1,
    name: "Nikita",
    age: 29,
    isActive: true,
    address: {

        street: "The best one",
        building: 11,
        apartments: 22222,
        city: {
            name:"Saint-Petersburg",
            country: "Russia"
        },
    },

    technologies: [
        "css", "html", "react", 'ts', 'js'
    ],
    skills: [
        {
            id: 1,
            name: "copy-paste",

        },
        {
            id: 2,
            name: "watch youtube",

        },
        {
            id: 3,
            name: "crying on homework",

        }
    ],
};

console.log(student.name);
console.log(student.address.city.name);
console.log(student.address.city);
console.log(student.technologies[2]);
console.log(student.skills[2].name);