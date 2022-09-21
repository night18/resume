export const update_date = "September 18, 2022"

export const degrees = [
  {
    'name': 'Purdue University',
    'level': 'Ph.D.',
    'major': 'Computer Science',
    'location': 'West Lafayette, IN',
    'start_year': '2020',
    'end_year': '2024 (Expected)',
    'src': 'Purdue.png'
  },
  {
    'name': 'West Virginia University',
    'level': 'M.S.',
    'major': 'Computer Science',
    'location': 'Morgantown, WV',
    'start_year': '2016',
    'end_year': '2018',
    'src': 'WVU.png'
  },
  {
    'name': 'National Central University',
    'level': 'Bachelor',
    'major': 'Information Management',
    'location': 'Taiwan',
    'start_year': '2008',
    'end_year': '2012',
    'src': 'NCU.png'
  }
]

export const jobs = [
  {
    'name': 'Purdue University',
    'location': 'West Lafayette, IN',
    'src': 'Purdue.png',
    'positions': [
      {
        'title': 'Graduate Research Assistant',
        'start_year': '2022',
        'end_year': 'Current',
        'duty': [
          'Conductempirical studiesto assess users\' behavior and trust in machine learning models in real-world scenarios',
          'Design and assess different mechanisms (e.g., model transparency and interactive user tutorial) to help people work with AI appropriately and fairly.',
          'Build web applications through vue.js and Django and deploy them on AWS for online empirical studies.'
        ]
      },
      {
        'title': 'Graduate Teaching Assistant',
        'start_year': '2020',
        'end_year': '2022',
        'duty': [
          'Led multiple undergraduate lab courses for class: CS 251: Data structure and Algorithms (2022 Spring), CS 242: Introduction to Data Science (2021 Fall), and CS 180: Problem Solving And Object-Oriented Programming (2020 Fall, 2021 Spring)',
          'Coached two undergraduate teaching assistants to propose and develop class projects by Java and JUnit.'
        ]
      },
    ]

  },
  {
    'name': 'Brain Techonolgies',
    'location': 'San Mateo ,CA',
    'src': 'brain.jpeg',
    'positions': [
      {
        'title': 'NLP Intern',
        'start_year': '2022 June',
        'end_year': '2022 August',
        'duty': [
          'Integrated GPT-3 and recommendation algorithm to implement a Google Chrome extension to recommend products and flight tickets based on the users\' YouTube videos browse history.',
          'Collaborate with teams to complete an online research tool through the latest NLP algorithms to support users in summarizing long documents, translating foreign documents, and semantic searching when they use the Internet.',
          'Research and reform the limitations of the latest NLP algorithms to better fit real-world settings.'
        ]
      }
    ]
  },
  {
    'name': 'Covoir',
    'location': 'Vancouver, BC, Canada',
    'src': 'covoir.jpeg',
    'positions': [
      {
        'title': 'Co-founder',
        'start_year': '2019 January',
        'end_year': '2019 December',
        'duty': [
          'Proposed and developed decentralized Oracle service providing reliable off-chain data to the smart contracts on blockchains',
          'Promoted the company to potential investors and raised more than $50,000 from accelerators.'
        ]
      }
    ]
  },
  {
    'name': 'ACM WVU Student Chapter',
    'location': 'Morgantown, WV',
    'src': 'acm.png',
    'positions': [
      {
        'title': 'WebMaster',
        'start_year': '2018',
        'end_year': '2019',
        'duty': [
          'Designed and Maintained the official website for the organization.',
          'Organized and gave a speech in a workshop to teach participants how to build Android application.'
        ]
      }
    ]
  },
  {
    'name': 'West Virginia University',
    'location': 'Morgantown, WV',
    'src': 'WVU.png',
    'positions': [
      {
        'title': 'Teaching Assistant',
        'start_year': '2019 August',
        'end_year': '2019 December',
        'duty': [
          'Assisted faculty members with classroom instruction material and exams for courses: CS 453: Data and Computer Communications and CS 220: Discrete Mathematics.'
        ]
      },
      {
        'title': 'Research Assistant',
        'start_year': '2017',
        'end_year': '2019',
        'duty': [
          'Develop a budget supervision system through blockchain technology to encourage citizens involving in community development with local government.',
          'Design and implement a chrome plugin to train crowd workers to speed 31.6% up to their work.',
          'Interview Latin American users and design the prototype of mobile remittance applications which utilizes cryptocurrency transfer to reduce international transaction fee.',
          'Apply IRB expedited protocols for human subject research.'
        ]
      },
    ]
  },
  {
    'name': 'Cateno',
    'location': 'San Francisco, California',
    'src': 'cateno.jpeg',
    'positions': [
      {
        'title': 'Software engineer Intern',
        'start_year': '2018',
        'end_year': '2018',
        'duty': [
          'Develop an Initial Coin Offer (ICO) Governance application on Ethereum using web3.py to connect the blockchain network to the local server and allow users to monitorthe ICO on the blockchain network through theserver.'
        ]
      }
    ]
  },
  {
    'name': 'Mitake',
    'location': 'Taiwan',
    'src': 'mitake.png',
    'positions': [
      {
        'title': 'Android application developer',
        'start_year': '2014',
        'end_year': '2015',
        'duty': [
          'Programmed and maintained stock ordering applications for 8 different stockbrokers on Android phones and tablets by using java and Android SDK.',
          'Troubleshot user\'s technology problems and existed bugs on published stock ordering applications.',
          'Overhauled the old stock ordering applications to enhance the code\'s efficiency and code readability, reducing the bug happen rates which made by other programmers.',
          'Collaborated with product management department to diagnose and evaluate customers\' requirements and the applications download amount exceeds 300,000 times.'
        ]
      }
    ]
  }
]

