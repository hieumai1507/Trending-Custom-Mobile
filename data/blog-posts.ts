import { BlogPost } from "@/types/blogs-type";

const blogPostData: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Home Gardening",
    poster:
      "https://organicabiotech.com/wp-content/uploads/2022/05/A-Complete-Guide-to-Home-Gardening.jpg",
    images: [
      "https://organicabiotech.com/wp-content/uploads/2022/05/A-Complete-Guide-to-Home-Gardening.jpg",
      "https://www.leaflandscapesupply.com/wp-content/uploads/2024/02/Leaf-Landscape-Supply-Residential_10.png",
      "https://s3media.angieslist.com/s3fs-public/Mother-daughter-gardening.jpeg",
    ],
    date: "2024-02-29",
    slug: "ultimate-home-gardening-guide",
    content: [
      { type: "heading", level: 2, text: "Getting Started with Gardening" },
      {
        type: "text",
        text: "Gardening can be a rewarding hobby. Start with simple plants.",
      },
      {
        type: "image",
        src: "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/8e/c7/AU-T2-S-2548576-School-Garden-Tools-Display-Labels-English_ver_1.jpg",
        alt: "Gardening Tools",
      },
      {
        type: "list",
        items: ["Water regularly", "Provide sunlight", "Use fertilizer"],
        ordered: false,
      },
      { type: "heading", level: 3, text: "Choosing the Right Plants" },
      {
        type: "text",
        text: "Consider your climate and available space.",
      },
    ],
  },
  {
    id: "2",
    title: "10 Tips for Effective Time Management",
    poster:
      "https://nairatop.com.ng/wp-content/uploads/2024/05/Time-Management.jpg",
    images: [
      "https://nairatop.com.ng/wp-content/uploads/2024/05/Time-Management.jpg",
      "https://fastercapital.com/i/Mastering-Series-9-10--Tips-and-Tricks-for-Success--Effective-Time-Management-Techniques.webp",
    ],
    date: "2024-02-28",
    slug: "effective-time-management-tips",
    content: [
      { type: "heading", level: 2, text: "Prioritize Your Tasks" },
      {
        type: "text",
        text: "Identify the most important tasks first. Use the Eisenhower Matrix to categorize tasks.",
      },
      {
        type: "quote",
        text: "Time is what we want most, but what we use worst.",
        author: "William Penn",
      },
      {
        type: "list",
        items: ["Set goals", "Plan your day", "Avoid multitasking"],
        ordered: true,
      },
    ],
  },
  {
    id: "3",
    title: "Exploring the Wonders of the Amazon Rainforest",
    poster: "https://i.ytimg.com/vi/SbyGoK1LzyQ/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/SbyGoK1LzyQ/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Smxmd8HeB2mkiVbWDIH6H-N1n5GzMsIYBg&s",
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622577610/Exploration-Of-The-Amazon-Rainforest-A-Brief-History/Exploration-Of-The-Amazon-Rainforest-A-Brief-History.jpg",
    ],
    date: "2024-02-27",
    slug: "amazon-rainforest-exploration",
    content: [
      { type: "heading", level: 2, text: "Biodiversity and Ecosystems" },
      {
        type: "text",
        text: "The Amazon Rainforest is a treasure trove of life, harboring countless species of plants and animals.",
      },
      {
        type: "image",
        src: "https://www.delfinamazoncruises.com/wp-content/uploads/2019/09/helikonie-2512650_640.jpg",
        alt: "Amazon plants",
      },
      { type: "heading", level: 3, text: "Threats to the Rainforest" },
      {
        type: "text",
        text: "Deforestation and climate change are the biggest challenges facing this fragile ecosystem.",
      },
    ],
  },
  {
    id: "4",
    title: "Mastering the Art of Public Speaking",
    poster:
      "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/getty_614138202_2000133520009280253_328692.jpg",
    images: [
      "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/getty_614138202_2000133520009280253_328692.jpg",
      "https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2020/03/public-speaker.jpg",
    ],
    date: "2024-02-26",
    slug: "public-speaking-masterclass",
    content: [
      { type: "heading", level: 2, text: "Overcoming Stage Fright" },
      {
        type: "text",
        text: "Practice, preparation, and positive self-talk can help you manage your nerves.",
      },
      {
        type: "quote",
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
    ],
  },
  {
    id: "5",
    title: "The Benefits of Regular Exercise for Mental Health",
    poster:
      "https://media.licdn.com/dms/image/v2/D4E12AQG4RH2sGlAyOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699061434101?e=2147483647&v=beta&t=J4lShwUEw27UHZxgo5uvqbVuKEQ_alv34u-oNc5w3G8",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E12AQG4RH2sGlAyOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699061434101?e=2147483647&v=beta&t=J4lShwUEw27UHZxgo5uvqbVuKEQ_alv34u-oNc5w3G8",
      "https://www.practostatic.com/fit/da3ab880abb042e58b58171beac0628753c7768b",
    ],
    date: "2024-02-25",
    slug: "exercise-mental-health",
    content: [
      { type: "heading", level: 2, text: "Release Endorphins" },
      {
        type: "text",
        text: "Exercise triggers the release of endorphins, which have mood-boosting effects.",
      },
      {
        type: "list",
        items: ["Reduce stress", "Improve sleep", "Boost self-esteem"],
        ordered: false,
      },
    ],
  },
  {
    id: "6",
    title: "Exploring the History of Ancient Rome",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673270347l/75633479.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673270347l/75633479.jpg",
      "https://cdn.thecollector.com/wp-content/uploads/2023/12/explore-ancient-rome-Roman-forum.jpg",
    ],
    date: "2024-02-24",
    slug: "ancient-rome-history",
    content: [
      { type: "heading", level: 2, text: "The Roman Empire" },
      {
        type: "text",
        text: "From its origins as a small city-state to its dominance over a vast empire.",
      },
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/250px-Roman_Empire_Trajan_117AD.png",
        alt: "Roman Empire",
      },
    ],
  },
  {
    id: "7",
    title: "The Art of Coffee Brewing",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyFK-G-CRMTOvXbhk9nw6h07H9Fqm6pwJIw&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyFK-G-CRMTOvXbhk9nw6h07H9Fqm6pwJIw&s",
      "https://gaiacoffee.com/cdn/shop/articles/Coffee_Gaia.png?v=1726509596",
    ],
    date: "2024-02-23",
    slug: "coffee-brewing-guide",
    content: [
      { type: "heading", level: 2, text: "Methods and Techniques" },
      {
        type: "text",
        text: "Explore different brewing methods like pour-over, French press, and espresso.",
      },
    ],
  },
  {
    id: "8",
    title: "Understanding the Benefits of Mindfulness Meditation",
    poster:
      "https://mountaintopclinic.com/wp-content/uploads/2023/02/Here-Are-The-Benefits-Of-Mindfulness-Meditation-That-You-Must-Know-scaled.jpg",
    images: [
      "https://mountaintopclinic.com/wp-content/uploads/2023/02/Here-Are-The-Benefits-Of-Mindfulness-Meditation-That-You-Must-Know-scaled.jpg",
      "https://destinysodyssey.com/wp-content/uploads/2016/02/Benefits-of-Mindfulness-List.jpg",
    ],
    date: "2024-02-22",
    slug: "mindfulness-meditation",
    content: [
      { type: "heading", level: 2, text: "Reducing Stress and Anxiety" },
      {
        type: "text",
        text: "Mindfulness meditation can help calm the mind and reduce symptoms of anxiety and stress.",
      },
    ],
  },
  {
    id: "9",
    title: "Creative Writing: Unleash Your Inner Author",
    poster:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/d50f179e2ad7548e1ff6db97aa417be61d07c614ac78b0fb379bf69988416a92",
    images: [
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/d50f179e2ad7548e1ff6db97aa417be61d07c614ac78b0fb379bf69988416a92",
      "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/fa151177f8eaa420072c9db9fd6d65b09a60ae4bda629de0ad7850458fb2f1ff",
    ],
    date: "2024-02-21",
    slug: "creative-writing-tips",
    content: [
      { type: "heading", level: 2, text: "Developing Your Story Ideas" },
      {
        type: "text",
        text: "Tips and techniques for generating compelling story ideas and developing your characters.",
      },
      {
        type: "quote",
        text: "The scariest moment is always just before you start.",
        author: "Stephen King",
      },
    ],
  },
  {
    id: "10",
    title: "Decoding the Secrets of Successful Startups",
    poster:
      "https://media.licdn.com/dms/image/v2/D4D12AQEujsnzlMDYFA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712577617824?e=2147483647&v=beta&t=3K1fCF9-k_t-cYYmcQIbJmM8L9l5w9p5nHrtdW-KcAI",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D12AQEujsnzlMDYFA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712577617824?e=2147483647&v=beta&t=3K1fCF9-k_t-cYYmcQIbJmM8L9l5w9p5nHrtdW-KcAI",
      "https://media.licdn.com/dms/image/v2/D5612AQHvxFptlzsmOA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731999200818?e=2147483647&v=beta&t=h8m0VRivmjg1f7aO9MhgQtQtXStCmlruIkymvjpCHRc",
    ],
    date: "2024-02-20",
    slug: "startup-success-secrets",
    content: [
      { type: "heading", level: 2, text: "Key Strategies for Startup Growth" },
      {
        type: "text",
        text: "Learn about market research, building a strong team, and securing funding.",
      },
    ],
  },
  {
    id: "11",
    title: "The Joy of Cooking: Simple Recipes for Every Occasion",
    poster:
      "https://m.media-amazon.com/images/I/71Qc-RruBLL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71Qc-RruBLL._AC_UF1000,1000_QL80_.jpg",
      "https://www.brit.co/media-library/joy-of-cooking-recipes.jpg?id=29525425&width=800&quality=90",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeCgTe6Bw_0C0dvSw_iwlIsHZn72cToqeCw&s",
    ],
    date: "2024-02-19",
    slug: "simple-recipes",
    content: [
      { type: "heading", level: 2, text: "Easy Recipes for Weeknight Dinners" },
      {
        type: "text",
        text: "Quick and delicious recipes to make your life easier. From pasta to salads.",
      },
      {
        type: "image",
        src: "https://www.brit.co/media-library/joy-of-cooking-crepes-recipe.jpg?id=29525415&width=1200&height=600&coordinates=0%2C1260%2C0%2C1260",
        alt: "Food",
      },
      {
        type: "list",
        items: ["Chicken Stir-fry", "Vegetable Curry", "One-pan Salmon"],
        ordered: false,
      },
    ],
  },
  {
    id: "12",
    title: "Understanding the Fundamentals of Financial Planning",
    poster:
      "https://product.hstatic.net/200000481913/product/1ea3ac7e-f05b-40b6-88d1-e0d6971963ec_cf30c61c45ec492ca2801df2495dfdf2_master.jpg",
    images: [
      "https://product.hstatic.net/200000481913/product/1ea3ac7e-f05b-40b6-88d1-e0d6971963ec_cf30c61c45ec492ca2801df2495dfdf2_master.jpg",
      "https://www.investopedia.com/thmb/xbHQ1B7ZSbs67dh2gT628vA5mQs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/financial_plan_final-e8e690fce7c7406fb4cc607e408681df.png",
    ],
    date: "2024-02-18",
    slug: "financial-planning-basics",
    content: [
      { type: "heading", level: 2, text: "Budgeting and Saving" },
      {
        type: "text",
        text: "Learn how to create a budget and save for your financial goals.",
      },
      {
        type: "quote",
        text: "Money is a terrible master but an excellent servant.",
        author: "P.T. Barnum",
      },
    ],
  },
  {
    id: "13",
    title: "The Wonders of Stargazing: A Beginner's Guide",
    poster: "https://i.ytimg.com/vi/A887r_yhJ3o/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/A887r_yhJ3o/maxresdefault.jpg",
      "https://koa.com/blog/images/catherdral-rock-sadona-at-night-stars.jpg?preset=blogPhoto",
    ],
    date: "2024-02-17",
    slug: "stargazing-for-beginners",
    content: [
      { type: "heading", level: 2, text: "Essential Equipment for Stargazing" },
      {
        type: "text",
        text: "Explore the night sky, identify constellations, and appreciate the beauty of the cosmos. ",
      },
      {
        type: "image",
        src: "https://www.polytechnique-insights.com/wp-content/uploads/2022/11/adobestock_139734558-scaled.jpeg",
        alt: "Space",
      },
    ],
  },
  {
    id: "14",
    title: "Crafting the Perfect Travel Itinerary",
    poster:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fCUyMnRyYXZlbCUyMHBsYW5uaW5nJTIyfGVufDB8MHx8fDE3MTgzMzkyNDl8Mg&ixlib=rb-4.0.3&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fCUyMnRyYXZlbCUyMHBsYW5uaW5nJTIyfGVufDB8MHx8fDE3MTgzMzkyNDl8Mg&ixlib=rb-4.0.3&q=80&w=1080",
      "https://www.foratravel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9cxgygtadmvl%2F1aAdXR9Mxrm1areTslivsd%2Fa5f980aabcfc1403b6cc3c915a3ea6bf%2Fcharlotte-noelle-98WPMlTl5xo-unsplash.jpg&w=3840&q=900",
    ],
    date: "2024-02-16",
    slug: "travel-itinerary-guide",
    content: [
      { type: "heading", level: 2, text: "Planning Your Dream Trip" },
      {
        type: "text",
        text: "Design your ideal trip, research destinations, and book accommodations.",
      },
    ],
  },
  {
    id: "15",
    title: "The Ultimate Guide to Digital Marketing in 2024",
    poster:
      "https://loftyminds.co.ke/wp-content/uploads/2024/04/The-Ultimate-Guide-to-Digital-Marketing-in-Kenya-1024x611.jpg",
    images: [
      "https://loftyminds.co.ke/wp-content/uploads/2024/04/The-Ultimate-Guide-to-Digital-Marketing-in-Kenya-1024x611.jpg",
      "https://i.ytimg.com/vi/Tof68_uxKkg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqGDwMHMTITUY6UItv51mzaOv4jg",
    ],
    date: "2024-02-15",
    slug: "digital-marketing-2024",
    content: [
      { type: "heading", level: 2, text: "SEO, Content, and Social Media" },
      {
        type: "text",
        text: "Learn about the latest SEO trends, content marketing strategies, and social media best practices.",
      },
      {
        type: "list",
        items: ["SEO", "Content", "Social Media"],
        ordered: false,
      },
    ],
  },
  {
    id: "16",
    title: "The Power of Habit: How to Build Good Habits",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1Uc6Xlr4NCNChxLoztiqq-UwPIeoWqS77Q&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1Uc6Xlr4NCNChxLoztiqq-UwPIeoWqS77Q&s",
      "https://cloud.firebrandtech.com/api/v2/image/111/9780711289642/CoverArtHigh/XL",
    ],
    date: "2024-02-14",
    slug: "building-good-habits",
    content: [
      { type: "heading", level: 2, text: "The Science of Habits" },
      {
        type: "text",
        text: "Understand the habit loop: cue, routine, and reward.",
      },
      {
        type: "quote",
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
      },
    ],
  },
  {
    id: "17",
    title: "The Ultimate Guide to Sustainable Living",
    poster:
      "https://media.licdn.com/dms/image/v2/D5612AQF-hO529COcCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727417621407?e=2147483647&v=beta&t=siTmaDDN9qQWbQiZpXggSxu4LiZgRVc0YCR3OgqPSnI",
    images: [
      "https://media.licdn.com/dms/image/v2/D5612AQF-hO529COcCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727417621407?e=2147483647&v=beta&t=siTmaDDN9qQWbQiZpXggSxu4LiZgRVc0YCR3OgqPSnI",
      "https://www.hulkapps.com/cdn/shop/articles/scaled_IMAGE-FILE-UPLOADS-the-ultimate-guide-to-sustainable-living-practical-tips-for-a-greener-future-540691_1024x.jpg?v=1722243110",
    ],
    date: "2024-02-13",
    slug: "sustainable-living-guide",
    content: [
      { type: "heading", level: 2, text: "Reducing Your Environmental Impact" },
      {
        type: "text",
        text: "Tips for reducing your carbon footprint and adopting eco-friendly practices.",
      },
    ],
  },
  {
    id: "18",
    title: "Decoding the Secrets of Agile Project Management",
    poster:
      "https://media.licdn.com/dms/image/D4D12AQEavXOBvYjTNw/article-cover_image-shrink_720_1280/0/1695936785739?e=2147483647&v=beta&t=HXo92o1IIO9_wRCIm7mwlIhgb1-eWnguc8QYQRczo20",
    images: [
      "https://media.licdn.com/dms/image/D4D12AQEavXOBvYjTNw/article-cover_image-shrink_720_1280/0/1695936785739?e=2147483647&v=beta&t=HXo92o1IIO9_wRCIm7mwlIhgb1-eWnguc8QYQRczo20",
      "https://media.licdn.com/dms/image/v2/D4D12AQH3iwKd9YtlcA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1675962105878?e=2147483647&v=beta&t=4kAxyhC_qA7KUSC_dK8ns9o7puPdGbZCSi1ZrcpQTt8",
    ],
    date: "2024-02-12",
    slug: "agile-project-management",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Agile Methodologies: Scrum and Kanban",
      },
      {
        type: "text",
        text: "Learn about Scrum and Kanban frameworks, and how to apply them effectively.",
      },
    ],
  },
  {
    id: "19",
    title: "Exploring the Wonders of Space and Astronomy",
    poster:
      "https://i.ytimg.com/vi/zuR_0iFnPGk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgVih_MA8=&rs=AOn4CLAPmfRlEU51k873Ck9lpHe9ZJfBSw",
    images: [
      "https://i.ytimg.com/vi/zuR_0iFnPGk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgVih_MA8=&rs=AOn4CLAPmfRlEU51k873Ck9lpHe9ZJfBSw",
      "https://images.newscientist.com/wp-content/uploads/2022/07/26145858/sei116508830.jpg",
    ],
    date: "2024-02-11",
    slug: "space-and-astronomy",
    content: [
      { type: "heading", level: 2, text: "The Planets and Beyond" },
      {
        type: "text",
        text: "Discover the mysteries of planets, stars, and galaxies.",
      },
    ],
  },
  {
    id: "20",
    title: "The Art of Negotiation: Mastering the Skills",
    poster:
      "https://www.creativeparamita.com/wp-content/uploads/2023/04/The-Art-of-Negotiation.jpg",
    images: [
      "https://www.creativeparamita.com/wp-content/uploads/2023/04/The-Art-of-Negotiation.jpg",
      "https://xeinadin.com/wp-content/uploads/sites/4/2024/01/negotiation-1024x683.jpg",
    ],
    date: "2024-02-10",
    slug: "negotiation-skills",
    content: [
      { type: "heading", level: 2, text: "Preparing for Negotiation" },
      {
        type: "text",
        text: "Learn strategies for successful negotiation, including preparation, communication, and compromise.",
      },
    ],
  },
  {
    id: "21",
    title: "Boosting Your Productivity with the Pomodoro Technique",
    poster:
      "https://engineeringmanagementinstitute.org/wp-content/uploads/2024/06/LD-Blog-4.jpg",
    images: [
      "https://engineeringmanagementinstitute.org/wp-content/uploads/2024/06/LD-Blog-4.jpg",
      "https://images.unsplash.com/photo-1528892952291-f44713d8a840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80https://blog.geetauniversity.edu.in/wp-content/uploads/2024/01/the-pomodoro-technique.jpg",
    ],
    date: "2024-02-09",
    slug: "pomodoro-technique",
    content: [
      { type: "heading", level: 2, text: "How Pomodoro Works" },
      {
        type: "text",
        text: "Enhance focus and productivity by breaking work into intervals (pomodoros) separated by short breaks.",
      },
    ],
  },
  {
    id: "22",
    title: "The Ultimate Guide to Home Gardening",
    poster:
      "https://organicabiotech.com/wp-content/uploads/2022/05/A-Complete-Guide-to-Home-Gardening.jpg",
    images: [
      "https://organicabiotech.com/wp-content/uploads/2022/05/A-Complete-Guide-to-Home-Gardening.jpg",
      "https://www.leaflandscapesupply.com/wp-content/uploads/2024/02/Leaf-Landscape-Supply-Residential_10.png",
      "https://s3media.angieslist.com/s3fs-public/Mother-daughter-gardening.jpeg",
    ],
    date: "2024-02-29",
    slug: "ultimate-home-gardening-guide",
    content: [
      { type: "heading", level: 2, text: "Getting Started with Gardening" },
      {
        type: "text",
        text: "Gardening can be a rewarding hobby. Start with simple plants.",
      },
      {
        type: "image",
        src: "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/8e/c7/AU-T2-S-2548576-School-Garden-Tools-Display-Labels-English_ver_1.jpg",
        alt: "Gardening Tools",
      },
      {
        type: "list",
        items: ["Water regularly", "Provide sunlight", "Use fertilizer"],
        ordered: false,
      },
      { type: "heading", level: 3, text: "Choosing the Right Plants" },
      {
        type: "text",
        text: "Consider your climate and available space.",
      },
    ],
  },
  {
    id: "23",
    title: "10 Tips for Effective Time Management",
    poster:
      "https://nairatop.com.ng/wp-content/uploads/2024/05/Time-Management.jpg",
    images: [
      "https://nairatop.com.ng/wp-content/uploads/2024/05/Time-Management.jpg",
      "https://fastercapital.com/i/Mastering-Series-9-10--Tips-and-Tricks-for-Success--Effective-Time-Management-Techniques.webp",
    ],
    date: "2024-02-28",
    slug: "effective-time-management-tips",
    content: [
      { type: "heading", level: 2, text: "Prioritize Your Tasks" },
      {
        type: "text",
        text: "Identify the most important tasks first. Use the Eisenhower Matrix to categorize tasks.",
      },
      {
        type: "quote",
        text: "Time is what we want most, but what we use worst.",
        author: "William Penn",
      },
      {
        type: "list",
        items: ["Set goals", "Plan your day", "Avoid multitasking"],
        ordered: true,
      },
    ],
  },
  {
    id: "24",
    title: "Exploring the Wonders of the Amazon Rainforest",
    poster: "https://i.ytimg.com/vi/SbyGoK1LzyQ/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/SbyGoK1LzyQ/maxresdefault.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Smxmd8HeB2mkiVbWDIH6H-N1n5GzMsIYBg&s",
      "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622577610/Exploration-Of-The-Amazon-Rainforest-A-Brief-History/Exploration-Of-The-Amazon-Rainforest-A-Brief-History.jpg",
    ],
    date: "2024-02-27",
    slug: "amazon-rainforest-exploration",
    content: [
      { type: "heading", level: 2, text: "Biodiversity and Ecosystems" },
      {
        type: "text",
        text: "The Amazon Rainforest is a treasure trove of life, harboring countless species of plants and animals.",
      },
      {
        type: "image",
        src: "https://www.delfinamazoncruises.com/wp-content/uploads/2019/09/helikonie-2512650_640.jpg",
        alt: "Amazon plants",
      },
      { type: "heading", level: 3, text: "Threats to the Rainforest" },
      {
        type: "text",
        text: "Deforestation and climate change are the biggest challenges facing this fragile ecosystem.",
      },
    ],
  },
  {
    id: "25",
    title: "Mastering the Art of Public Speaking",
    poster:
      "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/getty_614138202_2000133520009280253_328692.jpg",
    images: [
      "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/getty_614138202_2000133520009280253_328692.jpg",
      "https://professional.dce.harvard.edu/wp-content/uploads/sites/9/2020/03/public-speaker.jpg",
    ],
    date: "2024-02-26",
    slug: "public-speaking-masterclass",
    content: [
      { type: "heading", level: 2, text: "Overcoming Stage Fright" },
      {
        type: "text",
        text: "Practice, preparation, and positive self-talk can help you manage your nerves.",
      },
      {
        type: "quote",
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
    ],
  },
  {
    id: "26",
    title: "The Benefits of Regular Exercise for Mental Health",
    poster:
      "https://media.licdn.com/dms/image/v2/D4E12AQG4RH2sGlAyOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699061434101?e=2147483647&v=beta&t=J4lShwUEw27UHZxgo5uvqbVuKEQ_alv34u-oNc5w3G8",
    images: [
      "https://media.licdn.com/dms/image/v2/D4E12AQG4RH2sGlAyOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699061434101?e=2147483647&v=beta&t=J4lShwUEw27UHZxgo5uvqbVuKEQ_alv34u-oNc5w3G8",
      "https://www.practostatic.com/fit/da3ab880abb042e58b58171beac0628753c7768b",
    ],
    date: "2024-02-25",
    slug: "exercise-mental-health",
    content: [
      { type: "heading", level: 2, text: "Release Endorphins" },
      {
        type: "text",
        text: "Exercise triggers the release of endorphins, which have mood-boosting effects.",
      },
      {
        type: "list",
        items: ["Reduce stress", "Improve sleep", "Boost self-esteem"],
        ordered: false,
      },
    ],
  },
  {
    id: "27",
    title: "Exploring the History of Ancient Rome",
    poster:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673270347l/75633479.jpg",
    images: [
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673270347l/75633479.jpg",
      "https://cdn.thecollector.com/wp-content/uploads/2023/12/explore-ancient-rome-Roman-forum.jpg",
    ],
    date: "2024-02-24",
    slug: "ancient-rome-history",
    content: [
      { type: "heading", level: 2, text: "The Roman Empire" },
      {
        type: "text",
        text: "From its origins as a small city-state to its dominance over a vast empire.",
      },
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/250px-Roman_Empire_Trajan_117AD.png",
        alt: "Roman Empire",
      },
    ],
  },
  {
    id: "28",
    title: "The Art of Coffee Brewing",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyFK-G-CRMTOvXbhk9nw6h07H9Fqm6pwJIw&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyFK-G-CRMTOvXbhk9nw6h07H9Fqm6pwJIw&s",
      "https://gaiacoffee.com/cdn/shop/articles/Coffee_Gaia.png?v=1726509596",
    ],
    date: "2024-02-23",
    slug: "coffee-brewing-guide",
    content: [
      { type: "heading", level: 2, text: "Methods and Techniques" },
      {
        type: "text",
        text: "Explore different brewing methods like pour-over, French press, and espresso.",
      },
    ],
  },
  {
    id: "29",
    title: "Understanding the Benefits of Mindfulness Meditation",
    poster:
      "https://mountaintopclinic.com/wp-content/uploads/2023/02/Here-Are-The-Benefits-Of-Mindfulness-Meditation-That-You-Must-Know-scaled.jpg",
    images: [
      "https://mountaintopclinic.com/wp-content/uploads/2023/02/Here-Are-The-Benefits-Of-Mindfulness-Meditation-That-You-Must-Know-scaled.jpg",
      "https://destinysodyssey.com/wp-content/uploads/2016/02/Benefits-of-Mindfulness-List.jpg",
    ],
    date: "2024-02-22",
    slug: "mindfulness-meditation",
    content: [
      { type: "heading", level: 2, text: "Reducing Stress and Anxiety" },
      {
        type: "text",
        text: "Mindfulness meditation can help calm the mind and reduce symptoms of anxiety and stress.",
      },
    ],
  },
  {
    id: "30",
    title: "Creative Writing: Unleash Your Inner Author",
    poster:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/d50f179e2ad7548e1ff6db97aa417be61d07c614ac78b0fb379bf69988416a92",
    images: [
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/d50f179e2ad7548e1ff6db97aa417be61d07c614ac78b0fb379bf69988416a92",
      "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000089927/fa151177f8eaa420072c9db9fd6d65b09a60ae4bda629de0ad7850458fb2f1ff",
    ],
    date: "2024-02-21",
    slug: "creative-writing-tips",
    content: [
      { type: "heading", level: 2, text: "Developing Your Story Ideas" },
      {
        type: "text",
        text: "Tips and techniques for generating compelling story ideas and developing your characters.",
      },
      {
        type: "quote",
        text: "The scariest moment is always just before you start.",
        author: "Stephen King",
      },
    ],
  },
  {
    id: "31",
    title: "Decoding the Secrets of Successful Startups",
    poster:
      "https://media.licdn.com/dms/image/v2/D4D12AQEujsnzlMDYFA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712577617824?e=2147483647&v=beta&t=3K1fCF9-k_t-cYYmcQIbJmM8L9l5w9p5nHrtdW-KcAI",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D12AQEujsnzlMDYFA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712577617824?e=2147483647&v=beta&t=3K1fCF9-k_t-cYYmcQIbJmM8L9l5w9p5nHrtdW-KcAI",
      "https://media.licdn.com/dms/image/v2/D5612AQHvxFptlzsmOA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731999200818?e=2147483647&v=beta&t=h8m0VRivmjg1f7aO9MhgQtQtXStCmlruIkymvjpCHRc",
    ],
    date: "2024-02-20",
    slug: "startup-success-secrets",
    content: [
      { type: "heading", level: 2, text: "Key Strategies for Startup Growth" },
      {
        type: "text",
        text: "Learn about market research, building a strong team, and securing funding.",
      },
    ],
  },
  {
    id: "32",
    title: "The Joy of Cooking: Simple Recipes for Every Occasion",
    poster:
      "https://m.media-amazon.com/images/I/71Qc-RruBLL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71Qc-RruBLL._AC_UF1000,1000_QL80_.jpg",
      "https://www.brit.co/media-library/joy-of-cooking-recipes.jpg?id=29525425&width=800&quality=90",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeCgTe6Bw_0C0dvSw_iwlIsHZn72cToqeCw&s",
    ],
    date: "2024-02-19",
    slug: "simple-recipes",
    content: [
      { type: "heading", level: 2, text: "Easy Recipes for Weeknight Dinners" },
      {
        type: "text",
        text: "Quick and delicious recipes to make your life easier. From pasta to salads.",
      },
      {
        type: "image",
        src: "https://www.brit.co/media-library/joy-of-cooking-crepes-recipe.jpg?id=29525415&width=1200&height=600&coordinates=0%2C1260%2C0%2C1260",
        alt: "Food",
      },
      {
        type: "list",
        items: ["Chicken Stir-fry", "Vegetable Curry", "One-pan Salmon"],
        ordered: false,
      },
    ],
  },
  {
    id: "33",
    title: "Understanding the Fundamentals of Financial Planning",
    poster:
      "https://product.hstatic.net/200000481913/product/1ea3ac7e-f05b-40b6-88d1-e0d6971963ec_cf30c61c45ec492ca2801df2495dfdf2_master.jpg",
    images: [
      "https://product.hstatic.net/200000481913/product/1ea3ac7e-f05b-40b6-88d1-e0d6971963ec_cf30c61c45ec492ca2801df2495dfdf2_master.jpg",
      "https://www.investopedia.com/thmb/xbHQ1B7ZSbs67dh2gT628vA5mQs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/financial_plan_final-e8e690fce7c7406fb4cc607e408681df.png",
    ],
    date: "2024-02-18",
    slug: "financial-planning-basics",
    content: [
      { type: "heading", level: 2, text: "Budgeting and Saving" },
      {
        type: "text",
        text: "Learn how to create a budget and save for your financial goals.",
      },
      {
        type: "quote",
        text: "Money is a terrible master but an excellent servant.",
        author: "P.T. Barnum",
      },
    ],
  },
  {
    id: "34",
    title: "The Wonders of Stargazing: A Beginner's Guide",
    poster: "https://i.ytimg.com/vi/A887r_yhJ3o/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/A887r_yhJ3o/maxresdefault.jpg",
      "https://koa.com/blog/images/catherdral-rock-sadona-at-night-stars.jpg?preset=blogPhoto",
    ],
    date: "2024-02-17",
    slug: "stargazing-for-beginners",
    content: [
      { type: "heading", level: 2, text: "Essential Equipment for Stargazing" },
      {
        type: "text",
        text: "Explore the night sky, identify constellations, and appreciate the beauty of the cosmos. ",
      },
      {
        type: "image",
        src: "https://www.polytechnique-insights.com/wp-content/uploads/2022/11/adobestock_139734558-scaled.jpeg",
        alt: "Space",
      },
    ],
  },
  {
    id: "35",
    title: "Crafting the Perfect Travel Itinerary",
    poster:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fCUyMnRyYXZlbCUyMHBsYW5uaW5nJTIyfGVufDB8MHx8fDE3MTgzMzkyNDl8Mg&ixlib=rb-4.0.3&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fCUyMnRyYXZlbCUyMHBsYW5uaW5nJTIyfGVufDB8MHx8fDE3MTgzMzkyNDl8Mg&ixlib=rb-4.0.3&q=80&w=1080",
      "https://www.foratravel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F9cxgygtadmvl%2F1aAdXR9Mxrm1areTslivsd%2Fa5f980aabcfc1403b6cc3c915a3ea6bf%2Fcharlotte-noelle-98WPMlTl5xo-unsplash.jpg&w=3840&q=900",
    ],
    date: "2024-02-16",
    slug: "travel-itinerary-guide",
    content: [
      { type: "heading", level: 2, text: "Planning Your Dream Trip" },
      {
        type: "text",
        text: "Design your ideal trip, research destinations, and book accommodations.",
      },
    ],
  },
  {
    id: "36",
    title: "The Ultimate Guide to Digital Marketing in 2024",
    poster:
      "https://loftyminds.co.ke/wp-content/uploads/2024/04/The-Ultimate-Guide-to-Digital-Marketing-in-Kenya-1024x611.jpg",
    images: [
      "https://loftyminds.co.ke/wp-content/uploads/2024/04/The-Ultimate-Guide-to-Digital-Marketing-in-Kenya-1024x611.jpg",
      "https://i.ytimg.com/vi/Tof68_uxKkg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqGDwMHMTITUY6UItv51mzaOv4jg",
    ],
    date: "2024-02-15",
    slug: "digital-marketing-2024",
    content: [
      { type: "heading", level: 2, text: "SEO, Content, and Social Media" },
      {
        type: "text",
        text: "Learn about the latest SEO trends, content marketing strategies, and social media best practices.",
      },
      {
        type: "list",
        items: ["SEO", "Content", "Social Media"],
        ordered: false,
      },
    ],
  },
  {
    id: "37",
    title: "The Power of Habit: How to Build Good Habits",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1Uc6Xlr4NCNChxLoztiqq-UwPIeoWqS77Q&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1Uc6Xlr4NCNChxLoztiqq-UwPIeoWqS77Q&s",
      "https://cloud.firebrandtech.com/api/v2/image/111/9780711289642/CoverArtHigh/XL",
    ],
    date: "2024-02-14",
    slug: "building-good-habits",
    content: [
      { type: "heading", level: 2, text: "The Science of Habits" },
      {
        type: "text",
        text: "Understand the habit loop: cue, routine, and reward.",
      },
      {
        type: "quote",
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
      },
    ],
  },
  {
    id: "38",
    title: "The Ultimate Guide to Sustainable Living",
    poster:
      "https://media.licdn.com/dms/image/v2/D5612AQF-hO529COcCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727417621407?e=2147483647&v=beta&t=siTmaDDN9qQWbQiZpXggSxu4LiZgRVc0YCR3OgqPSnI",
    images: [
      "https://media.licdn.com/dms/image/v2/D5612AQF-hO529COcCg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727417621407?e=2147483647&v=beta&t=siTmaDDN9qQWbQiZpXggSxu4LiZgRVc0YCR3OgqPSnI",
      "https://www.hulkapps.com/cdn/shop/articles/scaled_IMAGE-FILE-UPLOADS-the-ultimate-guide-to-sustainable-living-practical-tips-for-a-greener-future-540691_1024x.jpg?v=1722243110",
    ],
    date: "2024-02-13",
    slug: "sustainable-living-guide",
    content: [
      { type: "heading", level: 2, text: "Reducing Your Environmental Impact" },
      {
        type: "text",
        text: "Tips for reducing your carbon footprint and adopting eco-friendly practices.",
      },
    ],
  },
  {
    id: "39",
    title: "Decoding the Secrets of Agile Project Management",
    poster:
      "https://media.licdn.com/dms/image/D4D12AQEavXOBvYjTNw/article-cover_image-shrink_720_1280/0/1695936785739?e=2147483647&v=beta&t=HXo92o1IIO9_wRCIm7mwlIhgb1-eWnguc8QYQRczo20",
    images: [
      "https://media.licdn.com/dms/image/D4D12AQEavXOBvYjTNw/article-cover_image-shrink_720_1280/0/1695936785739?e=2147483647&v=beta&t=HXo92o1IIO9_wRCIm7mwlIhgb1-eWnguc8QYQRczo20",
      "https://media.licdn.com/dms/image/v2/D4D12AQH3iwKd9YtlcA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1675962105878?e=2147483647&v=beta&t=4kAxyhC_qA7KUSC_dK8ns9o7puPdGbZCSi1ZrcpQTt8",
    ],
    date: "2024-02-12",
    slug: "agile-project-management",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Agile Methodologies: Scrum and Kanban",
      },
      {
        type: "text",
        text: "Learn about Scrum and Kanban frameworks, and how to apply them effectively.",
      },
    ],
  },
  {
    id: "40",
    title: "Exploring the Wonders of Space and Astronomy",
    poster:
      "https://i.ytimg.com/vi/zuR_0iFnPGk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgVih_MA8=&rs=AOn4CLAPmfRlEU51k873Ck9lpHe9ZJfBSw",
    images: [
      "https://i.ytimg.com/vi/zuR_0iFnPGk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgVih_MA8=&rs=AOn4CLAPmfRlEU51k873Ck9lpHe9ZJfBSw",
      "https://images.newscientist.com/wp-content/uploads/2022/07/26145858/sei116508830.jpg",
    ],
    date: "2024-02-11",
    slug: "space-and-astronomy",
    content: [
      { type: "heading", level: 2, text: "The Planets and Beyond" },
      {
        type: "text",
        text: "Discover the mysteries of planets, stars, and galaxies.",
      },
    ],
  },
  {
    id: "41",
    title: "The Art of Negotiation: Mastering the Skills",
    poster:
      "https://www.creativeparamita.com/wp-content/uploads/2023/04/The-Art-of-Negotiation.jpg",
    images: [
      "https://www.creativeparamita.com/wp-content/uploads/2023/04/The-Art-of-Negotiation.jpg",
      "https://xeinadin.com/wp-content/uploads/sites/4/2024/01/negotiation-1024x683.jpg",
    ],
    date: "2024-02-10",
    slug: "negotiation-skills",
    content: [
      { type: "heading", level: 2, text: "Preparing for Negotiation" },
      {
        type: "text",
        text: "Learn strategies for successful negotiation, including preparation, communication, and compromise.",
      },
    ],
  },
  {
    id: "42",
    title: "Boosting Your Productivity with the Pomodoro Technique",
    poster:
      "https://engineeringmanagementinstitute.org/wp-content/uploads/2024/06/LD-Blog-4.jpg",
    images: [
      "https://engineeringmanagementinstitute.org/wp-content/uploads/2024/06/LD-Blog-4.jpg",
      "https://images.unsplash.com/photo-1528892952291-f44713d8a840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80https://blog.geetauniversity.edu.in/wp-content/uploads/2024/01/the-pomodoro-technique.jpg",
    ],
    date: "2024-02-09",
    slug: "pomodoro-technique",
    content: [
      { type: "heading", level: 2, text: "How Pomodoro Works" },
      {
        type: "text",
        text: "Enhance focus and productivity by breaking work into intervals (pomodoros) separated by short breaks.",
      },
    ],
  },
];

export default blogPostData;
