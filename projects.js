export const intro = {
  title: 'My technical portfolio',
  subtitle:
    'A collection of both my own projects and others I have contributed to.'
}

export const projects = [
  {
    name: 'LogLady',
    description:
      'During the spring of 2020 I did an internship course at Kits AB and got the chance to join a team working on this project. LogLady is an open source desktop application for reading log files. The major feature we developed consisted of adapting the api and the view to make the application work with larger log files without making the program slow down or using too much CPU. Other than that the sprints consisted of solving bugs and making improvements to existing features.',
    collaborators: [
      {
        name: 'Contributors',
        repourl: 'https://github.com/kits-ab/LogLady/graphs/contributors'
      }
    ],
    images: ['loglady1', 'loglady'],
    technologies: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Electron.js',
      'Redux',
      'react-redux',
      'Travis CI',
      'Jest'
    ],
    url: 'https://github.com/kits-ab/LogLady'
  },
  {
    name: 'Poetry Slack',
    description:
      'This web applicaion was a school group project for the project and entreprenourship course at YRGO.It is connecting to Slacks API and to the applications backend. Based on the content of the selected channel conversation it generates different kinds of poetry. I developed the front and backend in the haiku feature, configured the backend and collaborated on the authorization solution.',
    collaborators: [
      { name: 'Satomi', repourl: 'https://github.com/satoskit' },
      { name: 'Mikel', repourl: 'https://github.com/wasse' }
    ],
    images: ['ps2', 'ps'],
    technologies: [
      'JavaScript',
      'React.js',
      'Java EE',
      'TomEE (Tomcat)',
      'REST',
      'Maven',
      'Swagger',
      'Postgresql'
    ],
    url: 'https://github.com/wasse/slack-poem'
  },
  {
    name: 'habit_tracker',
    description:
      'A group project for the the server programming course at YRGO.The API creates, updates, reads and deletes users and the habits connected to the user.A user can create habits and activities for the habits.',
    collaborators: [
      { name: 'Johan', repourl: 'https://gitlab.com/JohanCederschiold' },
      { name: 'Jens', repourl: 'https://gitlab.com/JensKnutson' }
    ],
    images: ['hbt2', 'hbt'],
    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'Postgresql',
      'Maven',
      'Mockito',
      'JUnit',
      'Swagger'
    ],
    url: 'https://gitlab.com/JohanCederschiold/habit_tracker'
  },

  {
    name: 'coffeeshop-inventory-app',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    collaborators: [
      { name: 'Adam', repourl: 'https://gitlab.com/Hambe' },
      { name: 'Sebastian', repourl: 'https://github.com/blueberryFields' }
    ],
    images: ['cbt', 'cbt2'],
    technologies: [
      'Java EE',
      'JavaScript',
      'JBoss Wildfly',
      'JPA',
      'REST',
      'Vue.js',
      'CSS',
      'HTML',
      'Postgresql',
      'Docker',
      'Maven'
    ],
    url: 'https://github.com/MelindaSW/coffeeshop-inventory-app'
  },
  {
    name: 'poetry-generator-api',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    collaborators: [],
    images: ['pg1', 'pg2'],
    technologies: ['Java EE', 'Spring Boot', 'REST', 'Swagger', 'JUnit'],
    url: 'https://github.com/MelindaSW/msw-poetry-generator-api'
  }
]

// {
//   name: 'Lorem ipsum 4',
//   description:
//     'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   collaborators: [
//     { name: 'Lorem I', repo: 'link here' },
//     { name: 'Ipsum L', repo: 'link here' }
//   ],
//   images: ['ps'],
//   url: 'https://github.com'
// }

// {
//   name: 'DND relay writer',
//     description:
//   'Ut enim ad minim veniam, quis nostrud exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     collaborators: [
//       { name: 'Lorem I', repo: 'link here' },
//       { name: 'Ipsum L', repo: 'link here' }
//     ],
//       images: ['ps'],
//         url: 'https://github.com'
// },

// https://github.com/wasse/slack-poem
// https://github.com/satoskit
// https://github.com/wasse

// https://gitlab.com/JohanCederschiold/habit_tracker
// https://gitlab.com/JensKnutson
// https://gitlab.com/JohanCederschiold

// https://github.com/MelindaSW/coffeeshop-inventory-app
// https://github.com/MelindaSW/relay-writer

// https://github.com/wasse/slack-poem
// https://github.com/kits-ab/LogLady
// https://gitlab.com/JohanCederschiold/habit_tracker
