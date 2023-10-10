using Backend.API.Data;
using Backend.API.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
