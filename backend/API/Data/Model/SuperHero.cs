namespace Backend.API.Data.Model
{
    public class SuperHero
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public City City { get; set; } = new City(); 
        public bool IsMainCharacter { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime LastDateUpdate { get; set; }
        public string ImageURL { get; set; } = string.Empty;
    }
}
