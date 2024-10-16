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
      languages: [{ name: "Common", index: "language-common" }],
      language_options: {
        from: [
          { name: "Dwarvish", index: "language-dwarvish" },
          { name: "Elvish", index: "language-elvish" },
        ],
        choose: 1,
      },
    },
    dwarf: {
      alignment:
        "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
      subraces: [{ name: "Hill Dwarf" }],
      starting_proficiencies: [
        {
          name: "Dwarven Resilience",
          index: "trait-dwarven-resilience",
          url: `${BASE}/traits/dwarven-resilience`,
        },
        {
          name: "Dwarven Combat Training",
          index: "trait-dwarven-combat-training",
          url: `${BASE}/traits/dwarven-combat-training`,
        },
      ],
      languages: [
        { name: "Common", index: "language-common" },
        { name: "Dwarvish", index: "language-dwarvish" },
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
    cleric: {
      proficiency_choices: [
        {
          choose: 2,
          from: {
            options: [
              {
                name: "History",
                index: "skill-history",
                url: `${BASE}/proficiencies/skill-history`,
              },
              {
                name: "Insight",
                index: "skill-insight",
                url: `${BASE}/proficiencies/skill-insight`,
              },
              {
                name: "Medicine",
                index: "skill-medicine",
                url: `${BASE}/proficiencies/skill-medicine`,
              },
              {
                name: "Religion",
                index: "skill-religion",
                url: `${BASE}/proficiencies/skill-religion`,
              },
            ],
          },
        },
      ],
    },
    fighter: {
      proficiency_choices: [
        {
          choose: 2,
          from: {
            options: [
              {
                name: "History",
                index: "skill-history",
                url: `${BASE}/proficiencies/skill-history`,
              },
              {
                name: "Acrobatics",
                index: "skill-acrobatics",
                url: `${BASE}/proficiencies/skill-acrobatics`,
              },
              {
                name: "Athletics",
                index: "skill-athletics",
                url: `${BASE}/proficiencies/skill-athletics`,
              },
            ],
          },
        },
      ],
    },
  },
  skills: {
    history: {
      desc: "Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.",
    },
    insight: {
      desc: "Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.",
    },
    medicine: {
      desc: "A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.",
    },
    religion: {
      desc: "Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.",
    },
    acrobatics: {
      desc: "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.",
    },
    athletics: {
      desc: "Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.",
    },
  },
  traits: {
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
