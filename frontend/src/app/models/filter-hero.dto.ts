export class FilterHeroDTO {
    idCity?: number = -1;
    isMainCharacter?: boolean = false;
    from?: Date = new Date(2023,1,1);
    to?: Date = new Date(2024,1,1);;
}