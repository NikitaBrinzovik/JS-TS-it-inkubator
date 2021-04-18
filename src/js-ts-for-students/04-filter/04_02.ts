import {CityType, TypeGovermentB} from "../02-objects/02_02";


export function deleteHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !==street)

}

export const getBuildingWithStaffCountMoreThen = (buildings: Array<TypeGovermentB>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}