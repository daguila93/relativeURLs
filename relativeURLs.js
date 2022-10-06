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

const url = window.location.hostname;

const regexURL = /\./gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('\\.', 'gm')

const substURL = `\\.`;

// The substituted value will be contained in the result variable
const result = url.replace(regex, subst);

console.log('Substitution result: ', result);

// const re = new RegExp("\\b" + test + "\\b");



const regex = new RegExp("/https?:\\\/\\\/" + result + "/gm;");
const subst = '';

let classNames = ['et_pb_image_wrap', 'et_pb_image_wrap et_pb_only_image_mode_wrap'];

classNames.forEach(
    no => Array.from(document.getElementsByClassName(no))
        .forEach(
            node => node.innerHTML = node.innerHTML.replace(regex, subst)
        )
)





const regex2 = /https?:\\\/\\\/turismo\.uff\.br/gm;
const subst2 = '';

let classNames2 = ['et_pb_image_wrap et_pb_only_image_mode_wrap'];

classNames2.forEach(
    no => Array.from(document.getElementsByClassName(no))
        .forEach(
            node => node.innerHTML = node.innerHTML.replace(regex2, subst2)
        )
)
