const html = require('choo/html')

const copyright = require('./copyright')

module.exports = () => {
  return html `
    <div class="inner">
      <h2 class="major">Get in touch</h2>
      <form method="post" action="https://formspree.io/carl.ogren@gmail.com">
        <div class="field">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email so I can reply to you" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="4" placeholder="Why are you writing to me?"></textarea>
        </div>
        <input type="text" name="_gotcha" style="display:none" />
        <ul class="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </form>
      <ul class="contact">
        <li class="fa-envelope"><a href="mailto:carl.ogren@gmail.com">carl.ogren@gmail.com</a></li>
        <li class="fa-twitter"><a href="https://twitter.com/CarlOGREN">twitter.com/CarlOGREN</a></li>
        <li class="fa-github"><a href="https://github.com/RasCarlito">github.com/RasCarlito</a></li>
        <li class="fa-gitlab"><a href="https://gitlab.com/u/rascarlito">gitlab.com/rascarlito</a></li>
        <li class="fa-medium"><a href="https://medium.com/@rascarlito">medium.com/rascarlito</a></li>
      </ul>
      ${copyright()}
    </div>
  `
}
