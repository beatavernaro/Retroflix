using Locadora02.Data;
using Locadora02.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Locadora02.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmeController : ControllerBase
    {
        private dbContext _context;

        public FilmeController(dbContext context)
        {
            _context = context;
        }

        #region GET
        [EnableCors("Policy1")]
        [HttpGet]
        public async Task<ActionResult<List<Filme>>> GetAllFilme()
        {
            return Ok(await _context.Filmes.ToListAsync());
        }

        [EnableCors("Policy1")]
        [HttpGet("{id}")]
        public async Task<ActionResult<Filme>> GetFilmeById(int id)
        {
            Filme filme = await _context.Filmes.FirstOrDefaultAsync(filme => filme.Id == id);
            if (filme is null) return NotFound();
            return Ok(filme);
        }
        #endregion

        #region POST
        [EnableCors("Policy1")]
        [HttpPost]
        public async Task<ActionResult<Filme>> PostFilme([FromBody] Filme filme)
        {
            _context.Filmes.Add(filme);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFilmeById), new { id = filme.Id }, filme);

        }
        #endregion

        #region PUT
        [EnableCors("Policy1")]
        [HttpPut("{id}")]
        public async Task<ActionResult<Filme>> PutFilme([FromBody] Filme filmeEditado)
        {
            var dbFilme = await _context.Filmes.FindAsync(filmeEditado.Id);
            if (dbFilme is null) return NotFound();

            dbFilme.NomeFilme = filmeEditado.NomeFilme;
            dbFilme.Diretor = filmeEditado.Diretor;
            dbFilme.Genero = filmeEditado.Genero;
            dbFilme.Imagem = filmeEditado.Imagem;
            dbFilme.Duracao = filmeEditado.Duracao;
            dbFilme.Sinopse = filmeEditado.Sinopse;

            await _context.SaveChangesAsync();
            return Ok(dbFilme);
        }
        #endregion

        #region DELETE
        [EnableCors("Policy1")]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Filme>> DeleteFilme(int id)
        {
            var dbFilme = _context.Filmes.FirstOrDefault(filme => filme.Id == id);
            if (dbFilme is null) return NotFound();

            _context.Remove(dbFilme);
            await _context.SaveChangesAsync();

            return Ok();
        }
        #endregion
    }
}
