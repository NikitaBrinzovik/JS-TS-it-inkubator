export type TypeStreet = {
    title: string
}

export type TypeAddress = {
    number: number
    street: TypeStreet
}

export type TypeHouses = {
    id?: number
    buildAt: number
    repaired: boolean
    address: TypeAddress
}

export type CityType = {
    title: string
    houses: Array<TypeHouses>
    governmentBuildings: Array<TypeGovermentB>
    citizensNumber: number

}

export type TypeGovermentB = {
    type: string
    address: TypeStreet
    // number: number
    staffCount: number
}