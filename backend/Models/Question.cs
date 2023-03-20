﻿namespace MenuRestaurant.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string? QuestionName { get; set; }
        public List<Answer>? Answers { get; set; }
    }
}
