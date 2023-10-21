using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.API.Data;
using Backend.API.Data.Model;
using Backend.API.Data.DTO;

namespace Backend.API.Controllers.V2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _context;

        public SuperHeroController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("read")]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes(FilterHeroDTO filter)
        {
            return Ok(await 
                (
                    from sp in _context.SuperHeroes
                    from c in _context.Cities
                    where sp.City.Id == c.Id && // join
                        (filter.IdCity == -1 || filter.IdCity == c.Id) && 
                        (filter.IsMainCharacter == -1 || sp.IsMainCharacter == Convert.ToBoolean(filter.IsMainCharacter)) &&
                        sp.DateCreate >= filter.From && sp.DateCreate <= filter.To
                    select new
                    {
                        sp.Id,
                        sp.DateCreate,
                        sp.LastDateUpdate,
                        sp.Name,
                        sp.FirstName,
                        sp.LastName,
                        idCity = c.Id,
                        c.CityName,
                        sp.IsMainCharacter,
                        sp.ImageURL
                    }
                )
                .ToListAsync());
        }
    }
}
