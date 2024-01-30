using Locadora02.Data;
using Locadora02.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Locadora02.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeneroController : ControllerBase
    {

        private dbContext _context;

        public GeneroController(dbContext context)
        {
            _context = context;
        }

        #region GET
        [EnableCors("Policy1")]
        [HttpGet]
        public async Task<ActionResult<List<Genero>>> GetAllGeneros()
        {
            return Ok(await _context.Generos.ToListAsync());
        }


        [EnableCors("Policy1")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Genero>> GetGeneroById(int id)
        {
            var genero = await _context.Generos.FindAsync(id);
            if (genero is null) return NotFound();
            return Ok(genero);
        }

        #endregion

        #region POST
        [EnableCors("Policy1")]
        [HttpPost]
        public async Task<ActionResult<Genero>> PostGenero([FromBody] Genero genero)
        {

            _context.Generos.Add(genero);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGeneroById), new { id = genero.Id }, genero);
        }
        #endregion

        #region PUT
        [EnableCors("Policy1")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Genero>> PutGenero([FromBody] Genero generoEditado)
        {
            var dbGenero = await _context.Generos.FindAsync(generoEditado.Id);
            if (dbGenero is null) return NotFound();

            dbGenero.Nome = generoEditado.Nome;
            await _context.SaveChangesAsync();

            return Ok(dbGenero);

        }
        #endregion

        #region DELETE
        //Delete Genero
        [EnableCors("Policy1")]
        [HttpDelete("DeleteGeneroId/{id}")]

        public async Task<ActionResult<Genero>> DeleteGenero(int id)
        {
            Genero genero = await _context.Generos.FindAsync(id);
            if (genero is null) return NotFound();

            _context.Remove(genero);

            await _context.SaveChangesAsync();
            return Ok();
        }
        #endregion
    }
}
