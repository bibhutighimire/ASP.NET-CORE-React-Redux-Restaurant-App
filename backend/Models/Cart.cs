namespace MenuRestaurant.Models
{
    public class Cart
    {
        public Guid Id { get; set; }
        public string? FoodName { get; set; }
        public int? Quantity { get; set; }
        public int? Price { get; set; }
        public string? MenuId { get; set; }

        //public Menu Menu { get; set; }

    }
}
