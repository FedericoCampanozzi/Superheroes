using Backend.API.Data;
using Backend.API.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Controllers.V1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    [Obsolete]
    public class CityController : Controller
    {
        private readonly DataContext _context;

        public CityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("read")]
        public async Task<ActionResult<List<SuperHero>>> GetCities()
        {
            return Ok(await _context.Cities.ToListAsync());
        }
    }
}
