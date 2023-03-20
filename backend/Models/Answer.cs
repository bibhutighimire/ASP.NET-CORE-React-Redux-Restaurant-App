namespace MenuRestaurant.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public string? AnswerOne { get; set; }
        public string? AnswerTwo { get; set; }
        public string? AnswerThree { get; set; }

        public Guid QuestionId { get; set; }
        public Question? Question { get; set; }

        public bool? CorrectAnswer { get; set; }
    }
}
