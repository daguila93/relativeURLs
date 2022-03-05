const tags = ['a', 'img', 'source', 'video', 'link', 'script'];
const attributes = ['href', 'src', 'srcset'];

tags.forEach(tag => document.querySelectorAll(tag).forEach(atributte => turnURLRelative(atributte)));

function turnURLRelative(node) {
  const regex = new RegExp('^https?://' + window.location.hostname)

  attributes.forEach(attr => {
    if (node.hasAttribute(attr) && node[attr].match(regex)) {
      let url = new URL(node[attr]);
      node[attr] = node[attr].replaceAll(url.origin, '');
    }
  })
}
