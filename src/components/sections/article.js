const html = require('choo/html')

module.exports = (article) => {
  return html `
    <article>
      <a href="${article.link}" class="image"><img src="${article.image}" alt="" /></a>
      <h3 class="major">${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.link}" class="special">Learn more</a>
    </article>
  `
}
