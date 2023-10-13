export class SuperHero {
    id?: number;
    name = "";
    firstName = "";
    lastName = "";
    idCity?: number;
    cityName = "";
    dateCreate?: Date;
    lastDateUpdate?: Date;
    isMainCharacter: boolean = false;
    imageURL? = undefined;

    public copyFrom(copy:SuperHero): SuperHero{
        let h: SuperHero = new SuperHero();
        
        h.id = copy.id == undefined ? 0 : copy.id;
        h.name = copy.name;
        h.firstName = copy.firstName;
        h.lastName = copy.lastName;
        h.idCity = copy.idCity == undefined ? 0 : copy.idCity;
        h.cityName = copy.cityName;
        h.dateCreate = copy.dateCreate;
        h.lastDateUpdate = copy.lastDateUpdate;
        h.isMainCharacter = copy.isMainCharacter;
        h.imageURL = copy.imageURL;

        return h;
    }
}