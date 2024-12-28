// Workout types configuration
const workoutTypes = [
    {
        id: 'speed',
        title: 'Speed Work',
        description: 'High-intensity intervals and tempo runs'
    },
    {
        id: 'endurance',
        title: 'Endurance',
        description: 'Long runs to build stamina'
    },
    {
        id: 'recovery',
        title: 'Recovery',
        description: 'Easy-paced recovery runs'
    },
    {
        id: 'hills',
        title: 'Hills',
        description: 'Hill workouts for strength'
    }
];

// Time range options
const timeRanges = [
    { id: '20-30', label: '20-30 min' },
    { id: '30-45', label: '30-45 min' },
    { id: '45-60', label: '45-60 min' },
    { id: '60-90', label: '60-90 min' }
];

// Workout database
const workouts = {
    speed: [
        {
            title: "Interval Session",
            intensity: "high",
            duration: 45,
            instructions: "10 min warmup, 8x400m with 200m recovery, 10 min cooldown"
        },
        {
            title: "Tempo Run",
            intensity: "high",
            duration: 40,
            instructions: "10 min warmup, 20 min at tempo pace, 10 min cooldown"
        },
        {
            title: "Fartlek Training",
            intensity: "medium-high",
            duration: 35,
            instructions: "5 min warmup, alternating 2 min hard/1 min easy x8, 5 min cooldown"
        }
    ],
    endurance: [
        {
            title: "Long Run",
            intensity: "medium",
            duration: 60,
            instructions: "Steady-paced run at conversational effort"
        },
        {
            title: "Progressive Long Run",
            intensity: "medium-high",
            duration: 75,
            instructions: "Start easy, increase pace every 15 minutes"
        },
        {
            title: "Zone 2 Training",
            intensity: "medium-low",
            duration: 45,
            instructions: "Maintain heart rate in Zone 2 throughout the run"
        }
    ],
    recovery: [
        {
            title: "Easy Recovery Run",
            intensity: "low",
            duration: 30,
            instructions: "Very easy pace, focus on form and relaxation"
        },
        {
            title: "Active Recovery",
            intensity: "low",
            duration: 25,
            instructions: "Light jog with walking breaks as needed"
        }
    ],
    hills: [
        {
            title: "Hill Repeats",
            intensity: "high",
            duration: 45,
            instructions: "10 min warmup, 8x30sec hill sprints with walk down recovery, 10 min cooldown"
        },
        {
            title: "Rolling Hills",
            intensity: "medium-high",
            duration: 50,
            instructions: "Find a rolling course, push the uphills and recover on downhills"
        },
        {
            title: "Hill Endurance",
            intensity: "medium",
            duration: 60,
            instructions: "Long run on hilly terrain at steady effort"
        }
    ]
};