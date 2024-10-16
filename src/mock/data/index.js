export const Mocks = {
  races: {
    results: [
      {
        name: "Human",
      },
      {
        name: "Dwarf",
      },
    ],
    human: {
      alignment:
        "Humans tend toward no particular alignment. The best and the worst are found among them.",
    },
    dwarf: {
      alignment:
        "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
      subraces: [{ name: "Hill Dwarf" }],
    },
  },
  classes: {
    results: [
      {
        name: "Cleric",
      },
      {
        name: "Fighter",
      },
    ],
  },
  skills: {},
  ["rule-sections"]: {
    ["the-environment"]: {
      desc: "By its nature, adventuring involves delving into places that are dark, dangerous, and full of mysteries to be explored. The rules in thissection cover some of the most important ways in which adventurers interact with the environment in such places.",
    },
  },
  rules: {},
  equipment: {},
};
