export class FilterHeroDTO {
    idCity?: number = -1;
    isMainCharacter?: number = -1;
    from?: Date = new Date(2023,0,1);
    to?: Date = new Date(2024,0,1);
}