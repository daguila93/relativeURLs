const tags = ['a', 'img', 'source', 'video', 'link', 'script'];
const attributes = ['href', 'src', 'srcset'];

tags.forEach(tag => document.querySelectorAll(tag).forEach(atributte => turnURLRelative(atributte)));

function turnURLRelative(node) {
    let regex = new RegExp('^https?://' + window.location.hostname)

    attributes.forEach(attr => {
        if (node.hasAttribute(attr) && node[attr].match(regex)) {
            let url = new URL(node[attr]);
            node[attr] = node[attr].replaceAll(url.origin, '');
        }
    })
}

const regex = /http:\\\/\\\/caferh\.uff\.br/gm;
const subst = '';

let classNames = ['et_pb_image_wrap'];

classNames.forEach(
    no => Array.from(document.getElementsByClassName(no))
        .forEach(
            node => node.innerHTML = node.innerHTML.replace(regex, subst)
        )
)

const regex1 = /data-et-multi-view.{0,}">/m;
const subst1 = `>`;
let element = document.getElementsByClassName('et_pb_image_wrap et_pb_only_image_mode_wrap')

element.forEach(node => node.innerHTML = node.innerHTML.replace(regex1, subst1))
