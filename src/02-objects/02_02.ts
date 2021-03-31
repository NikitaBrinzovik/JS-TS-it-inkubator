export type TypeStreet = {
    title: string
}

export type TypeAddress = {
    number: number
    street: TypeStreet
}

export type TypeHouses = {
    buildAt: number
    repaired: boolean
    address: TypeAddress
}

export type CityType = {
    title: string
    houses: Array<TypeHouses>
    governmentBuildings: Array<string>
    citizensNumber: number

}