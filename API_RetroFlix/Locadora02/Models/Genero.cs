using System.ComponentModel.DataAnnotations;

namespace Locadora02.Models
{
    public class Genero
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Nome { get; set; }

    }
}
