import ResultTypes from "./ResultTypes";

const genId = () => {
  return Math.floor(Math.random() * 899999) + 100000;
};

const upperSection = [
  {
    id: genId(),
    category: ">>Aces<<",
    description: "The sum of a dice with the number 1",
    calc: ResultTypes.sumOfType(1),
  },
  {
    id: genId(),
    category: ">>Twos<<",
    description: "The sum of a dice with the number 2",
    calc: ResultTypes.sumOfType(2),
  },
  {
    id: genId(),
    category: ">>Threes<<",
    description: "The sum of a dice with the number 3",
    calc: ResultTypes.sumOfType(3),
  },
  {
    id: genId(),
    category: ">>Fours<<",
    description: "The sum of a dice with the number 4",
    calc: ResultTypes.sumOfType(4),
  },
  {
    id: genId(),
    category: ">>Fives<<",
    description: "The sum of a dice with the number 5",
    calc: ResultTypes.sumOfType(5),
  },
  {
    id: genId(),
    category: ">>Sixes<<",
    description: "The sum of a dice with the number 6",
    calc: ResultTypes.sumOfType(6),
  },
];

const lowerSection = [
  {
    id: genId(),
    category: "Three of a kind",
    description: "At least three dice are the same",
    calc: ResultTypes.threeOfAKind,
  },
  {
    id: genId(),
    category: "Four of a kind",
    description: "At least four dice are the same",
    calc: ResultTypes.fourOfAKind,
  },
  {
    id: genId(),
    category: "Full House",
    description: "Three of one number and two of another",
    calc: ResultTypes.fullHouse, 
  },
  {
    id: genId(),
    category: "Small Straight",
    description: "Four sequential dice",
    calc: ResultTypes.smallStraight,
  },
  {
    id: genId(),
    category: "Large Straight",
    description: "Five sequential dice",
    calc: ResultTypes.largeStraight,
  },
  {
    id: genId(),
    category: "Yatzy",
    description: "All five dice are the same",
    calc: ResultTypes.yahtzee,
  },
  {
    id: genId(),
    category: "Chance",
    description: "Any combination",
    calc: ResultTypes.chance,
  },
];

let constants = { upperSection, lowerSection };

export default constants;
