export class SuperHero {
    id?: number;
    name = "";
    firstName = "";
    lastName = "";
    idCity?: number;

    public copyFrom(copy:SuperHero): SuperHero{
        let h: SuperHero = new SuperHero();
        h.id = copy.id;
        h.name = copy.name;
        h.firstName = copy.firstName;
        h.lastName = copy.lastName;
        h.idCity = copy.idCity;

        return h;
    }
}