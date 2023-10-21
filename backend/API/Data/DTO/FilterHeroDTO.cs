namespace Backend.API.Data.DTO
{
    public class FilterHeroDTO
    {
        public int IdCity { get; set; } = -1;
        public int IsMainCharacter { get; set; } = -1;
        public DateTime From { get; set; } = new DateTime(2023, 1, 1);
        public DateTime To { get; set; } = new DateTime(2023, 12, 1);
    }
}
