using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MenuRestaurant.Data;
using MenuRestaurant.Models;
using MenuRestaurant.Interface;

namespace MenuRestaurant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenusController : ControllerBase
    {
        private readonly IMenuRepository _menuRepository;

        public MenusController(IMenuRepository menuRepository)
        {
            _menuRepository = menuRepository;
        }

        // GET: api/Menus
        [HttpGet]
        public ActionResult<Menu> GetMenus()
        {
            var menus = _menuRepository.GetAllMenus();
            return Ok(menus);
        }

        // GET: api/Menus/5
        [HttpGet("{id}")]
        public ActionResult<Menu> GetMenu(Guid id)
        {
            var menu = _menuRepository.GetMenuById(id);
            return Ok(menu);
        }

        // PUT: api/Menus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult<Menu> PutMenu(Guid id, Menu menu)
        {
            var menuupdate = _menuRepository.UpdateMenuById(id, menu);
            return Ok(menuupdate);
        }

        // POST: api/Menus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Menu> PostMenu(Menu menu)
        {
            var menupost = _menuRepository.PostMenu(menu);
            return Ok(menupost);
        }

        // DELETE: api/Menus/5
        [HttpDelete("{id}")]
        public ActionResult<Menu> DeleteMenu(Guid id)
        {
            var menu = _menuRepository.DeleteMenuById(id);
            return Ok(menu);
        }

    }
}
