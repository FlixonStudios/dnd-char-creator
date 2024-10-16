import { BASE } from "../../lib/Api";

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
      starting_proficiencies: [
        {
          name: "Dwarven Resilience",
          index: "skill-dwarven-resilience",
          url: `${BASE}/proficiencies/skill-dwarven-resilience`,
        },
        {
          name: "Dwarven Combat Training",
          index: "skill-dwarven-combat-training",
          url: `${BASE}/proficiencies/skill-dwarven-combat-training`,
        },
      ],
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
  skills: {
    "dwarven-resilience": {
      desc: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    },
    "dwarven-combat-training": {
      desc: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
    },
  },
  ["rule-sections"]: {
    ["the-environment"]: {
      desc: "By its nature, adventuring involves delving into places that are dark, dangerous, and full of mysteries to be explored. The rules in thissection cover some of the most important ways in which adventurers interact with the environment in such places.",
    },
  },
  rules: {},
  equipment: {},
};
