
export const Mocks = {
  races: {
    results: [
      {
        name: "Human",
        index: "human",
      },
      {
        name: "Dwarf",
      },
    ],
    human: {
      index: "human",
      name: "Human",
      speed: 30,
      ability_bonuses: [
        {
          ability_score: {
            index: "str",
            name: "STR",
            url: "/api/ability-scores/str",
          },
          bonus: 1,
        },
        {
          ability_score: {
            index: "dex",
            name: "DEX",
            url: "/api/ability-scores/dex",
          },
          bonus: 1,
        },
        {
          ability_score: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          bonus: 1,
        },
        {
          ability_score: {
            index: "int",
            name: "INT",
            url: "/api/ability-scores/int",
          },
          bonus: 1,
        },
        {
          ability_score: {
            index: "wis",
            name: "WIS",
            url: "/api/ability-scores/wis",
          },
          bonus: 1,
        },
        {
          ability_score: {
            index: "cha",
            name: "CHA",
            url: "/api/ability-scores/cha",
          },
          bonus: 1,
        },
      ],
      age: "Humans reach adulthood in their late teens and live less than a century.",
      alignment:
        "Humans tend toward no particular alignment. The best and the worst are found among them.",
      size: "Medium",
      size_description:
        "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
      starting_proficiencies: [],
      languages: [
        {
          index: "common",
          name: "Common",
          url: "/api/languages/common",
        },
      ],
      language_options: {
        choose: 1,
        type: "languages",
        from: {
          option_set_type: "options_array",
          options: [
            {
              option_type: "reference",
              item: {
                index: "dwarvish",
                name: "Dwarvish",
                url: "/api/languages/dwarvish",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "elvish",
                name: "Elvish",
                url: "/api/languages/elvish",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "giant",
                name: "Giant",
                url: "/api/languages/giant",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "gnomish",
                name: "Gnomish",
                url: "/api/languages/gnomish",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "goblin",
                name: "Goblin",
                url: "/api/languages/goblin",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "halfling",
                name: "Halfling",
                url: "/api/languages/halfling",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "orc",
                name: "Orc",
                url: "/api/languages/orc",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "abyssal",
                name: "Abyssal",
                url: "/api/languages/abyssal",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "celestial",
                name: "Celestial",
                url: "/api/languages/celestial",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "draconic",
                name: "Draconic",
                url: "/api/languages/draconic",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "deep-speech",
                name: "Deep Speech",
                url: "/api/languages/deep-speech",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "infernal",
                name: "Infernal",
                url: "/api/languages/infernal",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "primordial",
                name: "Primordial",
                url: "/api/languages/primordial",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "sylvan",
                name: "Sylvan",
                url: "/api/languages/sylvan",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "undercommon",
                name: "Undercommon",
                url: "/api/languages/undercommon",
              },
            },
          ],
        },
      },
      language_desc:
        "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
      traits: [],
      subraces: [],
      url: "/api/races/human",
    },
    dwarf: {
      index: "dwarf",
      name: "Dwarf",
      speed: 25,
      ability_bonuses: [
        {
          ability_score: {
            index: "con",
            name: "CON",
            url: "/api/ability-scores/con",
          },
          bonus: 2,
        },
      ],
      alignment:
        "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
      age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
      size: "Medium",
      size_description:
        "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
      starting_proficiencies: [
        {
          index: "battleaxes",
          name: "Battleaxes",
          url: "/api/proficiencies/battleaxes",
        },
        {
          index: "handaxes",
          name: "Handaxes",
          url: "/api/proficiencies/handaxes",
        },
        {
          index: "light-hammers",
          name: "Light hammers",
          url: "/api/proficiencies/light-hammers",
        },
        {
          index: "warhammers",
          name: "Warhammers",
          url: "/api/proficiencies/warhammers",
        },
      ],
      starting_proficiency_options: {
        desc: "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.",
        choose: 1,
        type: "proficiencies",
        from: {
          option_set_type: "options_array",
          options: [
            {
              option_type: "reference",
              item: {
                index: "smiths-tools",
                name: "Smith's Tools",
                url: "/api/proficiencies/smiths-tools",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "brewers-supplies",
                name: "Brewer's Supplies",
                url: "/api/proficiencies/brewers-supplies",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "masons-tools",
                name: "Mason's Tools",
                url: "/api/proficiencies/masons-tools",
              },
            },
          ],
        },
      },
      languages: [
        {
          index: "common",
          name: "Common",
          url: "/api/languages/common",
        },
        {
          index: "dwarvish",
          name: "Dwarvish",
          url: "/api/languages/dwarvish",
        },
      ],
      language_desc:
        "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
      traits: [
        {
          index: "darkvision",
          name: "Darkvision",
          url: "/api/traits/darkvision",
        },
        {
          index: "dwarven-resilience",
          name: "Dwarven Resilience",
          url: "/api/traits/dwarven-resilience",
        },
        {
          index: "stonecunning",
          name: "Stonecunning",
          url: "/api/traits/stonecunning",
        },
        {
          index: "dwarven-combat-training",
          name: "Dwarven Combat Training",
          url: "/api/traits/dwarven-combat-training",
        },
        {
          index: "tool-proficiency",
          name: "Tool Proficiency",
          url: "/api/traits/tool-proficiency",
        },
      ],
      subraces: [
        {
          index: "hill-dwarf",
          name: "Hill Dwarf",
          url: "/api/subraces/hill-dwarf",
        },
      ],
      url: "/api/races/dwarf",
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
      index: "cleric",
      name: "Cleric",
      hit_die: 8,
      proficiency_choices: [
        {
          desc: "Choose two from History, Insight, Medicine, Persuasion, and Religion",
          choose: 2,
          type: "proficiencies",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "reference",
                item: {
                  index: "skill-history",
                  name: "Skill: History",
                  url: "/api/proficiencies/skill-history",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-insight",
                  name: "Skill: Insight",
                  url: "/api/proficiencies/skill-insight",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-medicine",
                  name: "Skill: Medicine",
                  url: "/api/proficiencies/skill-medicine",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-persuasion",
                  name: "Skill: Persuasion",
                  url: "/api/proficiencies/skill-persuasion",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-religion",
                  name: "Skill: Religion",
                  url: "/api/proficiencies/skill-religion",
                },
              },
            ],
          },
        },
      ],
      proficiencies: [
        {
          index: "light-armor",
          name: "Light Armor",
          url: "/api/proficiencies/light-armor",
        },
        {
          index: "medium-armor",
          name: "Medium Armor",
          url: "/api/proficiencies/medium-armor",
        },
        {
          index: "shields",
          name: "Shields",
          url: "/api/proficiencies/shields",
        },
        {
          index: "simple-weapons",
          name: "Simple Weapons",
          url: "/api/proficiencies/simple-weapons",
        },
        {
          index: "saving-throw-wis",
          name: "Saving Throw: WIS",
          url: "/api/proficiencies/saving-throw-wis",
        },
        {
          index: "saving-throw-cha",
          name: "Saving Throw: CHA",
          url: "/api/proficiencies/saving-throw-cha",
        },
      ],
      saving_throws: [
        {
          index: "wis",
          name: "WIS",
          url: "/api/ability-scores/wis",
        },
        {
          index: "cha",
          name: "CHA",
          url: "/api/ability-scores/cha",
        },
      ],
      starting_equipment: [
        {
          equipment: {
            index: "shield",
            name: "Shield",
            url: "/api/equipment/shield",
          },
          quantity: 1,
        },
      ],
      starting_equipment_options: [
        {
          desc: "(a) a mace or (b) a warhammer (if proficient)",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "mace",
                  name: "Mace",
                  url: "/api/equipment/mace",
                },
              },
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "warhammer",
                  name: "Warhammer",
                  url: "/api/equipment/warhammer",
                },
                prerequisites: [
                  {
                    type: "proficiency",
                    proficiency: {
                      index: "warhammers",
                      name: "Warhammers",
                      url: "/api/proficiencies/warhammers",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          desc: "(a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "scale-mail",
                  name: "Scale Mail",
                  url: "/api/equipment/scale-mail",
                },
              },
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "leather-armor",
                  name: "Leather Armor",
                  url: "/api/equipment/leather-armor",
                },
              },
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "chain-mail",
                  name: "Chain Mail",
                  url: "/api/equipment/chain-mail",
                },
                prerequisites: [
                  {
                    type: "proficiency",
                    proficiency: {
                      index: "chain-mail",
                      name: "Chain Mail",
                      url: "/api/proficiencies/chain-mail",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          desc: "(a) a light crossbow and 20 bolts or (b) any simple weapon",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "multiple",
                items: [
                  {
                    option_type: "counted_reference",
                    count: 1,
                    of: {
                      index: "crossbow-light",
                      name: "Crossbow, light",
                      url: "/api/equipment/crossbow-light",
                    },
                  },
                  {
                    option_type: "counted_reference",
                    count: 20,
                    of: {
                      index: "crossbow-bolt",
                      name: "Crossbow bolt",
                      url: "/api/equipment/crossbow-bolt",
                    },
                  },
                ],
              },
              {
                option_type: "choice",
                choice: {
                  desc: "any simple weapon",
                  choose: 1,
                  type: "equipment",
                  from: {
                    option_set_type: "equipment_category",
                    equipment_category: {
                      index: "simple-weapons",
                      name: "Simple Weapons",
                      url: "/api/equipment-categories/simple-weapons",
                    },
                  },
                },
              },
            ],
          },
        },
        {
          desc: "(a) a priest’s pack or (b) an explorer’s pack",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "priests-pack",
                  name: "Priest's Pack",
                  url: "/api/equipment/priests-pack",
                },
              },
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "explorers-pack",
                  name: "Explorer's Pack",
                  url: "/api/equipment/explorers-pack",
                },
              },
            ],
          },
        },
        {
          desc: "holy symbol",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "equipment_category",
            equipment_category: {
              index: "holy-symbols",
              name: "Holy Symbols",
              url: "/api/equipment-categories/holy-symbols",
            },
          },
        },
      ],
      class_levels: "/api/classes/cleric/levels",
      multi_classing: {
        prerequisites: [
          {
            ability_score: {
              index: "wis",
              name: "WIS",
              url: "/api/ability-scores/wis",
            },
            minimum_score: 13,
          },
        ],
        proficiencies: [
          {
            index: "light-armor",
            name: "Light Armor",
            url: "/api/proficiencies/light-armor",
          },
          {
            index: "medium-armor",
            name: "Medium Armor",
            url: "/api/proficiencies/medium-armor",
          },
          {
            index: "shields",
            name: "Shields",
            url: "/api/proficiencies/shields",
          },
        ],
      },
      subclasses: [
        {
          index: "life",
          name: "Life",
          url: "/api/subclasses/life",
        },
      ],
      spellcasting: {
        level: 1,
        spellcasting_ability: {
          index: "wis",
          name: "WIS",
          url: "/api/ability-scores/wis",
        },
        info: [
          {
            name: "Cantrips",
            desc: [
              "At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.",
            ],
          },
          {
            name: "Preparing and Casting Spells",
            desc: [
              "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
              "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
              "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
              "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
            ],
          },
          {
            name: "Spellcasting Ability",
            desc: [
              "Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
              "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
              "Spell attack modifier = your proficiency bonus + your Wisdom modifier",
            ],
          },
          {
            name: "Ritual Casting",
            desc: [
              "You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
            ],
          },
          {
            name: "Spellcasting Focus",
            desc: [
              "You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells.",
            ],
          },
        ],
      },
      spells: "/api/classes/cleric/spells",
      url: "/api/classes/cleric",
    },
    fighter: {
      index: "fighter",
      name: "Fighter",
      hit_die: 10,
      proficiency_choices: [
        {
          desc: "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
          choose: 2,
          type: "proficiencies",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "reference",
                item: {
                  index: "skill-acrobatics",
                  name: "Skill: Acrobatics",
                  url: "/api/proficiencies/skill-acrobatics",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-animal-handling",
                  name: "Skill: Animal Handling",
                  url: "/api/proficiencies/skill-animal-handling",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-athletics",
                  name: "Skill: Athletics",
                  url: "/api/proficiencies/skill-athletics",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-history",
                  name: "Skill: History",
                  url: "/api/proficiencies/skill-history",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-insight",
                  name: "Skill: Insight",
                  url: "/api/proficiencies/skill-insight",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-intimidation",
                  name: "Skill: Intimidation",
                  url: "/api/proficiencies/skill-intimidation",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-perception",
                  name: "Skill: Perception",
                  url: "/api/proficiencies/skill-perception",
                },
              },
              {
                option_type: "reference",
                item: {
                  index: "skill-survival",
                  name: "Skill: Survival",
                  url: "/api/proficiencies/skill-survival",
                },
              },
            ],
          },
        },
      ],
      proficiencies: [
        {
          index: "all-armor",
          name: "All armor",
          url: "/api/proficiencies/all-armor",
        },
        {
          index: "shields",
          name: "Shields",
          url: "/api/proficiencies/shields",
        },
        {
          index: "simple-weapons",
          name: "Simple Weapons",
          url: "/api/proficiencies/simple-weapons",
        },
        {
          index: "martial-weapons",
          name: "Martial Weapons",
          url: "/api/proficiencies/martial-weapons",
        },
        {
          index: "saving-throw-str",
          name: "Saving Throw: STR",
          url: "/api/proficiencies/saving-throw-str",
        },
        {
          index: "saving-throw-con",
          name: "Saving Throw: CON",
          url: "/api/proficiencies/saving-throw-con",
        },
      ],
      saving_throws: [
        {
          index: "str",
          name: "STR",
          url: "/api/ability-scores/str",
        },
        {
          index: "con",
          name: "CON",
          url: "/api/ability-scores/con",
        },
      ],
      starting_equipment: [],
      starting_equipment_options: [
        {
          desc: "(a) chain mail or (b) leather armor, longbow, and 20 arrows",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "chain-mail",
                  name: "Chain Mail",
                  url: "/api/equipment/chain-mail",
                },
              },
              {
                option_type: "multiple",
                items: [
                  {
                    option_type: "counted_reference",
                    count: 1,
                    of: {
                      index: "leather-armor",
                      name: "Leather Armor",
                      url: "/api/equipment/leather-armor",
                    },
                  },
                  {
                    option_type: "counted_reference",
                    count: 1,
                    of: {
                      index: "longbow",
                      name: "Longbow",
                      url: "/api/equipment/longbow",
                    },
                  },
                  {
                    option_type: "counted_reference",
                    count: 20,
                    of: {
                      index: "arrow",
                      name: "Arrow",
                      url: "/api/equipment/arrow",
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          desc: "(a) a martial weapon and a shield or (b) two martial weapons",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "multiple",
                items: [
                  {
                    option_type: "choice",
                    choice: {
                      desc: "a martial weapon",
                      choose: 1,
                      type: "equipment",
                      from: {
                        option_set_type: "equipment_category",
                        equipment_category: {
                          index: "martial-weapons",
                          name: "Martial Weapons",
                          url: "/api/equipment-categories/martial-weapons",
                        },
                      },
                    },
                  },
                  {
                    option_type: "counted_reference",
                    count: 1,
                    of: {
                      index: "shield",
                      name: "Shield",
                      url: "/api/equipment/shield",
                    },
                  },
                ],
              },
              {
                option_type: "choice",
                choice: {
                  desc: "two martial weapons",
                  choose: 2,
                  type: "equipment",
                  from: {
                    option_set_type: "equipment_category",
                    equipment_category: {
                      index: "martial-weapons",
                      name: "Martial Weapons",
                      url: "/api/equipment-categories/martial-weapons",
                    },
                  },
                },
              },
            ],
          },
        },
        {
          desc: "(a) a light crossbow and 20 bolts or (b) two handaxes",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "multiple",
                items: [
                  {
                    option_type: "counted_reference",
                    count: 1,
                    of: {
                      index: "crossbow-light",
                      name: "Crossbow, light",
                      url: "/api/equipment/crossbow-light",
                    },
                  },
                  {
                    option_type: "counted_reference",
                    count: 20,
                    of: {
                      index: "crossbow-bolt",
                      name: "Crossbow bolt",
                      url: "/api/equipment/crossbow-bolt",
                    },
                  },
                ],
              },
              {
                option_type: "counted_reference",
                count: 2,
                of: {
                  index: "handaxe",
                  name: "Handaxe",
                  url: "/api/equipment/handaxe",
                },
              },
            ],
          },
        },
        {
          desc: "(a) a dungeoneer’s pack or (b) an explorer’s pack",
          choose: 1,
          type: "equipment",
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "dungeoneers-pack",
                  name: "Dungeoneer's Pack",
                  url: "/api/equipment/dungeoneers-pack",
                },
              },
              {
                option_type: "counted_reference",
                count: 1,
                of: {
                  index: "explorers-pack",
                  name: "Explorer's Pack",
                  url: "/api/equipment/explorers-pack",
                },
              },
            ],
          },
        },
      ],
      class_levels: "/api/classes/fighter/levels",
      multi_classing: {
        prerequisite_options: {
          type: "ability-scores",
          choose: 1,
          from: {
            option_set_type: "options_array",
            options: [
              {
                option_type: "score_prerequisite",
                ability_score: {
                  index: "str",
                  name: "STR",
                  url: "/api/ability-scores/str",
                },
                minimum_score: 13,
              },
              {
                option_type: "score_prerequisite",
                ability_score: {
                  index: "dex",
                  name: "DEX",
                  url: "/api/ability-scores/dex",
                },
                minimum_score: 13,
              },
            ],
          },
        },
        proficiencies: [
          {
            index: "light-armor",
            name: "Light Armor",
            url: "/api/proficiencies/light-armor",
          },
          {
            index: "medium-armor",
            name: "Medium Armor",
            url: "/api/proficiencies/medium-armor",
          },
          {
            index: "shields",
            name: "Shields",
            url: "/api/proficiencies/shields",
          },
          {
            index: "simple-weapons",
            name: "Simple Weapons",
            url: "/api/proficiencies/simple-weapons",
          },
          {
            index: "martial-weapons",
            name: "Martial Weapons",
            url: "/api/proficiencies/martial-weapons",
          },
        ],
      },
      subclasses: [
        {
          index: "champion",
          name: "Champion",
          url: "/api/subclasses/champion",
        },
      ],
      url: "/api/classes/fighter",
    },
  },
  skills: {
    history: {
      index: "history",
      name: "History",
      desc: [
        "Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.",
      ],
      ability_score: {
        index: "int",
        name: "INT",
        url: "/api/ability-scores/int",
      },
      url: "/api/skills/history",
    },
    insight: {
      index: "insight",
      name: "Insight",
      desc: [
        "Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.",
      ],
      ability_score: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      url: "/api/skills/insight",
    },
    medicine: {
      index: "medicine",
      name: "Medicine",
      desc: [
        "A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.",
      ],
      ability_score: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      url: "/api/skills/medicine",
    },
    religion: {
      index: "religion",
      name: "Religion",
      desc: [
        "Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.",
      ],
      ability_score: {
        index: "int",
        name: "INT",
        url: "/api/ability-scores/int",
      },
      url: "/api/skills/religion",
    },
    acrobatics: {
      index: "acrobatics",
      name: "Acrobatics",
      desc: [
        "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.",
      ],
      ability_score: {
        index: "dex",
        name: "DEX",
        url: "/api/ability-scores/dex",
      },
      url: "/api/skills/acrobatics",
    },
    athletics: {
      index: "athletics",
      name: "Athletics",
      desc: [
        "Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.",
      ],
      ability_score: {
        index: "str",
        name: "STR",
        url: "/api/ability-scores/str",
      },
      url: "/api/skills/athletics",
    },
    "animal-handling": {
      index: "animal-handling",
      name: "Animal Handling",
      desc: [
        "When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.",
      ],
      ability_score: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      url: "/api/skills/animal-handling",
    },
    intimidation: {
      index: "intimidation",
      name: "Intimidation",
      desc: [
        "When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.",
      ],
      ability_score: {
        index: "cha",
        name: "CHA",
        url: "/api/ability-scores/cha",
      },
      url: "/api/skills/intimidation",
    },
    perception: {
      index: "perception",
      name: "Perception",
      desc: [
        "Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.",
      ],
      ability_score: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      url: "/api/skills/perception",
    },
    survival: {
      index: "survival",
      name: "Survival",
      desc: [
        "The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.",
      ],
      ability_score: {
        index: "wis",
        name: "WIS",
        url: "/api/ability-scores/wis",
      },
      url: "/api/skills/survival",
    },
    persuasion: {
      index: "persuasion",
      name: "Persuasion",
      desc: [
        "When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.",
      ],
      ability_score: {
        index: "cha",
        name: "CHA",
        url: "/api/ability-scores/cha",
      },
      url: "/api/skills/persuasion",
    },
  },
  proficiencies: {
    "skill-acrobatics": {
      index: "skill-acrobatics",
      type: "Skills",
      name: "Skill: Acrobatics",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-acrobatics",
      reference: {
        index: "acrobatics",
        name: "Acrobatics",
        url: "/api/skills/acrobatics",
      },
    },
    "skill-insight": {
      index: "skill-insight",
      type: "Skills",
      name: "Skill: Insight",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-insight",
      reference: {
        index: "insight",
        name: "Insight",
        url: "/api/skills/insight",
      },
    },
    "skill-religion": {
      index: "skill-religion",
      type: "Skills",
      name: "Skill: Religion",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-religion",
      reference: {
        index: "religion",
        name: "Religion",
        url: "/api/skills/religion",
      },
    },
    "skill-athletics": {
      index: "skill-athletics",
      type: "Skills",
      name: "Skill: Athletics",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-athletics",
      reference: {
        index: "athletics",
        name: "Athletics",
        url: "/api/skills/athletics",
      },
    },
    "skill-medicine": {
      index: "skill-medicine",
      type: "Skills",
      name: "Skill: Medicine",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-medicine",
      reference: {
        index: "medicine",
        name: "Medicine",
        url: "/api/skills/medicine",
      },
    },
    "skill-history": {
      index: "skill-history",
      type: "Skills",
      name: "Skill: History",
      classes: [],
      races: [],
      url: "/api/proficiencies/skill-history",
      reference: {
        index: "history",
        name: "History",
        url: "/api/skills/history",
      },
    },
  },
  traits: {
    "dwarven-resilience": {
      desc: [
        "You have advantage on saving throws against poison, and you have resistance against poison damage.",
      ],
    },
    "dwarven-combat-training": {
      desc: [
        "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
      ],
    },
    darkvision: {
      index: "darkvision",
      name: "Darkvision",
      desc: [
        "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
      ],
      proficiencies: [],
      url: "/api/traits/darkvision",
    },
    stonecunning: {
      index: "stonecunning",
      name: "Stonecunning",
      desc: [
        "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
      ],
      proficiencies: [],
      url: "/api/traits/stonecunning",
    },
    "tool-proficiency": {
      index: "tool-proficiency",
      races: [
        {
          index: "dwarf",
          name: "Dwarf",
          url: "/api/races/dwarf",
        },
      ],
      subraces: [],
      name: "Tool Proficiency",
      desc: [
        "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
      ],
      proficiencies: [],
      proficiency_choices: {
        choose: 1,
        type: "proficiencies",
        from: {
          option_set_type: "options_array",
          options: [
            {
              option_type: "reference",
              item: {
                index: "smiths-tools",
                name: "Smith's Tools",
                url: "/api/proficiencies/smiths-tools",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "brewers-supplies",
                name: "Brewer's Supplies",
                url: "/api/proficiencies/brewers-supplies",
              },
            },
            {
              option_type: "reference",
              item: {
                index: "masons-tools",
                name: "Mason's Tools",
                url: "/api/proficiencies/masons-tools",
              },
            },
          ],
        },
      },
      url: "/api/traits/tool-proficiency",
    },
  },
  ["rule-sections"]: {
    "the-environment": {
      name: "The Environment",
      index: "the-environment",
      desc: "## The Environment\n\nBy its nature, adventuring involves delving into places that are dark, dangerous, and full of mysteries to be explored. The rules in this section cover some of the most important ways in which adventurers interact with the environment in such places.\n\n### Falling\n\nA fall from a great height is one of the most common hazards facing an adventurer. At the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 feet it fell, to a maximum of 20d6. The creature lands prone, unless it avoids taking damage from the fall.\n\n### Suffocating\n\nA creature can hold its breath for a number of minutes equal to 1 + its Constitution modifier (minimum of 30 seconds).\n\nWhen a creature runs out of breath or is choking, it can survive for a number of rounds equal to its Constitution modifier (minimum of 1 round). At the start of its next turn, it drops to 0 hit points and is dying, and it can't regain hit points or be stabilized until it can breathe again.\n\nFor example, a creature with a Constitution of 14 can hold its breath for 3 minutes. If it starts suffocating, it has 2 rounds to reach air before it drops to 0 hit points.\n\n### Vision and Light\n\nThe most fundamental tasks of adventuring--noticing danger, finding hidden objects, hitting an enemy in combat, and targeting a spell, to name just a few--rely heavily on a character's ability to see. Darkness and other effects that obscure vision can prove a significant hindrance.\n\nA given area might be lightly or heavily obscured. In a **lightly obscured** area, such as dim light, patchy fog, or moderate foliage, creatures have disadvantage on Wisdom (Perception) checks that rely on sight.\n\nA **heavily obscured** area-such as darkness, opaque fog, or dense foliage-blocks vision entirely. A creature effectively suffers from the blinded condition (see appendix PH-A) when trying to see something in that area.\n\nThe presence or absence of light in an environment creates three categories of illumination: bright light, dim light, and darkness.\n\n**Bright light** lets most creatures see normally.\n\nEven gloomy days provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius.\n\n**Dim light**, also called shadows, creates a lightly obscured area. An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness. The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light.\n\n**Darkness** creates a heavily obscured area.\n\nCharacters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness.\n\n#### Blindsight\n\nA creature with blindsight can perceive its surroundings without relying on sight, within a specific radius. Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense.\n\n#### Darkvision\n\nMany creatures in fantasy gaming worlds, especially those that dwell underground, have darkvision. Within a specified range, a creature with darkvision can see in darkness as if the darkness were dim light, so areas of darkness are only lightly obscured as far as that creature is concerned. However, the creature can't discern color in darkness, only shades of gray.\n\n#### Truesight\n\nA creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic. Furthermore, the creature can see into the Ethereal Plane.\n\n### Food and Water\n\nCharacters who don't eat or drink suffer the effects of exhaustion (see appendix PH-A). Exhaustion caused by lack of food or water can't be removed until the character eats and drinks the full required amount.\n\n#### Food\n\nA character needs one pound of food per day and can make food last longer by subsisting on half rations. Eating half a pound of food in a day counts as half a day without food.\n\nA character can go without food for a number of days equal to 3 + his or her Constitution modifier (minimum 1). At the end of each day beyond that limit, a character automatically suffers one level of exhaustion.\n\nA normal day of eating resets the count of days without food to zero.\n\n#### Water\n\nA character needs one gallon of water per day, or two gallons per day if the weather is hot. A character who drinks only half that much water must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion at the end of the day. A character with access to even less water automatically suffers one level of exhaustion at the end of the day.\n\nIf the character already has one or more levels of exhaustion, the character takes two levels in either case.\n\n### Interacting with Objects\n\nA character's interaction with objects in an environment is often simple to resolve in the game. The player tells the GM that his or her character is doing something, such as moving a lever, and the GM describes what, if anything, happens.\n\nFor example, a character might decide to pull a lever, which might, in turn, raise a portcullis, cause a room to flood with water, or open a secret door in a nearby wall. If the lever is rusted in position, though, a character might need to force it. In such a situation, the GM might call for a Strength check to see whether the character can wrench the lever into place. The GM sets the DC for any such check based on the difficulty of the task.\n\nCharacters can also damage objects with their weapons and spells. Objects are immune to poison and psychic damage, but otherwise they can be affected by physical and magical attacks much like creatures can. The GM determines an object's Armor Class and hit points, and might decide that certain objects have resistance or immunity to certain kinds of attacks. (It's hard to cut a rope with a club, for example.) Objects always fail Strength and Dexterity saving throws, and they are immune to effects that require other saves. When an object drops to 0 hit points, it breaks.\n\nA character can also attempt a Strength check to break an object. The GM sets the DC for any such check.\n",
      url: "/api/rule-sections/the-environment",
    },
  },
  rules: {
    "using-ability-scores": {
      name: "Using Ability Scores",
      index: "using-ability-scores",
      desc: "# Using Ability Scores\n\nSix abilities provide a quick description of every creature's physical and mental characteristics:\n- **Strength**, measuring physical power\n- **Dexterity**, measuring agility\n- **Constitution**, measuring endurance\n- **Intelligence**, measuring reasoning and memory\n- **Wisdom**, measuring perception and insight\n- **Charisma**, measuring force of personality\n\nIs a character muscle-bound and insightful? Brilliant and charming? Nimble and hardy? Ability scores define these qualities-a creature's assets as well as weaknesses.\n\nThe three main rolls of the game-the ability check, the saving throw, and the attack roll-rely on the six ability scores. The book's introduction describes the basic rule behind these rolls: roll a d20, add an ability modifier derived from one of the six ability scores, and compare the total to a target number.\n\n**Ability Scores and Modifiers** Each of a creature's abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature's training and competence in activities related to that ability.\n\nA score of 10 or 11 is the normal human average, but adventurers and many monsters are a cut above average in most abilities. A score of 18 is the highest that a person usually reaches. Adventurers can have scores as high as 20, and monsters and divine beings can have scores as high as 30.\n\nEach ability also has a modifier, derived from the score and ranging from -5 (for an ability score of 1) to +10 (for a score of 30). The Ability Scores and Modifiers table notes the ability modifiers for the range of possible ability scores, from 1 to 30.\n",
      subsections: [
        {
          name: "Ability Scores and Modifiers",
          index: "ability-scores-and-modifiers",
          url: "/api/rule-sections/ability-scores-and-modifiers",
        },
        {
          name: "Advantage and Disadvantage",
          index: "advantage-and-disadvantage",
          url: "/api/rule-sections/advantage-and-disadvantage",
        },
        {
          name: "Proficiency Bonus",
          index: "proficiency-bonus",
          url: "/api/rule-sections/proficiency-bonus",
        },
        {
          name: "Ability Checks",
          index: "ability-checks",
          url: "/api/rule-sections/ability-checks",
        },
        {
          name: "Using Each Ability",
          index: "using-each-ability",
          url: "/api/rule-sections/using-each-ability",
        },
        {
          name: "Saving Throws",
          index: "saving-throws",
          url: "/api/rule-sections/saving-throws",
        },
      ],
      url: "/api/rules/using-ability-scores",
    },
  },
  equipment: {
    "masons-tools": {
      special: [],
      index: "masons-tools",
      name: "Mason's Tools",
      equipment_category: {
        index: "tools",
        name: "Tools",
        url: "/api/equipment-categories/tools",
      },
      tool_category: "Artisan's Tools",
      cost: {
        quantity: 10,
        unit: "gp",
      },
      weight: 8,
      desc: [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
      ],
      url: "/api/equipment/masons-tools",
      contents: [],
      properties: [],
    },
    "brewers-supplies": {
      special: [],
      index: "brewers-supplies",
      name: "Brewer's Supplies",
      equipment_category: {
        index: "tools",
        name: "Tools",
        url: "/api/equipment-categories/tools",
      },
      tool_category: "Artisan's Tools",
      cost: {
        quantity: 20,
        unit: "gp",
      },
      weight: 9,
      desc: [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
      ],
      url: "/api/equipment/brewers-supplies",
      contents: [],
      properties: [],
    },
    "smiths-tools": {
      special: [],
      index: "smiths-tools",
      name: "Smith's Tools",
      equipment_category: {
        index: "tools",
        name: "Tools",
        url: "/api/equipment-categories/tools",
      },
      tool_category: "Artisan's Tools",
      cost: {
        quantity: 20,
        unit: "gp",
      },
      weight: 8,
      desc: [
        "These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a separate proficiency.",
      ],
      url: "/api/equipment/smiths-tools",
      contents: [],
      properties: [],
    },
  },
};
