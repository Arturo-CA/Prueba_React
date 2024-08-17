using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using WebApiCrud.Models;
using Microsoft.EntityFrameworkCore;
namespace WebApiCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly DbuserContext dbContext;
        public UserController(DbuserContext _dbContext)
        {
            dbContext = _dbContext;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUser(int id) {
            var user = await dbContext.Usuarios.FindAsync(id);
            if (user == null) { 
                return NotFound();
            }
            return user;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, Usuario user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            dbContext.Entry(user).State = EntityState.Modified;

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!dbContext.Usuarios.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


    }
}
