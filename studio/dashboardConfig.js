export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc19817cbdc38e7c236489d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-c5rtmv8w',
                  apiId: 'ff52475d-5d05-4b70-8232-5b8f76682d36'
                },
                {
                  buildHookId: '5dc19818033327003446c59d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-cndd34ek',
                  apiId: '716afab0-7346-48a5-a90f-1a832dba741e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ilovecat/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-cndd34ek.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
