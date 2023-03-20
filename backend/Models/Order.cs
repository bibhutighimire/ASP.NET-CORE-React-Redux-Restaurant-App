namespace MenuRestaurant.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string? FoodName { get; set; }
        public int? Quantity { get; set; }
        public int? Price { get; set; }
        public List<Cart>? Cart { get; set; }
        public string? CartId { get; set; }
    }
}
