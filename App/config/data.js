const data = [
  {
    name: "slider1",
    id: 1,
    url: "../../../assets/Slider1.png",
    urlname: "Slider1.png",
  },
  {
    name: "slider2",
    id: 2,
    url: "../../../assets/Slider2.png",
    urlname: "Slider2.png",
  },
  {
    name: "slider3",
    id: 3,
    url: "../../../assets/girl.jpg",
    urlname: "girl.jpg",
  },
];

const categories = [
  {
    name: "Cleaning",
    id: 1,
    icon: "attachment",
    color:'purple'
  },
  {
    name: "Repairing",
    id: 2,
    icon: "hammer-screwdriver",
    color:'blue'
  },
  {
    name: "Painting",
    id: 3,
    icon: "format-paint",
    color:'green'
  },
  {
    name: "Furnising",
    id: 4,
    icon: "table-furniture",
    color:'red'
  },
];

const businessList = [
  {
    id: 1,
    name: "House Cleaning",
    email: "admimn@gmail.com",
    contactPerson: "Bob The Builder",
    category: {
      name: "Cleaning",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 2,
    name: "Wash Clothes",
    email: "park@gmail.com",
    contactPerson: "Builder",
    category: {
      name: "Repairing",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 3,
    name: "House Reparing",
    email: "sjinwoo@gmail.com",
    contactPerson: "Maruti",
    category: {
    //   name: "Furnising",
      name: "Repairing",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 4,
    name: "Paint House",
    email: "kira@gmail.com",
    contactPerson: "kira",
    category: {
      name: "Painting",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 5,
    name: "Paint House",
    email: "kira@gmail.com",
    contactPerson: "kira",
    category: {
      name: "Painting",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 6,
    name: "House Reparing",
    email: "sjinwoo@gmail.com",
    contactPerson: "Maruti",
    category: {
      name: "Cleaning",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 7,
    name: "House Cleaning",
    email: "admimn@gmail.com",
    contactPerson: "Bob The Builder",
    category: {
      name: "Cleaning",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
  {
    id: 8,
    name: "Wash Clothes",
    email: "park@gmail.com",
    contactPerson: "Builder",
    category: {
      name: "Repairing",
    },
    address: "NBT Bilaspur C.G 459001",
    about: "hey there",
    image: [
      {
        url: "",
      },
      {
        url: "",
      },
    ],
  },
];

const bookedService =[
  {
    id:1,
    username:'M.S. Dhoni',
    email:'ms77@gmail.com',
    date:'23 Oct 2023',
    time:'8:00 AM',
    business:'Painting',
    status:'Booked'
  },
  {
    id:2,
    username:'Sachin Tendulkar',
    email:'tSachin@gmail.com',
    date:'10 May 2023',
    time:'10:00 AM',
    business:'Cleaning',
    status:'InProgress'
  },
  {
    id:3,
    username:'Virat Kohali',
    email:'kvirat@gmail.com',
    date:'1 Aug 2023',
    time:'1:00 AM',
    business:'Repairing',
    status:'Completed'
  },
]
export { data, categories, businessList,bookedService };
