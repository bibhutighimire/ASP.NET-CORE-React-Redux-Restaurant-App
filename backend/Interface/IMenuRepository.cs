using MenuRestaurant.Models;

namespace MenuRestaurant.Interface
{
    public interface IMenuRepository
    {
        List<Menu> GetAllMenus();
        Menu GetMenuById(Guid Id);

        Menu DeleteMenuById(Guid Id);

        Menu PostMenu(Menu menu);
        Menu UpdateMenuById(Guid Id, Menu menu);
    }
}
