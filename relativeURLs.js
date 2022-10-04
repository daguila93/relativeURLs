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

const site = window.location.host;
const siteRegex = /\./gm;
const substSite = '\\.';
const resultSite = site.replace(regex, subst);

const regex = /http:\\\/\\\/${resultSite}/gm;
const subst = '';

let classNames = ['et_pb_image_wrap', 'et_pb_image_wrap et_pb_only_image_mode_wrap'];

classNames.forEach(
    no => Array.from(document.getElementsByClassName(no))
        .forEach(
            node => node.innerHTML = node.innerHTML.replace(regex, subst)
        )
)
