module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'What path?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase path}}/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/PageIndex.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/pages/{{lowerCase path}}/{{lowerCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/Page.tsx.hbs'
      }
    ]
  })
}
