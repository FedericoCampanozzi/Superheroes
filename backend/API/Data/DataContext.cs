using Microsoft.EntityFrameworkCore;
using Backend.API.Data.Model;

namespace Backend.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();
        public DbSet<City> Cities => Set<City>();
    }
}
