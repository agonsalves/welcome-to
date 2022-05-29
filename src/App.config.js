export const ADDRESSES = [3, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 3]
export const EFFECTS = [9, 18, 18, 9, 18, 9]

export const EFFECT_POOL = 'pool'
export const EFFECT_PARK = 'park'
export const EFFECT_FENCE = 'fence'
export const EFFECT_TEMP = 'temp'
export const EFFECT_ESTATE = 'estate'
export const EFFECT_BIS = 'bis'

export const EFFECTS_MAP = [
    EFFECT_POOL, EFFECT_PARK, EFFECT_FENCE, EFFECT_TEMP, EFFECT_ESTATE, EFFECT_BIS
]

export const PLANS_DEFAULT = { 1: false, 2: false, 3: false}

export const PLANS = {
    1: [
        {
            points: [8, 4],
            objectives: {
                estate: {
                    2: 4
                }
            }
        },
        {
            points: [6, 3],
            objectives: {
                temp: 7
            }
        },
        {
            points: [8, 4],
            objectives: {
                estate: {
                    3: 3
                }
            }
        },
        {
            points: [8, 4],
            objectives: {
                placement: 'full bottom street'
            }
        },
        {
            points: [8, 4],
            objectives: {
                estate: {
                    1: 6
                }
            }
        },
        {
            points: [8, 3],
            objectives: {
                bis: 5
            }
        },
        {
            points: [6, 3],
            objectives: {
                placement: 'full top street'
            }
        },
        {
            points: [6, 3],
            objectives: {
                estate: {
                    4: 2
                }
            }
        },
        {
            points: [8, 4],
            objectives: {
                estate: {
                    5: 2
                }
            }
        },
        {
            points: [7, 4],
            objectives: {
                placement: "house built on all street ends"
            }
        },
        {
            points: [10, 6],
            objectives: {
                estate: {
                    6: 2
                }
            }
        }
    ],
    2: [
        {
            points: [7, 4],
            objectives: {
                placement: "two streets with all pools"
            }
        },
        {
            points: [8, 3],
            objectives: {
                placement: "middle street with all pools and all parks"
            }
        },
        {
            points: [12, 7],
            objectives: {
                estate: {
                    3: 2,
                    4: 1
                }
            }
        },
        {
            points: [9, 5],
            objectives: {
                estate: {
                    1: 3,
                    4: 1
                }
            }
        },
        {
            points: [10, 5],
            objectives: {
                placement: "one street with 1 roundabout, all pools & all parks"
            }
        },
        {
            points: [11, 6],
            objectives: {
                estate: {
                    1: 3,
                    6: 1
                }
            }
        },
        {
            points: [8, 4],
            objectives: {
                estate: {
                    3: 1,
                    6: 1
                }
            }
        },
        {
            points: [7, 4],
            objectives: {
                placement: "two streets with all parks"
            }
        },
        {
            points: [10, 5],
            objectives: {
                placement: "bottom street with all pools and all parks"
            }
        },
        {
            points: [10, 6],
            objectives: {
                estate: {
                    2: 2,
                    5: 1
                }
            }
        },
        {
            points: [9, 5],
            objectives: {
                estate: {
                    4: 1,
                    5: 1
                }
            }
        }
    ],
    3: [
        {
            points: [13, 7],
            objectives: {
                estate: {
                    2: 1,
                    3: 1,
                    5: 1
                }
            }
        },
        {
            points: [12, 7],
            objectives: {
                estate: {
                    1: 1,
                    2: 1,
                    6: 1
                }
            }
        },
        {
            points: [11, 6],
            objectives: {
                estate: {
                    1: 1,
                    2: 2,
                    3: 1
                }
            }
        },
        {
            points: [13, 7],
            objectives: {
                estate: {
                    1: 1,
                    4: 1,
                    5: 1
                }
            }
        },
        {
            points: [7, 3],
            objectives: {
                estate: {
                    2: 1,
                    5: 1
                }
            }
        },
        {
            points: [7, 3],
            objectives: {
                estate: {
                    3: 1,
                    4: 1
                }
            }
        }
    ]
}
