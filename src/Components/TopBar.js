const messageList = 
[
  'Help me go on a vacation to a beach somewhere!',
  'I need this money real bad!',
  'We makin\' it out the hood with this!',
  'This might be my big break, gimme your cash!',
  'At least I\'m not robbin\' banks!',
  "Help me buy avocado toast, I'm broke",
  "Donate to my cat's luxury lifestyle",
  "Support my online shopping addiction",
  "Fund my dream of becoming a mermaid",
  "Help me pay off my student loans so I can finally afford avocado toast",
  "Donate to my 'find a sugar daddy' fund",
  "Be a hero and fund my coffee addiction",
  "Help me upgrade my internet so I can binge-watch Netflix in peace",
  "Support my 'buy more plants than I can take care of' habit",
  "Fund my quest to find the world's best pizza",
  "Donate to my 'get a personal chef' dream",
  "Help me afford therapy so I can stop making bad life choices",
  "Help me upgrade my wardrobe from 'sweatpants chic'",
  "Fund my dream of opening a cat cafe",
  "Support my quest to become a TikTok star",
  "Donate to my 'buy every book on Amazon' goal",
  "Help me pay for therapy for my goldfish's anxiety",
  "Be a superhero and fund my ice cream addiction",
  "Support my dream of starting a corgi farm",
  "Donate to my 'never leave the house again' plan",
  "Fund my goal of becoming a professional napper",
  "Help me afford a personal assistant to do my laundry",
  "Support my dream of being able to order takeout every day",
  "Donate to my 'travel the world in a hot air balloon' fund"
]

let message = messageList[Math.floor(Math.random() * messageList.length)];

export default function TopBar() {
  return (
    <header>
      <h1>
        GoFund<span>Me</span>
      </h1>
      <p>{message}</p>
    </header>
  );
}
