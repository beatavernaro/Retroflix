using Locadora02.Models;
using Microsoft.EntityFrameworkCore;

namespace Locadora02.Data
{
    public class dbContext : DbContext
    {
        public dbContext(DbContextOptions<dbContext> opts) : base(opts)
        {
        }
        public DbSet<Filme> Filmes { get; set; }
        public DbSet<Genero> Generos { get; set; }

    }
}
