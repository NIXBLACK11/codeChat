const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "John Doe",
          email: "john@gmail.com",
        },
        {
          name: "joe",
          email: "joegmail",
        },
      ],
      _id: "345345cfg54ytg",
      chatName: "football group",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Alice",
          email: "alice@gmail.com",
        },
        {
          name: "Bob",
          email: "bob@gmail.com",
        },
      ],
      _id: "sdfg3456gh",
      chatName: "music lovers",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Sarah",
          email: "sarah@gmail.com",
        },
        {
          name: "Mike",
          email: "mike@gmail.com",
        },
        {
          name: "Emma",
          email: "emma@gmail.com",
        },
      ],
      _id: "dfg4567hjk",
      chatName: "travel enthusiasts",
    },
    // Add more chat objects here
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Smith",
          email: "jane@gmail.com",
        },
        {
          name: "Alex",
          email: "alex@gmail.com",
        },
      ],
      _id: "dfg34w5yh7j",
      chatName: "Study Group",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Chris",
          email: "chris@gmail.com",
        },
        {
          name: "Lily",
          email: "lily@gmail.com",
        },
        {
          name: "Mark",
          email: "mark@gmail.com",
        },
      ],
      _id: "jkl890poi",
      chatName: "Gaming Clan",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Sophia",
          email: "sophia@gmail.com",
        },
        {
          name: "Oliver",
          email: "oliver@gmail.com",
        },
        {
          name: "Emily",
          email: "emily@gmail.com",
        },
      ],
      _id: "asdfghjkl",
      chatName: "Book Club",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Daniel",
          email: "daniel@gmail.com",
        },
        {
          name: "Emma",
          email: "emma@gmail.com",
        },
      ],
      _id: "qwe123rty",
      chatName: "Coffee Hangout",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "James",
          email: "james@gmail.com",
        },
        {
          name: "Mia",
          email: "mia@gmail.com",
        },
        {
          name: "Ethan",
          email: "ethan@gmail.com",
        },
      ],
      _id: "zxcvbnm12",
      chatName: "Fitness Buddies",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Ava",
          email: "ava@gmail.com",
        },
        {
          name: "Lucas",
          email: "lucas@gmail.com",
        },
      ],
      _id: "1234qwerty",
      chatName: "Movie Club",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Grace",
          email: "grace@gmail.com",
        },
        {
          name: "Noah",
          email: "noah@gmail.com",
        },
        {
          name: "Sophie",
          email: "sophie@gmail.com",
        },
      ],
      _id: "mnbvcxz12",
      chatName: "Art Lovers",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Liam",
          email: "liam@gmail.com",
        },
        {
          name: "Abigail",
          email: "abigail@gmail.com",
        },
      ],
      _id: "poi098lkj",
      chatName: "Hiking Adventure",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Harper",
          email: "harper@gmail.com",
        },
        {
          name: "Logan",
          email: "logan@gmail.com",
        },
        {
          name: "Evelyn",
          email: "evelyn@gmail.com",
        },
      ],
      _id: "0987ytrewoi",
      chatName: "Photography Club",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Henry",
          email: "henry@gmail.com",
        },
        {
          name: "Elizabeth",
          email: "elizabeth@gmail.com",
        },
      ],
      _id: "asdfpoiuy",
      chatName: "Foodies Group",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Aiden",
          email: "aiden@gmail.com",
        },
        {
          name: "Victoria",
          email: "victoria@gmail.com",
        },
        {
          name: "Zoe",
          email: "zoe@gmail.com",
        },
      ],
      _id: "lkjhgfdsa",
      chatName: "Fashion Enthusiasts",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Benjamin",
          email: "benjamin@gmail.com",
        },
        {
          name: "Sofia",
          email: "sofia@gmail.com",
        },
      ],
      _id: "qazwsxedc",
      chatName: "Coding Study",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Jackson",
          email: "jackson@gmail.com",
        },
        {
          name: "Scarlett",
          email: "scarlett@gmail.com",
        },
        {
          name: "Lucy",
          email: "lucy@gmail.com",
        },
      ],
      _id: "ytrewq987",
      chatName: "Nature Lovers",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Sebastian",
          email: "sebastian@gmail.com",
        },
        {
          name: "Penelope",
          email: "penelope@gmail.com",
        },
      ],
      _id: "plokmijnuh",
      chatName: "Pets Owners",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Grayson",
          email: "grayson@gmail.com",
        },
        {
          name: "Hannah",
          email: "hannah@gmail.com",
        },
        {
          name: "Nora",
          email: "nora@gmail.com",
        },
      ],
      _id: "zsexdcrfvt",
      chatName: "Writing Club",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jack",
          email: "jack@gmail.com",
        },
        {
          name: "Avery",
          email: "avery@gmail.com",
        },
      ],
      _id: "098poiuyt",
      chatName: "Guitar Enthusiasts",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Levi",
          email: "levi@gmail.com",
        },
        {
          name: "Grace",
          email: "grace@gmail.com",
        },
        {
          name: "Mila",
          email: "mila@gmail.com",
        },
      ],
      _id: "mko09876",
      chatName: "Chess Club",
      groupAdmin: {
        name:"Guest User",
        email: "guest@gmail.com",
      },
    },
  ];

  module.exports = {chats};