exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultPages = await graphql(`
    {
      allWpPage {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (resultPages.errors) {
    reporter.error("There was an error fetching pages", resultPages.errors)
  }

  const { allWpPage } = resultPages.data

  // Define the template to use
  const template = require.resolve(`./src/templates/page.js`)

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(page => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path:  page.slug === 'home' ? `/` : `/${slug}` ,
        component: template,
        context: page,
      })
    })
  }

  const resultPost = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)
  
  if (resultPost.errors) {
    reporter.error("There was an error fetching posts", resultPost.errors)
  }

  const { allWpPost } = resultPost.data

  // Define the template to use
  const postTemplate = require.resolve(`./src/templates/post.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path:  `/blog/${post.slug}` ,
        component: postTemplate,
        context: post,
      })
    })
  }
}



