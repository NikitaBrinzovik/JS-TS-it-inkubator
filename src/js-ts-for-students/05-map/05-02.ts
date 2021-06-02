import {TypeGovermentB, TypeHouses} from "../02-objects/02_02";

export const getStreetsGovBuildngs =
    (buildings: Array<TypeGovermentB>) => {
    return buildings.map( b => b.address.title)
} ;

export const getStreetTittlesOfHouses =
    (houses: Array<TypeHouses>) => {
    return houses.map( b => b.address.street.title)
} ;

export const createMessages = (houses: Array<TypeHouses>) => {
    return houses.map( h => `Hello to ${h.address.street.title}`)
}
