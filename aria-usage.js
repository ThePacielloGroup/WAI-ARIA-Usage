(function() {
var objRoleRules = {
	"alert": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	},
	"alertdialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-modal"]
	}, 
	"application": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded"]
	}, 
	"article": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"aside": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-pressed"]
	}, 
	"banner": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"button": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-pressed"]
	}, 
	"cell": {
		"requiredParent": "row",
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-rowindex", "aria-rowspan"]
	}, 
	"checkbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"supported": ["aria-readonly"]
	}, 
	"columnheader": {
		"requiredParent": "row",
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"]
	},
	"combobox": {
		"requiredParent": null,
		"requiredChild": ["textbox", "listbox", "tree", "grid", "dialog"],
		"requiredState": ["aria-expanded", "aria-controls"],
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-required", "aria-orientation"]
	}, 
	"complementary": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"contentinfo": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"definition": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"dialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-modal"]
	}, 
	"directory": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	},
	"document": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"feed": {
		"requiredParent": null,
		"requiredChild": ["article"],
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"figure": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"form": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"grid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount"]
	}, 
	"gridcell": {
		"requiredParent": ["row"],
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"]
	}, 
	"group": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded"]
	}, 
	"heading": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-level"],
		"supported": ["aria-expanded"]
	}, 
	"img": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"link": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"list": {
		"requiredParent": null,
		"requiredChild": ["group", "listitem"],
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"listbox": {
		"requiredParent": null,
		"requiredChild": ["option"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-required", "aria-orientation"]
	}, 
	"listitem": {
		"requiredParent": ["group", "list"],
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"]
	}, 
	"log": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"main": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"marquee": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"math": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"menu": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"menubar": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"menuitem": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"menuitemcheckbox": {
		"requiredParent": ["menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"menuitemradio": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"navigation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"none": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": null
	}, 
	"note": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"option": {
		"requiredParent": ["listbox"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"supported": ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"presentation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": null
	}, 
	"progressbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
	}, 
	"radio": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"supported": ["aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"radiogroup": {
		"requiredParent": null,
		"requiredChild": "radio",
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-required"]
	}, 
	"region": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"row": {
		"requiredParent": ["grid", "rowgroup", "table", "treegrid"],
		"requiredChild": ["cell", "columnheader", "gridcell", "rowheader"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-colindex", "aria-rowindex", "aria-selected", "aria-expanded", "aria-level","aria-posinset", "aria-setsize"]
	}, 
	"rowgroup": {
		"requiredParent": ["grid", "table", "treegrid"],
		"requiredChild": ["row"],
		"requiredState": null,
		"supported": null
	}, 
	"rowheader": {
		"requiredParent": ["row"],
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-expanded"]
	}, 
	"scrollbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"supported": ["aria-expanded", "aria-valuetext"]
	}, 
	"search": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"searchbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
	}, 
	"separator": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"supported": ["aria-orientation", "aria-valuetext"]
	}, 
	"slider": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"supported": ["aria-orientation", "aria-valuetext"]
	}, 
	"spinbutton": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"supported": ["aria-readonly", "aria-required", "aria-valuetext"]
	}, 
	"status": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"switch": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"supported": ["aria-readonly"]
	}, 
	"tab": {
		"requiredParent": ["tablist"],
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded", "aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"table": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredState": null,
		"supported": ["aria-colcount", "aria-rowcount"]
	}, 
	"tablist": {
		"requiredParent": null,
		"requiredChild": ["tab"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-level", "aria-multiselectable", "aria-orientation"]
	}, 
	"tabpanel": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"term": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"textbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
	}, 
	"timer": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"toolbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"tooltip": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"supported": ["aria-expanded"]
	}, 
	"tree": {
		"requiredParent": null,
		"requiredChild": ["group", "treeitem"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-orientation", "aria-required"]
	}, 
	"treegrid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredState": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"]
	}, 
	"treeitem": {
		"requiredParent": ["group", "tree"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"supported": ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"]
	}
 };

