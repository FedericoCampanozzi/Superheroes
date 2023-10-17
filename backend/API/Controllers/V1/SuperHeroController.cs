using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.API.Data;
using Backend.API.Data.Model;

namespace Backend.API.Controllers.V1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _context;

        public SuperHeroController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public async Task<ActionResult<List<SuperHero>>> CreateSuperHero(SuperHero hero, int Idcity)
        {
            var dbCity = await _context.Cities.FindAsync(Idcity);
            if (dbCity == null)
                return BadRequest("Hero not found.");

            hero.City = dbCity;
            _context.SuperHeroes.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpGet("read")]
        [Obsolete]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPut("update")]
        public async Task<ActionResult<List<SuperHero>>> UpdateSuperHero(SuperHero hero, int Idcity)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(hero.Id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            var dbCity = await _context.Cities.FindAsync(Idcity);
            if (dbCity == null)
                return BadRequest("Hero not found.");

            dbHero.Name = hero.Name;
            dbHero.FirstName = hero.FirstName;
            dbHero.LastName = hero.LastName;
            dbHero.IsMainCharacter = hero.IsMainCharacter;
            dbHero.LastDateUpdate = hero.LastDateUpdate;
            dbHero.ImageURL = hero.ImageURL;
            dbHero.City = dbCity;

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpDelete("delete")]
        public async Task<ActionResult<List<SuperHero>>> DeleteSuperHero(int id)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(id);
            if (dbHero == null)
                return BadRequest("Hero not found.");

            _context.SuperHeroes.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }
    }
}
