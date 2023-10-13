using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.API.Data;
using Backend.API.Data.Model;
using Newtonsoft.Json;

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
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes([FromBody] string _json_content)
        {
            Dictionary<string, object> parametri = JsonConvert.DeserializeObject<Dictionary<string, object>>(_json_content);
            Console.WriteLine(parametri);
            return Ok(await 
                (
                    from sp in _context.SuperHeroes
                    from c in _context.Cities
                    where sp.City.Id == c.Id && 
                        (Convert.ToInt32(parametri["idCity"]) == c.Id || Convert.ToInt32(parametri["idCity"]) == -1) &&
                        (Convert.ToBoolean(parametri["isMainCharacter"])) &&
                        Convert.ToDateTime(parametri["from"]) >= sp.DateCreate &&
                        Convert.ToDateTime(parametri["to"]) <= sp.DateCreate
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
