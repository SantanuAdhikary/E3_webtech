

let arr = [
    {
        sname:"rahul",
        age:10
    },
    {
        sname:"rohit",
        age:15
    },
    {
        sname:"virat",
        age:13
    },
]


// arr.map((ele)=>{
//     console.log(ele.sname, ele.age)
// })



const indianPlayers = [
  {
    name: "Shubman Gill",
    country: "India",
    birthDate: "1999-09-08",
    role: "Batsman",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    formats: {
      Test: {
        debut: "2020-12-26",
        caps: 297,
        matches: 39,
        runs: 2826,
        avg: 43.47,
        centuries: 10,
        halfCenturies: 8,
        topScore: 269
      },
      ODI: {
        debut: "2019-01-31",
        caps: 227,
        // ... other ODI stats
      },
      T20I: {
        debut: "2023-01-03",
        caps: 101,
        // ... other T20I stats
      }
    }
  },
  {
    name: "Yashasvi Jaiswal",
    country: "India",
    birthDate: "2001-12-28",
    role: "Batsman",
    battingStyle: "Left-handed",
    bowlingStyle: null,
    formats: {
      Test: {
        debut: "2023-07-12",
        // ... other Test stats
      },
      ODI: {
        // ...
      },
      T20I: {
        matches: 23,
        runs: 723,
        avg: 36.15,
        centuries: 1,
        halfCenturies: 5,
        topScore: 100
      }
    }
  },
  {
    name: "Nitish Kumar Reddy",
    country: "India",
    birthDate: "2003-05-26",
    role: "All-rounder",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium-fast",
    formats: {
      Test: {
        debut: "2024-11-22",
        matches: 8,
        runs: 343,
        avg: 28.58,
        centuries: 1,
        topScore: 114
      },
      T20I: {
        debut: "2024-10-06",
        // ... other T20I stats
      }
    }
  }
  // … more player objects
];



indianPlayers.map((ele)=>{
    console.log(ele.formats.T20I.debut)
})