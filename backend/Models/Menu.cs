namespace MenuRestaurant.Models
{
    public class Menu
    {
        public Guid Id { get; set; }
        public string? FoodName { get; set; }
        public string? FoodType { get; set; }

        public int? Price { get; set; }
        public string? FoodCourse { get; set; }
    }
}
