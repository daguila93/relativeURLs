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
<html>
	<head> 
		<meta property="creator.productor"
			  content="http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/NUMERO">
	</head>


	<body> 
		<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;">
			<ul id="menu-barra-temp" style="list-style:none;">
				<li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED">
					<a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
				</li>
			</ul>
		</div>
		<script defer="defer" src="//barra.brasil.gov.br/barra_2.0.js" type="text/javascript"></script>
	</body>
</html>
