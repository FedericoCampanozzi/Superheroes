namespace Backend.API
{
    public class SuperHero
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public int IdCity { get; set; }
    }

    public class City
    {
        public int Id { get; set; }
        public string CodeNation { get; set; } = string.Empty;
        public string CityName { get; set; } = string.Empty;
    }
}
