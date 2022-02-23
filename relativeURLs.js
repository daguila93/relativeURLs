var tags = ['a', 'img', 'source', 'video', 'link', 'script'];
tags.forEach(tag => document.querySelectorAll(tag).forEach(atributte => turnURLRelative(atributte)));

function turnURLRelative(node) {
    let url = window.location.protocol + "//" + window.location.hostname;
    let urlReplaced = url.replace('https://', 'http://');

    if (node.hasAttribute("href") && node.href.includes(url)) {
        node.href = node.href.replaceAll(url, '');
    }

    if (node.hasAttribute("src")) {
        node.src = node.src.replaceAll(urlReplaced, '');
    }

    if (node.hasAttribute("srcset")) {
        node.srcset = node.srcset.replaceAll(urlReplaced, '')
    }
}
