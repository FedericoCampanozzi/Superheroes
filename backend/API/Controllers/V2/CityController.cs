using Backend.API.Data;
using Backend.API.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Controllers.V2
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("2.0")]
    public class CityController : Controller
    {
        private readonly DataContext _context;

        public CityController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("read-test-v2")]
        public async Task<ActionResult<List<SuperHero>>> GetCities()
        {
            return Ok(await _context.Cities.ToListAsync());
        }
    }
}
