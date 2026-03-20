const questions = [
  {
    question: "She ___ a student.",
    options: ["am", "is", "are", "be"]
  },
  {
    question: "___ name is Karen.",
    options: ["I", "My", "Me", "Mine"]
  },
  {
    question: "They ___ from Armenia.",
    options: ["is", "am", "are", "be"]
  },
  {
    question: "This is ___ apple.",
    options: ["a", "an", "the", "-"]
  },
  {
    question: "___ you like tea?",
    options: ["Do", "Does", "Is", "Are"]
  },
  {
    question: "He ___ not play football.",
    options: ["do", "does", "is", "are"]
  },
  {
    question: "There ___ one book on the table.",
    options: ["is", "are", "am", "be"]
  },
  {
    question: "What time ___ you wake up?",
    options: ["do", "does", "is", "are"]
  },
  {
    question: "I ___ got a new phone.",
    options: ["have", "has", "am", "is"]
  },
  {
    question: "Yesterday was ___.",
    options: ["sun", "sunny", "sunly", "suns"]
  },
  {
    question: "She ___ to school every day.",
    options: ["go", "goes", "going", "went"]
  },
  {
    question: "This bag is ___ than that one.",
    options: ["big", "bigger", "biggest", "more big"]
  },
  {
    question: "Yesterday I ___ to the cinema.",
    options: ["go", "goes", "went", "going"]
  },
  {
    question: "We ___ watching TV now.",
    options: ["is", "are", "am", "be"]
  },
  {
    question: "___ you ever been to Gyumri?",
    options: ["Did", "Have", "Do", "Are"]
  },
  {
    question: "There isn't ___ milk in the fridge.",
    options: ["some", "any", "many", "a"]
  },
  {
    question: "She can ___ very well.",
    options: ["sing", "sings", "singing", "sang"]
  },
  {
    question: "This is the ___ film I have seen.",
    options: ["good", "better", "best", "well"]
  },
  {
    question: "I usually get up ___ 7 o'clock.",
    options: ["in", "on", "at", "to"]
  },
  {
    question: "He ___ his homework last night.",
    options: ["do", "does", "did", "doing"]
  },
  {
    question: "I ___ in Yerevan since 2015.",
    options: ["live", "lived", "have lived", "am living"]
  },
  {
    question: "If it ___ tomorrow, we will stay home.",
    options: ["rain", "rains", "rained", "will rain"]
  },
  {
    question: "The book ___ by my friend yesterday.",
    options: ["gave", "was given", "is given", "gives"]
  },
  {
    question: "She asked me ___ I was tired.",
    options: ["if", "that", "what", "where"]
  },
  {
    question: "I wish I ___ more money.",
    options: ["have", "had", "will have", "would have"]
  },
  {
    question: "By next summer we ___ this course.",
    options: ["will finish", "will have finished", "finish", "finished"]
  },
  {
    question: "You ___ drive so fast - it's dangerous.",
    options: ["mustn't", "don't have to", "shouldn't", "needn't"]
  },
  {
    question: "He is the boy ___ brother won the competition.",
    options: ["who", "which", "whose", "that"]
  },
  {
    question: "If I ___ you, I would apologise.",
    options: ["am", "was", "were", "be"]
  },
  {
    question: "She ___ to London three times this year.",
    options: ["was", "has been", "went", "goes"]
  }
];

const correctAnswers = [
  "b","b","c","b","a","b","a","a","a","b",
  "b","b","c","b","b","b","a","c","c","c",
  "c","b","b","a","b","b","a","c","c","b"
];

function getLevel(score) {
  if (score >= 27) return "B1+ / B1 (Strong)";
  if (score >= 23) return "B1 (Intermediate)";
  if (score >= 19) return "A2+ / B1 (Start)";
  if (score >= 15) return "A2 (Elementary)";
  if (score >= 11) return "A1+ / A2 (Start)";
  if (score >= 7) return "A1 (Beginner)";
  return "Pre-A1";
}