var objElementRules = {
	"ahref": {
		"nodeName": "a",
		"nativeRole": "link",
		"allowedRoles": ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem",  "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"]
	},
	"anohref": {
		"nodeName": "a",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"abbr": {
		"nodeName": "abbr",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"address": {
		"nodeName": "address",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"area": {
		"nodeName": "area",
		"nativeRole": "link",
		"allowedRoles": []
	},
	"areanohref": {
		"nodeName": "area",
		"nativeRole": null,
		"allowedRoles": []
	},
	"article": {
		"nodeName": "article",
		"nativeRole": "article",
		"allowedRoles": ["feed", "presentation", "none", "document", "application", "main", "region"]
	},
	"aside": {
		"nodeName": "aside",
		"nativeRole": "complementary",
		"allowedRoles": ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-pullquote", "doc-tip"]
	},
	"audio": {
		"nodeName": "audio",
		"nativeRole": null,
		"allowedRoles": ["application"]
	},
	"b": {
		"nodeName": "b",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"base": {
		"nodeName": "base",
		"nativeRole": null,
		"allowedRoles": []
	},
	"bdi": {
		"nodeName": "bdi",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"bdo": {
		"nodeName": "bdo",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"blockquote": {
		"nodeName": "blockquote",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"br": {
		"nodeName": "br",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"button": {
		"nodeName": "button",
		"nativeRole": "button",
		"allowedRoles": ["checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
	},
	"canvas": {
		"nodeName": "canvas",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"caption": {
		"nodeName": "caption",
		"nativeRole": null,
		"allowedRoles": []
	},
	"code": {
		"nodeName": "code",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"cite": {
		"nodeName": "cite",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"col": {
		"nodeName": "col",
		"nativeRole": null,
		"allowedRoles": []
	},
	"colgroup": {
		"nodeName": "colgroup",
		"nativeRole": null,
		"allowedRoles": []
	},
	"data": {
		"nodeName": "data",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"datalist": {
		"nodeName": "datalist",
		"nativeRole": "listbox",
		"allowedRoles": []
	},
	"dd": {
		"nodeName": "dd",
		"nativeRole": "definition",
		"allowedRoles": []
	},
	"del": {
		"nodeName": "del",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"details": {
		"nodeName": "details",
		"nativeRole": "group",
		"allowedRoles": []
	},
	"dfn": {
		"nodeName": "dfn",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"dialog": {
		"nodeName": "dialog",
		"nativeRole": "dialog",
		"allowedRoles": ["alertdialog"]
	},
	"div": {
		"nodeName": "div",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"dl": {
		"nodeName": "dl",
		"nativeRole": null,
		"allowedRoles": ["group", "list", "presentation", "none"]
	},
	"dt": {
		"nodeName": "dt",
		"nativeRole": "term",
		"allowedRoles": ["listitem"]
	},
	"em": {
		"nodeName": "em",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"embed": {
		"nodeName": "embed",
		"nativeRole": null,
		"allowedRoles": ["application", "document", "presentation", "none", "img"]
	},
	"figcaption": {
		"nodeName": "figcaption",
		"nativeRole": null,
		"allowedRoles": ["group", "presentation", "none"]
	},
	"fieldset": {
		"nodeName": "fieldset",
		"nativeRole": "group",
		"allowedRoles": ["radiogroup", "none", "presentation"]
	},
	"figure": {
		"nodeName": "figure",
		"nativeRole": "figure",
		"allowedRoles": ["group", "none", "presentation"]
	},
	"footer": {
		"nodeName": "footer",
		"nativeRole": "contentinfo",
		"allowedRoles": ["group", "none", "presentation", "doc-footnote"]
	},
	"form": {
		"nodeName": "form",
		"nativeRole": "form",
		"allowedRoles": ["search", "none", "presentation"]
	},
	"h1": {
		"nodeName": "h1",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h2": {
		"nodeName": "h2",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h3": {
		"nodeName": "h3",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h4": {
		"nodeName": "h4",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h5": {
		"nodeName": "h5",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h6": {
		"nodeName": "h6",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"head": {
		"nodeName": "head",
		"nativeRole": null,
		"allowedRoles": []
	},
	"header": {
		"nodeName": "header",
		"nativeRole": "banner",
		"allowedRoles": ["group", "none", "presentation"]
	},
	"hgroup": {
		"nodeName": "hgroup",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"hr": {
		"nodeName": "hr",
		"nativeRole": "separator",
		"allowedRoles": ["none", "presentation", "doc-pagebreak"]
	},
	"i": {
		"nodeName": "i",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"iframe": {
		"nodeName": "iframe",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation", "application", "document", "img"]
	},
	"img-noalt": {
		"nodeName": "imgEmptyAlt",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"]
	},
	"img": {
		"nodeName": "imgWithAlt",
		"nativeRole": "img",
		"allowedRoles": ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "scrollbar", "separator", "slider", "switch", "tab", "treeitem"]
	},
	"input-button": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"]
	},
	"input-checkbox": {
		"nodeName": "input",
		"nativeRole": "checkbox",
		"allowedRoles": ["button", "menuitemcheckbox", "option", "switch"]
	},
	"input-color": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-date": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-datetime-local": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-email": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-file": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-hidden": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-image": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"]
	},
	"input-month": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-number": {
		"nodeName": "input",
		"nativeRole": "spinbutton",
		"allowedRoles": []
	},
	"input-password": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-radio": {
		"nodeName": "input",
		"nativeRole": "radio",
		"allowedRoles": ["menuitemradio"]
	},
	"input-range": {
		"nodeName": "input",
		"nativeRole": "slider",
		"allowedRoles": []
	},
	"input-reset": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": []
	},
	"input-search": {
		"nodeName": "input",
		"nativeRole": "searchbox",
		"allowedRoles": []
	},
	"input-submit": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": []
	},
	"input-tel": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-text": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": ["combobox", "searchbox", "spinbutton"]
	},
	"input-time": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"input-url": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-week": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": []
	},
	"ins": {
		"nodeName": "ins",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"kbd": {
		"nodeName": "kbd",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"label": {
		"nodeName": "label",
		"nativeRole": null,
		"allowedRoles": []
	},
	"legend": {
		"nodeName": "legend",
		"nativeRole": null,
		"allowedRoles": []
	},
	"li": {
		"nodeName": "li",
		"nativeRole": "listitem",
		"allowedRoles": ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"]
	},
	"link": {
		"nodeName": "link",
		"nativeRole": "link",
		"allowedRoles": []
	},
	"main": {
		"nodeName": "main",
		"nativeRole": "main",
		"allowedRoles": []
	},
	"map": {
		"nodeName": "map",
		"nativeRole": null,
		"allowedRoles": []
	},
	"mark": {
		"nodeName": "mark",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"math": {
		"nodeName": "math",
		"nativeRole": "math",
		"allowedRoles": []
	},
	"menu": {
		"nodeName": "menu",
		"nativeRole": "list",
		"allowedRoles": [ "directory", "group", "listbox", "menu", "menubar", "radiogroup", "tablist", "toolbar", "tree", "presentation", "none"]
	},
	"meta": {
		"nodeName": "meta",
		"nativeRole": null,
		"allowedRoles": []
	},
	"meter": {
		"nodeName": "meter",
		"nativeRole": null,
		"allowedRoles": []
	},
	"nav": {
		"nodeName": "nav",
		"nativeRole": "navigation",
		"allowedRoles": ["doc-index", "doc-pagelist", "doc-toc"]
	},
	"noscript": {
		"nodeName": "noscript",
		"nativeRole": null,
		"allowedRoles": []
	},
	"object": {
		"nodeName": "object",
		"nativeRole": null,
		"allowedRoles": ["application", "document", "img"]
	},
	"ol": {
		"nodeName": "ol",
		"nativeRole": "list",
		"allowedRoles": ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"]
	},
	"optgroup": {
		"nodeName": "optgroup",
		"nativeRole": "group",
		"allowedRoles": []
	},
	"option": {
		"nodeName": "option",
		"nativeRole": "option",
		"allowedRoles": []
	},
	"output": {
		"nodeName": "output",
		"nativeRole": "status",
		"allowedRoles": "all"
	},
	"p": {
		"nodeName": "p",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"param": {
		"nodeName": "param",
		"nativeRole": null,
		"allowedRoles": []
	},
	"picture": {
		"nodeName": "picture",
		"nativeRole": null,
		"allowedRoles": []
	},
	"pre": {
		"nodeName": "pre",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"progress": {
		"nodeName": "progress",
		"nativeRole": "progressbar",
		"allowedRoles": []
	},
	"q": {
		"nodeName": "q",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"rp": {
		"nodeName": "rp",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"rt": {
		"nodeName": "rt",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"ruby": {
		"nodeName": "ruby",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"s": {
		"nodeName": "s",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"samp": {
		"nodeName": "samp",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"script": {
		"nodeName": "script",
		"nativeRole": null,
		"allowedRoles": []
	},
	"section": {
		"nodeName": "section",
		"nativeRole": "region",
		"allowedRoles": ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel",  "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"]
	},
	"select": {
		"nodeName": "select",
		"nativeRole": "combobox",
		"allowedRoles": ["menu"]
	},
	"select-2": {
		"nodeName": "select",
		"nativeRole": "listbox",
		"allowedRoles": []
	},
	"slot": {
		"nodeName": "slot",
		"nativeRole": null,
		"allowedRoles": []
	},
	"small": {
		"nodeName": "small",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"source": {
		"nodeName": "source",
		"nativeRole": null,
		"allowedRoles": []
	},
	"span": {
		"nodeName": "span",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"strong": {
		"nodeName": "strong",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"style": {
		"nodeName": "style",
		"nativeRole": null,
		"allowedRoles": []
	},
	"svg": {
		"nodeName": "svg",
		"nativeRole": null,
		"allowedRoles": ["application", "document", "img"]
	},
	"sub": {
		"nodeName": "sub",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"sup": {
		"nodeName": "sup",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"summary": {
		"nodeName": "summary",
		"nativeRole": "button",
		"allowedRoles": ["button"]
	},
	"table": {
		"nodeName": "table",
		"nativeRole": "table",
		"allowedRoles": "all"
	},
	"template": {
		"nodeName": "template",
		"nativeRole": null,
		"allowedRoles": []
	},
	"textarea": {
		"nodeName": "textarea",
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"tbody": {
		"nodeName": "tbody",
		"nativeRole": "rowgroup",
		"allowedRoles": "all"
	},
	"tfoot": {
		"nodeName": "tfoot",
		"nativeRole": "rowgroup",
		"allowedRoles": "all"
	},
	"thead": {
		"nodeName": "thead",
		"nativeRole": "rowgroup",
		"allowedRoles": "all"
	},
	"title": {
		"nodeName": "title",
		"nativeRole": null,
		"allowedRoles": []
	},
	"td": {
		"nodeName": "td",
		"nativeRole": "cell",
		"allowedRoles": "all"
	},
	"th": {
		"nodeName": "th",
		"nativeRole": "columnheader",
		"allowedRoles": "all"
	},
	"time": {
		"nodeName": "time",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"tr": {
		"nodeName": "tr",
		"nativeRole": "row",
		"allowedRoles": "all"
	},
	"track": {
		"nodeName": "track",
		"nativeRole": null,
		"allowedRoles": []
	},
	"u": {
		"nodeName": "u",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"ul": {
		"nodeName": "ul",
		"nativeRole": "list",
		"allowedRoles": ["directory", "group", "listbox", "menu", "menubar", "radiogroup", "tablist", "toolbar", "tree", "presentation", "none"]
	},
	"var": {
		"nodeName": "var",
		"nativeRole": null,
		"allowedRoles": "all"
	},
	"video": {
		"nodeName": "video",
		"nativeRole": null,
		"allowedRoles": ["application"]
	},
	"wbr": {
		"nodeName": "wbr",
		"nativeRole": null,
		"allowedRoles": "all"
	}
};

var arValidRoles=[];
var bDetails = false;
var objWin;

function conditionalElement(objElement, strElement) {
	var strType;

	switch (strElement) {
		case "a" : 
			if (objElement.getAttribute("href")) {
				return "ahref";
			}
			else {
				return "ahref";
			}
		case "area" : 
			if (!objElement.getAttribute("href")) {
				return "areanohref";
			}
			break;
		case "img" : 
			if (!objElement.getAttribute("alt")) {
				return "img-noalt";
			}
			break;
		case "input" : 
			strType = objElement.getAttribute("type");
			if (!strType || strType === "password") {
				strType = "text";
			}
			return strElement + "-" + strType;
	}
	return strElement;
}

function createResultsWindow() {
	var objResultsWindow = document.createElement("div");
	var objSummaryContainer = document.createElement("div");
	var objHeading = document.createElement("h1");
	var objSubHeading = document.createElement("h2");
	var objClose = document.createElement("button");
	var objCSS = document.createElement('link');
	var objTitle = document.createElement('title');

	objWin = window.open("");
	objCSS.setAttribute("rel", "stylesheet");  
	objCSS.setAttribute("type", "text/css");  
	objCSS.setAttribute("href", "https://juicystudio.com/tpg/ARC/aria-usage.css");
	objTitle.appendChild(document.createTextNode("WAI-ARIA usage results"));
	objWin.document.getElementsByTagName("HTML")[0].setAttribute('lang', 'en'); 
	objWin.document.getElementsByTagName("HEAD")[0].appendChild(objCSS); 
	objWin.document.getElementsByTagName("HEAD")[0].appendChild(objTitle); 

	objResultsWindow.setAttribute("id", "__ARIA_validator_resultsWindow__");
	objHeading.setAttribute("id", "__ARIA_validator_dlgtitle__");
	objHeading.appendChild(document.createTextNode("WAI-ARIA usage results"));
	objResultsWindow.appendChild(objHeading);
	objSummaryContainer.setAttribute("id", "__ARIA_validator_summary__");
	objSubHeading.appendChild(document.createTextNode("Summary"));
	objSummaryContainer.appendChild(objSubHeading);
	objResultsWindow.appendChild(objSummaryContainer);
	objSubHeading = document.createElement("h2");
	objSubHeading.appendChild(document.createTextNode("Details"));
	objResultsWindow.appendChild(objSubHeading);

	objWin.document.body.appendChild(objResultsWindow);
}

function getDetails() {
	var objList = document.createElement("ul");
	var objListItem;
	var objCode;
	var iInstances;
	var i;

	for (i in arValidRoles) {
		objListItem = document.createElement("li");
		objCode = document.createElement("code");

		iInstances = arValidRoles[i][1];
		if (iInstances === 1) {
			objListItem.appendChild(document.createTextNode('1 instance of '));
		}
		else {
			objListItem.appendChild(document.createTextNode(iInstances + ' instances of '));
		}

		objCode.appendChild(document.createTextNode(arValidRoles[i][0]));
		objListItem.appendChild(objCode);
		objList.appendChild(objListItem);
	}
	return objList;
}

function getIndex(strRole) {
	var i;

	for (i in arValidRoles) {
		if (arValidRoles[i][0] === strRole) {
			return i;
		}
	}

	return -1;
}

function displaySummary(objValidWAIAria) {
	var objList = document.createElement("ul");
	var objListItem;
	var objDetails = document.createElement("details");
	var i;
	var bAppend;
	var objDetSum;
	var objDetList;
	var objSummary = objWin.document.getElementById("__ARIA_validator_summary__");

	for(i in objValidWAIAria) {
		objListItem = document.createElement("li");
		bAppend = true;
		switch (i) {
			case "valid":
				if (objValidWAIAria[i] > 0) {
					objDetSum = document.createElement("summary");
					objDetSum.appendChild(document.createTextNode(objValidWAIAria[i] + " valid roles."));
					objDetails.appendChild(objDetSum);
					objDetails.appendChild(getDetails());
					objSummary.appendChild(objDetails);
					bAppend = false;
				}
				else {
					objListItem.appendChild(document.createTextNode("0 valid roles."));
				}
				break;
			case "unknown":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " unknown elements."));
				break;
			case "nonexistent":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " non-existent roles."));
				break;
			case "missingparent":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " missing parent roles."));
				break;
			case "missingchild":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " missing child roles."));
				break;
			case "missingstate":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " roles without required states."));
				break;
			case "invalidproperty":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " elements with invalid WAI-ARIA attributes."));
				break;
			case "invalidref":
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " attribute values without corresponding targets."));
				break;
			default:
				objListItem.appendChild(document.createTextNode(objValidWAIAria[i] + " " + i + " roles."));
		}
		if (bAppend) {
			objList.appendChild(objListItem);
		}
	}

	objSummary.appendChild(objList);
}

function logResult(strMessage, strElement, strError, strRole, objCode, strMissing) {
	var objResultsWindow = objWin.document.getElementById("__ARIA_validator_resultsWindow__");
	var objMessage = document.createElement("p");
	var objElement = document.createElement("code");
	var objRole = document.createElement("code");
	var objPre = document.createElement("pre");
	var objMarkup = document.createElement("code");

	objElement.appendChild(document.createTextNode(strElement));
	objRole.appendChild(document.createTextNode(strRole));

	if (strMessage === "") {
		objMessage.appendChild(objRole);
		objMessage.appendChild(document.createTextNode(" is unnecessary on native "));
		objMessage.appendChild(objElement);
		objMessage.appendChild(document.createTextNode(" elements"));
	}
	else {
		objMessage.appendChild(document.createTextNode(strMessage));
		objMessage.appendChild(objElement);
		objMessage.appendChild(document.createTextNode(strError));
		objMessage.appendChild(objRole);
		objMessage.appendChild(document.createTextNode(strMissing));
	}

	objResultsWindow.appendChild(objMessage);

	if (objCode) {
		objMarkup.appendChild(document.createTextNode(objCode.outerHTML));
		objPre.appendChild(objMarkup);
		objResultsWindow.appendChild(objPre);
	}
	bDetails = true;
}

function addMessage(strMessage) {
	var objResultsWindow = objWin.document.getElementById("__ARIA_validator_resultsWindow__");
	var objMessage = document.createElement("p");

	objMessage.appendChild(document.createTextNode(strMessage));
	objResultsWindow.appendChild(objMessage);
}

function checkRequiredParent(objElement, strRole) {
	var strParentRole;
	var objOriginal = objElement;
	var arParent = objRoleRules[strRole].requiredParent;

	if (arParent) {
		while (objElement.tagName.toLowerCase() !== "body") {
			objElement = objElement.parentNode;
			strParentRole = objElement.getAttribute("role");
			if (arParent.indexOf(strParentRole) !== -1) {
				return true;
			}
		}
		logResult("Role ", strRole, " missing required parent role ", "", objOriginal, " (" + arParent + ").");
		return false;
	}
	return true;
}

function checkRequiredChildren(objElement, strRole) {
	var arChild = objRoleRules[strRole].requiredChild;
	var strChildRole;
	var i;

	if (arChild) {
		for (i=0; i<objElement.childNodes.length; i++) {
			if (objElement.childNodes[i].nodeType === 1) {
				strChildRole = objElement.childNodes[i].getAttribute("role");
				if (arChild.indexOf(strChildRole) !== -1) {
					return true;
				}
			}
		}
		logResult("Role ", strRole, " missing required child role ", "", objElement, " (" + arChild + ").");
		return false;
	}
	return true;
}

function checkRequiredState(objElement, strRole) {
	var arState = objRoleRules[strRole].requiredState;
	var i;

	// Special condition for separator that isn"t focusable
	// The role isn"t valid on native elements that receive keyboard focus, 
	// so just check tabindex
	if (strRole === "separator") {
		i = objElement.getAttribute("tabindex");
		 if (!(i && i >= 0)) {
			return true;
		 }
	}
	if (arState) {
		for (i=0; i<arState.length; i++) {
			if (!objElement.hasAttribute(arState[i])) {
				logResult("Role ", strRole, " missing required state ", "", objElement, " (" + arState[i] + ").");
				return false;
			}
		}
	}
	return true;
}

function checkValidProperties(objElement, strRole) {
	var arGlobal = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"];
	var arValid=[];
	var arState=[];
	var arAttributes = objElement.attributes;
	var strAttribute;
	var strTagName = objElement.tagName.toLowerCase();
	var strElement;
	var bGlobal = false;
	var bFound = false;
	var i;

	// If a role has not been specified, see if the element has a native role
	if (!strRole) {
		strElement = conditionalElement(objElement, strTagName);
		if (objElementRules[strElement]) {
			strRole = objElementRules[strElement].nativeRole;
		}
	}
	if (strRole) {
		arValid = objRoleRules[strRole].supported;
		arState = objRoleRules[strRole].requiredState;
  	}

	for (i=0; i<arAttributes.length; i++) {
		strAttribute = arAttributes[i].nodeName;
		if (strAttribute.substring(0, 5) === "aria-") {
			bGlobal = arGlobal.indexOf(strAttribute);
			if (!strRole && bGlobal === -1) {
				// No role without a global attribute
				logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").");
				return false;
			}
			else if (bGlobal === -1) {
				// Check if the attribute is supported or a required state for the role
				if (arValid && arValid.indexOf(strAttribute) >=0) {
					bFound = true;
				}
				if (arState && arState.indexOf(strAttribute)>=0) {
					bFound = true;
				}
				if (!bFound) {
					logResult("Role ", strRole, " has invalid attribute ", "", objElement, "(" + strAttribute + ").");
					return false;
				}
			}
		}
	}

	return true;
}

function checkValidReferences(objElement) {
	var arRefattributes = ["aria-activedescendant", "aria-controls", "aria-describedby", "aria-details", "aria-errormessage", "aria-flowto", "aria-labelledby", "aria-owns"];
	var arAttributes = objElement.attributes;
	var strAttribute;
	var strAttributeValue;
	var arRefs = [];
	var objTarget;
	var strTagName = objElement.tagName.toLowerCase();
	var i;
	var j;
	var bValid = true;

	for (i=0; i<arAttributes.length; i++) {
		strAttribute = arAttributes[i].nodeName;
		strAttributeValue = arAttributes[i].value;
		if (arRefattributes.indexOf(strAttribute) >= 0) {
			if (strAttributeValue === "") {
				logResult("Attribute ", strAttribute, " has an empty string.", "", objElement, "");
				bValid = false;
			}
			else {
				arRefs = strAttributeValue.split(" ");
				for (j in arRefs) {
					objTarget = document.getElementById(arRefs[j]);
					if (!objTarget) {
						logResult("Attribute ", strAttribute, " does not reference a corresponding element.", "", objElement, "");
						bValid = false;
						break;
					}
				} 
			}
		}
	}

	return bValid;
}

function checkWAIAria() {
	var objValidWAIAria = {
		valid: 0,
		invalid: 0,
		unnecessary: 0,
		unknown: 0,
		nonexistent: 0,
		missingparent: 0,
		missingchild: 0,
		missingstate: 0,
		invalidproperty: 0,
		invalidref: 0
	};
	var objElements = document.getElementsByTagName("*");
	var bValid;
	var strElement;
	var strRole;
	var strCheckElement;
	var arAllowed = [];
	var iRoleIndex;
	var i;

	createResultsWindow();

 	// Iterate through all elements in the DOM
	for (i=0; i < objElements.length; i++) {
		bValid = false;
		// If a role has been set, check it is valid for the element
		if (objElements[i].getAttribute("role") && objElements[i].getAttribute("id") !== "__ARIA_validator_resultsWindow__") {
			strElement = objElements[i].tagName.toLowerCase();
			// Check if the element is conditional (e.g., input with a type that affects valid roles)
			strCheckElement = conditionalElement(objElements[i], strElement);
			strRole = objElements[i].getAttribute("role");
			iRoleIndex = getIndex(strRole);
			if (objElementRules[strCheckElement]) {
				arAllowed = objElementRules[strCheckElement].allowedRoles;
				if (!objRoleRules.hasOwnProperty(strRole)) {
					// The specified role doesn"t exist
					objValidWAIAria.nonexistent++;
					logResult("Element ", strElement, " has non-existent role ", strRole, objElements[i], ".");
				}
				else if (arAllowed.indexOf(strRole) !== -1) {
					// A specific role is valid for the element
					objValidWAIAria.valid++;
					if (iRoleIndex === -1) {
						arValidRoles.push([strRole, 1]);
					}
					else {
						arValidRoles[iRoleIndex][1]++;
					}
					bValid = true;
				}
				else if (arAllowed === "all") {
					// Any role is valid for the element
					objValidWAIAria.valid++;
					if (iRoleIndex === -1) {
						arValidRoles.push([strRole, 1]);
					}
					else {
						arValidRoles[iRoleIndex][1]++;
					}
					bValid = true;
				}
				else if (strRole === objElementRules[strCheckElement].nativeRole) {
					// The role is unecessary for the element
					objValidWAIAria.unnecessary++;
					logResult("", strElement, "", strRole, objElements[i], ".");
				}
				else {
					// The role is invalid for the element
					objValidWAIAria.invalid++;
					logResult("Element ", strElement, " has invalid role ", strRole, objElements[i], ".");
				}
			}
			else {
				objValidWAIAria.unknown++;
				if (!objRoleRules.hasOwnProperty(strRole)) {
					// The specified role doesn"t exist
					objValidWAIAria.nonexistent++;
					logResult("Unknown element ", strElement, " has non-existent role ", strRole, objElements[i], ".");
				}
				else {
					logResult("Unknown element ", strElement, " has role ", strRole, objElements[i], ".");
				}
			}
			if (bValid) {
				if (!checkRequiredParent(objElements[i], strRole)) {
					objValidWAIAria.missingparent++;
				}
				if (!checkRequiredChildren(objElements[i], strRole)) {
					objValidWAIAria.missingchild++;
				}
				if (!checkRequiredState(objElements[i], strRole)) {
					objValidWAIAria.missingstate++;
				}
				if (!checkValidProperties(objElements[i], strRole)) {
					objValidWAIAria.invalidproperty++;
				}
			}
		}
		else {
			// Element has no role, so check for global aria values
			if (!checkValidProperties(objElements[i], null)) {
				objValidWAIAria.invalidproperty++;
			}
		}
		if (!checkValidReferences(objElements[i])) {
			objValidWAIAria.invalidref++;
		}
	}
	displaySummary(objValidWAIAria);
	if (!bDetails) {
		addMessage('No details to display.');
	}
}
checkWAIAria();
})();