export const papers = [
  {
    'title': 'Exploring the Effects of Machine Learning Literacy Interventions on Laypeople’s Reliance on Machine Learning Models',
    'authors': ['Chun-Wei Chiang','Ming Yin'],
    'abbreviation': 'IUI',
    'full_publisher': 'The 27th ACM Conference on Intelligent User Interfaces 2022',
    'publish_year': '2022',
    'href': 'machine-learning-literacy.pdf',
    'src': 'online-learning.png',
    'areas': ['Human AI interaction', 'Bias in Machine learning', 'User training', 'Human Computer Interaction'],
    'supplementary': [
      {
        'key': 'supplementary materials',
        'href': 'machine-learning-literacy-supplementary.pdf'
      }
    ]
  },
  {
    'title': 'You’d Better Stop! Understanding Human Reliance on Machine Learning Models under Covariate Shift',
    'authors': ['Chun-Wei Chiang','Ming Yin'],
    'abbreviation': 'WebSci',
    'full_publisher': '13th ACM Web Science Conference 2021',
    'publish_year': '2021',
    'href': 'better-stop.pdf',
    'src': 'stop.png',
    'areas': ['Human AI interaction', 'Human Computer Interaction', 'Bias in Machine learning']
  },
  {
    'title': 'Becoming the Super Turker: Increasing Wages via a Transparency Criteria from Skilled Workers',
    'authors': ['Saiph Savage','Chun-Wei Chiang','Susumu Saito', 'Carlos Toxtli', 'Jeffrey Bigham'],
    'abbreviation': 'WWW',
    'full_publisher': 'The Web Conference 2020',
    'publish_year': '2020',
    'href': 'super-turker.pdf',
    'src': 'businessman.png',
    'areas': ['Crowd worker welfare', 'User training']
  },
  {
    'title': 'Predicting the Working Time of Microtasks Based on Workers\' Perception of Prediction Errors',
    'authors': ['Susumu Saito', 'Chun-Wei Chiang', 'Saiph Savage', 'Teppei Nakano', 'Tetsunori Kobayashi', 'Jeffrey Bigham'],
    'abbreviation': '',
    'full_publisher': 'Human Computation Journal',
    'publish_year': '2019',
    'href': 'predicting-work-time.pdf',
    'src': 'process.png',
    'areas': ['Crowd worker welfare']
  },
  {
    'title': 'TurkScanner: Predicting the Hourly Wage of Microtasks',
    'authors': ['Susumu Saito', 'Chun-Wei Chiang', 'Saiph Savage', 'Teppei Nakano', 'Tetsunori Kobayashi', 'Jeffrey Bigham'],
    'abbreviation': 'WWW',
    'full_publisher': 'The Web Conference 2019',
    'publish_year': '2019',
    'href': 'turkScanner.pdf',
    'src': 'search.png',
    'areas': ['Crowd worker welfare'],
    'note': 'Best Poster Honourable Mention (0.8%)'
  },
  {
    'title': 'The Challenges and Trends of Deploying Blockchain in the Real World for the Users’ Need',
    'authors': ['Chun-Wei Chiang', 'Eber Betanzos', 'Saiph Savage'],
    'abbreviation': '',
    'full_publisher': 'Journal of Cyberspace Studies',
    'publish_year': '2019',
    'href': 'blockchain-challenges.pdf',
    'src': 'halving.png',
    'areas': ['Blockchain applications']
  },
  {
    'title': 'Turker Tales: Integrating Tangential Play into Crowd Work',
    'authors': ['Anna Kasunic', 'Chun-Wei Chiang', 'Geoff Kaufman', 'Saiph Savage'],
    'abbreviation': 'DIS',
    'full_publisher': 'ACM Conference on Designing Interactive Systems 2019',
    'publish_year': '2019',
    'href': 'turker-tale.pdf',
    'src': 'script.png',
    'areas': ['Crowd worker welfare']
  },
  {
    'title': 'Crowd Coach: Peer Coaching for Crowd Workers\' Skill Growth',
    'authors': ['Chun-Wei Chiang', 'Anna Kasunic', 'Saiph Savage'],
    'abbreviation': 'CSCW',
    'full_publisher': 'ACM Conference on Computer-Supported Cooperative Work 2018',
    'publish_year': '2018',
    'href': 'crowdcoach.pdf',
    'src': 'together.png',
    'areas': ['Crowd worker welfare', 'User training']
  },
  {
    'title': 'Crowd Work on a CV? Understanding How AMT Fits into Turkers\' Career Goals and Professional Profiles',
    'authors': ['Anna Kasunic', 'Chun-Wei Chiang', 'Geoff Kaufman', 'Saiph Savage'],
    'abbreviation': 'CI',
    'full_publisher': 'ACM Collective Intelligence Conference 2018',
    'publish_year': '2018',
    'href': 'crowd-work-cv.pdf',
    'src': 'curriculum.png',
    'areas': ['Crowd worker welfare'],
    'supplementary': [
      {
        'key': 'Poster',
        'href': 'ci_poster.pdf'
      }
    ]
  },
  {
    'title': 'Exploring Blockchain for Trustful Collaborations between Immigrants and Governments',
    'authors': ['Chun-Wei Chiang', 'Eber Betanzos', 'Saiph Savage'],
    'abbreviation': 'CHI Extended Abstract:',
    'full_publisher': 'Extended Abstracts of the 2018 CHI Conference on Human Factors in Computing Systems',
    'publish_year': '2018',
    'href': 'blockchain-trustful.pdf',
    'src': 'bitcoin.png',
    'areas': ['Blockchain applications']
  },
  {
    'title': 'Understanding Interface Design and Mobile Money Perceptions in Latin America',
    'authors': ['Chun-Wei Chiang', 'Caroline Anderson', 'Claudia Flores Saviaga', 'Eduardo Jr Arenas', 'Felipe Colin', 'Mario Romero', 'Cuauhtemoc Rivera-Loaiza', 'Norma Elva Chavez', 'Saiph Savage'],
    'abbreviation': 'CLIHC:',
    'full_publisher': 'Proceedings of the 8th Latin American Conference on Human-Computer Interaction 2017',
    'publish_year': '2017',
    'href': 'mobile-money.pdf',
    'src': 'migra.png',
    'areas': ['Human Computer Interaction'] 
  },
]

