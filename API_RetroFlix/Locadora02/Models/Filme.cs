using System.ComponentModel.DataAnnotations;

namespace Locadora02.Models
{

    public class Filme
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string NomeFilme { get; set; }
        public int Genero { get; set; }
        public string Imagem { get; set; }
        public int Duracao { get; set; }
        public string Diretor { get; set; }
        public string Sinopse { get; set; }

    }
}
