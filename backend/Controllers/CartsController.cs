using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MenuRestaurant.Data;
using MenuRestaurant.Models;

namespace MenuRestaurant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly DataContext _context;

        public CartsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cart>>> GetCarts()
        {
            return await _context.Carts.ToListAsync();
        }

        // GET: api/Carts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(Guid id)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }

        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(Guid id, Cart cart)
        {
            if (id != cart.Id)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
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

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            var idexists = await _context.Carts.Where(x=> x.MenuId == cart.MenuId).FirstOrDefaultAsync();
            if (idexists != null)
            {
                idexists.Quantity = cart.Quantity+idexists.Quantity;
                idexists.Price = cart.Price*idexists.Quantity;
                _context.SaveChanges();


            }
            else
            {
                Cart c=new Cart();
                c.Quantity = cart.Quantity;
                c.Price= cart.Price*c.Quantity;
                c.FoodName = cart.FoodName;
                c.MenuId= cart.MenuId;
                _context.Carts.Add(c);
                await _context.SaveChangesAsync();

            }
            return CreatedAtAction("GetCart", new { id = cart.Id }, cart);


        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(Guid id)
        {
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/carts/
        [HttpDelete]
        public async Task<IActionResult> DeleteAllOrder()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[8];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            var finalString = new String(stringChars);
            List<Cart> carts = _context.Carts.ToList();
            Order o = new Order();
            foreach (var cart in carts)
            {
                o.Id = cart.Id;
                o.FoodName = cart.FoodName;
                o.Price = cart.Price;
                o.Quantity = cart.Quantity;
                o.CartId = finalString;
                _context.Add(o);
                await _context.SaveChangesAsync();

            }
            _context.Carts.RemoveRange(carts);
            await _context.SaveChangesAsync();
            return NoContent();

        }
        [Route("/SumOfPrices")]
        [HttpGet()]
        //public async Task<ActionResult<IEnumerable<Order>>> DeleteAllOrder()
        public async Task<IActionResult> SumOfPrices()
        {
           
            int sumofprice = Convert.ToInt32(await _context.Carts.SumAsync(x=>x.Price));
           
            return Ok(sumofprice);
            // return await _context.Orders.ToListAsync();

        }

        private bool CartExists(Guid id)
        {
            return _context.Carts.Any(e => e.Id == id);
        }
    }
}
