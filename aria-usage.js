(function() {
var objRoleRules = {
	"alert": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	},
	"alertdialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-modal"]
	}, 
	"application": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded"]
	}, 
	"article": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": ["aria-expanded"]
	}, 
	"aside": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-pressed"]
	}, 
	"banner": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main", "header", "footer"],
		"supported": ["aria-expanded"]
	}, 
	"button": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded", "aria-pressed"]
	}, 
	"cell": {
		"requiredParent": "row",
		"requiredParentNative": "tr",
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-rowindex", "aria-rowspan"]
	}, 
	"checkbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-readonly"]
	}, 
	"columnheader": {
		"requiredParent": "row",
		"requiredParentNative": "tr",
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"]
	},
	"combobox": {
		"requiredParent": null,
		"requiredChild": ["textbox", "listbox", "tree", "grid", "dialog"],
		"requiredState": ["aria-expanded", "aria-controls"],
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-required", "aria-orientation"]
	}, 
	"complementary": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": ["aria-expanded"]
	}, 
	"contentinfo": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main", "header", "footer"],
		"supported": ["aria-expanded"]
	}, 
	"definition": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["phrasing"],
		"supported": ["aria-expanded"]
	}, 
	"dialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-modal"]
	}, 
	"directory": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	},
	"document": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"feed": {
		"requiredParent": null,
		"requiredChild": ["article"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"figure": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"form": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"grid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredChildNative": ["tr"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount"]
	}, 
	"gridcell": {
		"requiredParent": ["row"],
		"requiredParentNative": ["tr"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"]
	}, 
	"group": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded"]
	}, 
	"heading": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-level"],
		"descendantRestrictions": ["article", "aside", "blockquote", "body", "details", "dialog", "fieldset", "figure", "section", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "nav", "td"],
		"supported": ["aria-expanded"]
	}, 
	"img": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"link": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded"]
	}, 
	"list": {
		"requiredParent": null,
		"requiredChild": ["group", "listitem"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"listbox": {
		"requiredParent": null,
		"requiredChild": ["option"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-required", "aria-orientation"]
	}, 
	"listitem": {
		"requiredParent": ["group", "list"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"]
	}, 
	"log": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"main": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": ["aria-expanded"]
	}, 
	"marquee": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"math": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"menu": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"menubar": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"menuitem": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"menuitemcheckbox": {
		"requiredParent": ["menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"menuitemradio": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-setsize"]
	}, 
	"navigation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": ["aria-expanded"]
	}, 
	"none": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null
	}, 
	"note": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"option": {
		"requiredParent": ["listbox"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"presentation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null
	}, 
	"progressbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
	}, 
	"radio": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"radiogroup": {
		"requiredParent": null,
		"requiredChild": "radio",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-required"]
	}, 
	"region": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"row": {
		"requiredParent": ["grid", "rowgroup", "table", "treegrid"],
		"requiredParentNative": ["table", "thead", "tbody", "tfoot"],
		"requiredChild": ["cell", "columnheader", "gridcell", "rowheader"],
		"requiredChildNative": ["td", "th"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colindex", "aria-rowindex", "aria-selected", "aria-expanded", "aria-level","aria-posinset", "aria-setsize"]
	}, 
	"rowgroup": {
		"requiredParent": ["grid", "table", "treegrid"],
		"requiredParentNative": "table",
		"requiredChild": ["row"],
		"requiredChildNative": "tr",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null
	}, 
	"rowheader": {
		"requiredParent": ["row"],
		"requiredParentNative": ["tr"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-expanded"]
	}, 
	"scrollbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-valuetext"]
	}, 
	"search": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"searchbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
	}, 
	"separator": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-orientation", "aria-valuetext"]
	}, 
	"slider": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-orientation", "aria-valuetext"]
	}, 
	"spinbutton": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-readonly", "aria-required", "aria-valuetext", "aria-placeholder"]
	}, 
	"status": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"switch": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-readonly"]
	}, 
	"tab": {
		"requiredParent": ["tablist"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-posinset", "aria-selected", "aria-setsize"]
	}, 
	"table": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredChild": ["tr", "thead", "tbody", "tfoot"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colcount", "aria-rowcount"]
	}, 
	"tablist": {
		"requiredParent": null,
		"requiredChild": ["tab"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-level", "aria-multiselectable", "aria-orientation"]
	}, 
	"tabpanel": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"term": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["phrasing"],
		"supported": ["aria-expanded"]
	}, 
	"textbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
	}, 
	"timer": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"toolbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-orientation"]
	}, 
	"tooltip": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded"]
	}, 
	"tree": {
		"requiredParent": null,
		"requiredChild": ["group", "treeitem"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-orientation", "aria-required"]
	}, 
	"treegrid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"]
	}, 
	"treeitem": {
		"requiredParent": ["group", "tree"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"descendantRestrictions": null,
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
	"body": {
		"nodeName": "body",
		"nativeRole": "document",
		"allowedRoles": []
	},
	"br": {
		"nodeName": "br",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"]
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
		"allowedRoles": []
	},
	"figure-nofigcap": {
		"nodeName": "figure",
		"nativeRole": "figure",
		"allowedRoles": "all"
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
	"html": {
		"nodeName": "html",
		"nativeRole": "document",
		"allowedRoles": []
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
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-datetime-local": {
		"nodeName": "input",
		"nativeRole": "textbox",
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
		"nativeRole": "textbox",
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
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-url": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": []
	},
	"input-week": {
		"nodeName": "input",
		"nativeRole": "textbox",
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
		"allowedRoles": ["menu", "menubar", "tablist", "doc-index", "doc-pagelist", "doc-toc"]
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
	"select-nomenu": {
		"nodeName": "select",
		"nativeRole": "combobox",
		"allowedRoles": []
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
		"allowedRoles": "all"
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
		"nativeRole": null,
		"allowedRoles": []
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

var arPhrasing = ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "emembed", "i", "iframe", "img", "input", "ins", "kbd", "label", "link", "map", "mark", "math", "meta", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "text", "area", "time", "u", "var", "video", "wbr"];
var arInteractive = ["a", "audio", "button", "details", "embed", "iframe", "img", "input", "label", "object", "select", "textarea", "video"];
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
				return "anohref";
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
		case "figure" : 
			if (objElement.getElementsByTagName("figcaption").length === 0) {
				return "figure-nofigcap";
			}
			break;
		case "input" : 
			strType = objElement.getAttribute("type");
			if (!strType || strType === "password") {
				strType = "password";
			}
			return strElement + "-" + strType.toLowerCase();
		case "select" : 
			if (objElement.hasAttribute("multiple") || objElement.hasAttribute("size")) {
				return "select-nomenu";
			}
	}
	return strElement;
}

function createResultsWindow(objValidWAIAria) {
	var objResultsWindow = document.createElement("div");
	var objContainer = document.createElement("div");
	var objHeading = document.createElement("h1");
	var objSubHeading = document.createElement("h2");
	var objClose = document.createElement("button");
	var objCSS = document.createElement("link");
	var objTitle = document.createElement("title");
	var i;

	objWin = window.open("");
	objCSS.setAttribute("rel", "stylesheet");  
	objCSS.setAttribute("type", "text/css");  
	objCSS.setAttribute("href", "https://juicystudio.com/tpg/ARC/aria-usage.css");
	objTitle.appendChild(document.createTextNode("WAI-ARIA usage results"));
	objWin.document.getElementsByTagName("HTML")[0].setAttribute("lang", "en"); 
	objWin.document.getElementsByTagName("HEAD")[0].appendChild(objCSS); 
	objWin.document.getElementsByTagName("HEAD")[0].appendChild(objTitle); 

	objResultsWindow.setAttribute("id", "__ARIA_validator_resultsWindow__");
	objHeading.setAttribute("id", "__ARIA_validator_dlgtitle__");
	objHeading.appendChild(document.createTextNode("WAI-ARIA usage results"));
	objResultsWindow.appendChild(objHeading);
	objContainer.setAttribute("id", "__ARIA_validator_summary__");
	objSubHeading.appendChild(document.createTextNode("Summary"));
	objContainer.appendChild(objSubHeading);
	objResultsWindow.appendChild(objContainer);
	objSubHeading = document.createElement("h2");
	objSubHeading.appendChild(document.createTextNode("Details"));
	objResultsWindow.appendChild(objSubHeading);

	// Set up containers for the groups
	for (i in objValidWAIAria) {
		if (i !== "valid") {
			objContainer = document.createElement("div");
			objContainer.setAttribute("id", i + "Container");
			objResultsWindow.appendChild(objContainer);
		}
	}

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
		if (iInstances) {
			if (iInstances === 1) {
				objListItem.appendChild(document.createTextNode("1 instance of "));
			}
			else {
				objListItem.appendChild(document.createTextNode(iInstances + " instances of "));
			}

			objCode.appendChild(document.createTextNode(arValidRoles[i][0]));
			objListItem.appendChild(objCode);
			objList.appendChild(objListItem);
		}
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
	var objAnchor;
	var objDetails = document.createElement("details");
	var i;
	var bAppend;
	var objDetSum;
	var objDetList;
	var strPhrase;
	var objSummary = objWin.document.getElementById("__ARIA_validator_summary__");

	for(i in objValidWAIAria) {
		objListItem = document.createElement("li");
		objAnchor = document.createElement("a");
		objAnchor.setAttribute("href", "#" + i + "Head");
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
				strPhrase = objValidWAIAria[i] + " unknown elements.";
				break;
			case "nonexistent":
				strPhrase = objValidWAIAria[i] + " non-existent roles.";
				break;
			case "missingparent":
				strPhrase = objValidWAIAria[i] + " missing parent roles.";
				break;
			case "missingchild":
				strPhrase = objValidWAIAria[i] + " missing child roles.";
				break;
			case "missingstate":
				strPhrase = objValidWAIAria[i] + " roles without required states.";
				break;
			case "invalidproperty":
				strPhrase = objValidWAIAria[i] + " elements with invalid WAI-ARIA attributes.";
				break;
			case "invaliddesc":
				strPhrase = objValidWAIAria[i] + " elements with invalid descendants.";
				break;
			case "invalidref":
				strPhrase = objValidWAIAria[i] + " attribute values without corresponding targets.";
				break;
			default:
				strPhrase = objValidWAIAria[i] + " " + i + " roles.";
		}
		if (bAppend) {
			if (objValidWAIAria[i] > 0) {
				objAnchor.appendChild(document.createTextNode(strPhrase));
				objListItem.appendChild(objAnchor);
			}
			else {
				objListItem.appendChild(document.createTextNode(strPhrase));
			}
			objList.appendChild(objListItem);
		}
	}

	objSummary.appendChild(objList);
}

function addHeading(objGroup, strTargetContainer) {
	var objHeading = document.createElement("h3");
	var objBTT = document.createElement("a");

	objBTT.setAttribute("href", "#__ARIA_validator_summary__");
	objBTT.appendChild(document.createTextNode("Back to the top"));

	objHeading.setAttribute("id", strTargetContainer + "Head");

	switch (strTargetContainer) {
		case "invalid":
			objHeading.appendChild(document.createTextNode("Invalid roles"));
			break;
		case "unnecessary":
			objHeading.appendChild(document.createTextNode("Unnecessary roles"));
			break;
		case "unknown":
			objHeading.appendChild(document.createTextNode("Unknown elements"));
			break;
		case "nonexistent":
			objHeading.appendChild(document.createTextNode("Non-existent roles"));
			break;
		case "missingparent":
			objHeading.appendChild(document.createTextNode("Missing parent roles"));
			break;
		case "missingchild":
			objHeading.appendChild(document.createTextNode("Missing child roles"));
			break;
		case "missingstate":
			objHeading.appendChild(document.createTextNode("Missing required state"));
			break;
		case "invalidproperty":
			objHeading.appendChild(document.createTextNode("Invalid properties"));
			break;
		case "invaliddesc":
			objHeading.appendChild(document.createTextNode("Invalid descendants"));
			break;
		case "invalidref":
			objHeading.appendChild(document.createTextNode("Invalid references"));
	}
	objGroup.appendChild(objHeading);
	objGroup.appendChild(objBTT)
}

function logResult(strMessage, strElement, strError, strRole, objCode, strMissing, strTargetContainer) {
	var objGroup = objWin.document.getElementById(strTargetContainer + "Container");
	var objMessage = document.createElement("p");
	var objElement = document.createElement("code");
	var objRole = document.createElement("code");
	var objPre = document.createElement("pre");
	var objMarkup = document.createElement("code");

	if (objGroup.childNodes.length === 0) {
		addHeading(objGroup, strTargetContainer);
	}
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

	objGroup.appendChild(objMessage);

	if (objCode) {
		objMarkup.appendChild(document.createTextNode(objCode.outerHTML));
		objPre.appendChild(objMarkup);
		objGroup.appendChild(objPre);
	}
	bDetails = true;
}

function checkConditionalInteractive(strElement, objElement) {
	switch (strElement) {
		case "a":
			if (objElement.hasAttribute("href")) {
				return false;
			}
			return true;
		case "audio":
		case "video":
			if (objElement.hasAttribute("controls")) {
				return false;
			}
			return true;
		case "img":
		case "object":
			if (objElement.hasAttribute("usemap")) {
				return false;
			}
			return true;
		case "input":
			if (objElement.getAttribute("type") !== "hidden") {
				return false;
			}
			return true;
	}
	return false;
}

function checkValidDescendant(objElement, strRole) {
	var arCheckDescendant = objRoleRules[strRole].descendantRestrictions;
	var strParentElement = objElement.tagName.toLowerCase();
	var strParentRole = objElement.getAttribute("role");
	var strElement;
	var strChildRole;
	var objParent = objElement;
	var i;

	if (strParentRole !== "") {
		strParentElement = strParentElement + " role=" + strParentRole;
	}
	if (arCheckDescendant) {
		switch (arCheckDescendant[0]) {
			case "phrasing":
				// For definition or term roles 
				for (i=0; i<objElement.childNodes.length; i++) {
					if (objElement.childNodes[i].nodeType === 1) {
						strElement = objElement.childNodes[i].tagName.toLowerCase();
						if (arPhrasing.indexOf(strElement) === -1) {
							logResult("Invalid descendant: ", strParentElement, " with role " + strParentRole + " has child ", strElement, objElement, ".", "invaliddesc");
							return false;
						}
					}
				}
				return true;
			case "interactive":
				// Some interactive elements have conditional requirements
				for (i=0; i<objElement.childNodes.length; i++) {
					if (objElement.childNodes[i].nodeType === 1) {
						strElement = objElement.childNodes[i].tagName.toLowerCase();
						strChildRole = objElement.childNodes[i].getAttribute("role");
						if (arInteractive.indexOf(strElement) !== -1) {
							if (!checkConditionalInteractive(strElement, objElement.childNodes[i])) {
								logResult("Invalid descendant: ", strParentElement, " has child ", strElement, objElement, ".", "invaliddesc");
								return false;
							}
						}
						else if (strChildRole !== "") {
							if (arInteractive.indexOf(strChildRole) !== -1) {
								strElement = strElement + " role=" + strChildRole;
								logResult("Invalid descendant: ", strParentElement, " has child ", strElement, objElement, ".", "invaliddesc");
								return false;
							}
						}
					}
				}
				do {
					// Check interactive element isn't within a native interactive element
					objParent = objParent.parentNode;
					if (objParent.nodeType === 1) {
						strElement = objParent.tagName.toLowerCase();
						if (arInteractive.indexOf(strElement) !== -1 && strElement !== "label") {
							if (!checkConditionalInteractive(strElement, objParent)) {
								logResult("Invalid descendant: ", strParentElement, " has parent ", strElement, objParent, ".", "invaliddesc");
								return false;
							}
						}
					}
				} while (objParent.tagName.toLowerCase() !== "body");
				return true;
			default:
				// Specific children not allowed
				for (i=0; i<objElement.childNodes.length; i++) {
					if (objElement.childNodes[i].nodeType === 1) {
						strElement = objElement.childNodes[i].tagName.toLowerCase();
						strChildRole = objElement.childNodes[i].getAttribute("role");
						if (arCheckDescendant.indexOf(strElement) !== -1) {
							logResult("Invalid descendant: ", strParentElement, " has child ", strElement, objElement, ".", "invaliddesc");
							return false;
						}
						else if (arCheckDescendant.indexOf(strChildRole) !== -1) {
							logResult("Invalid descendant: ", strParentElement, " has child ", strChildRole, objElement, ".", "invaliddesc");
							return false;
						}
					}
				}
		}
	}
	return true;
}

function addMessage(strMessage) {
	var objResultsWindow = objWin.document.getElementById("__ARIA_validator_resultsWindow__");
	var objMessage = document.createElement("p");

	objMessage.appendChild(document.createTextNode(strMessage));
	objResultsWindow.appendChild(objMessage);
}

function checkParentOwns(objElement, arParent) {
	var objRoles = document.querySelectorAll("[role='tablist']");
	var iID = objElement.getAttribute("id");
	var arOwns = [];
	var i;

	for (i=0; i<objRoles.length; i++) {
		if (objRoles[i].hasAttribute("aria-owns")) {
			arOwns = objRoles[i].getAttribute("aria-owns").split(" ");
			if (arOwns.indexOf(iID) !== -1) {
				return true;
			}
		}
	}

	return false;
}

function checkRequiredParent(objElement, strRole) {
	var strParentRole;
	var objOriginal = objElement;
	var arParent = objRoleRules[strRole].requiredParent;
	var arParentNative = objRoleRules[strRole].requiredParentNative;

	if (arParent) {
		while (objElement.tagName.toLowerCase() !== "body") {
			objElement = objElement.parentNode;
			strParentRole = objElement.getAttribute("role");
			if (arParent.indexOf(strParentRole) !== -1) {
				return true;
			}
			else if (arParentNative) {
				if (arParentNative.indexOf(objElement.tagName.toLowerCase()) !== -1) {
					return true;
				}
			}
		}
		// Not found - check for aria-owns relationship
		if (objOriginal.getAttribute("id")) {
			if (checkParentOwns(objOriginal, arParent)) {
				return true;
			}
		}
		logResult("Role ", strRole, " missing required parent role ", "", objOriginal, " (" + arParent + ").", "missingparent");
		return false;
	}
	return true;
}

function checkRequiredChildren(objElement, strRole) {
	var arChild = objRoleRules[strRole].requiredChild;
	var arChildNative = objRoleRules[strRole].requiredChildNative;
	var objChildren = objElement.getElementsByTagName("*");
	var arOwns = [];
	var objChild;
	var strChildRole;
	var i;

	if (arChild) {
		for (i=0; i<objChildren.length; i++) {
			strChildRole = objChildren[i].getAttribute("role");
			if (arChild.indexOf(strChildRole) !== -1) {
				return true;
			}
			else if (arChildNative) {
				if (arChildNative.indexOf(objChildren[i].tagName.toLowerCase()) !== -1) {
					return true;
				}
			}
		}
		// Not found - check for aria-owns relationship
		if (arOwns = objElement.getAttribute("aria-owns")) {
			arOwns = arOwns.split(" ");

			for (i=0; i<arOwns.length; i++) {
				if (objChild = document.getElementById(arOwns[i])) {
					if (arChild.indexOf(objChild.getAttribute("role")) !== -1) {
						return true;
					}
				}
			}
		}
		logResult("Role ", strRole, " missing required child role ", "", objElement, " (" + arChild + ").", "missingchild");
		return false;
	}
	return true;
}

function checkRequiredState(objElement, strRole) {
	var arState = objRoleRules[strRole].requiredState;
	var strType;
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
	// Exceptions for roles on native elements
	if (objElement.tagName.toLowerCase() === "input" && objElement.hasAttribute("type")) {
		// Native radio and checkbox exceptions
		strType = objElement.getAttribute("type").toLowerCase();
		if (((strRole === "menuitemcheckbox" || strRole === "switch") && strType === "checkbox") || (strRole === "menuitemradio" && strType === "radio")) {
			return true;
		}
		// aria-pressed requirement for button used on type="checkbox"
		if (strRole === "button" && strType === "checkbox") {
			if (!objElement.hasAttribute("aria-pressed")) {
				logResult("Role ", strRole, " missing required state ", "", objElement, " (aria-pressed).", "missingstate");
				return false;
			}
		}
	}
	if (arState) {
		for (i=0; i<arState.length; i++) {
			if (!objElement.hasAttribute(arState[i])) {
				logResult("Role ", strRole, " missing required state ", "", objElement, " (" + arState[i] + ").", "missingstate");
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
	var strType;
	var bGlobal = false;
	var bFound = false;
	var i;

	if (strTagName === "input" && objElement.hasAttribute("type")) {
		strType = objElement.getAttribute("type").toLowerCase();
	}

	// If a role has not been specified, see if the element has a native role
	if (!strRole) {
		// Check for aria-checked on native checkbox or radio buttons
		if (strTagName === "input" && objElement.hasAttribute("aria-checked")) {
			if (strType === "checkbox") {
				logResult("Warning ", strTagName, " aria-checked is used on a native checkbox", "", objElement, ".", "invalidproperty");
				return false;
			}
			else if (strType === "radio") {
				logResult("Warning ", strTagName, " aria-checked is used on a native radio button", "", objElement, ".", "invalidproperty");
				return false;
			}
		}
		// Find native role
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
			if (strTagName === "input" && objElement.hasAttribute("type")) {
				if (strType === "hidden") {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
			}
			if (objElement.hasAttribute("contenteditable") && objElement.getAttribute("aria-readonly")) {
				logResult("Element ", strTagName, " has a contenteditable attribute along with aria-readonly", "", objElement, ".", "invalidproperty");
				return false;
			}
			if (!strRole && bGlobal === -1) {
				// No role without a global attribute
				logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
				return false;
			}
			if (strTagName === "option" && objElement.hasAttribute("aria-selected")) {
				logResult("Warning: ", strTagName, " should not use the aria-selected attribute ", "", objElement, ".", "invalidproperty");
				return false;
			}
			if (strTagName === "a" && objElement.hasAttribute("aria-disabled") && objElement.hasAttribute("href")) {
				logResult("Warning: ", strTagName, " with an href attribute should not use the aria-disabled attribute ", "", objElement, ".", "invalidproperty");
				return false;
			}
			if (objElement.hasAttribute("placeholder") && objElement.hasAttribute("aria-placeholder")) {
				logResult("Element ", strTagName, " has a native placeholder attribute along with ", "", objElement, strAttribute + ".", "invalidproperty");
				return false;
			}
			if (objElement.hasAttribute("readonly") && objElement.getAttribute("aria-readonly")) {
				if (objElement.getAttribute("aria-readonly") === "false") {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
				else {
					logResult("Warning: Element ", strTagName, " has a native readonly attribute along with ", "", objElement, strAttribute + ".", "invalidproperty");
					return false;
				}
			}
			if (objElement.hasAttribute("disabled") && objElement.getAttribute("aria-disabled")) {
				if (objElement.getAttribute("aria-disabled") === "false") {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
				else {
					logResult("Warning: Element ", strTagName, " has a native disabled attribute along with ", "", objElement, strAttribute + ".", "invalidproperty");
					return false;
				}
			}
			if (objElement.hasAttribute("colspan") && objElement.hasAttribute("aria-colspan")) {
				if (objElement.getAttribute("colspan") !== objElement.getAttribute("aria-colspan")) {
					logResult("Element ", strTagName, " has colspan and aria-colspan attribute values that do not match ", "", objElement, ".", "invalidproperty");
					return false;
				}
				else {
					logResult("Warning: Element ", strTagName, " has a native colspan attribute along with ", "", objElement, strAttribute + ".", "invalidproperty");
					return false;
				}
			}
			if (objElement.hasAttribute("rowspan") && objElement.hasAttribute("aria-rowspan")) {
				if (objElement.getAttribute("rowspan") !== objElement.getAttribute("aria-rowspan")) {
					logResult("Element ", strTagName, " has rowspan and aria-rowspan attribute values that do not match ", "", objElement, ".", "invalidproperty");
					return false;
				}
				else {
					logResult("Warning: Element ", strTagName, " has a native rowspan attribute along with ", "", objElement, strAttribute + ".", "invalidproperty");
					return false;
				}
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
					logResult("Role ", strRole, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
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
				logResult("Attribute ", strAttribute, " has an empty string.", "", objElement, "", "invalidref");
				bValid = false;
			}
			else {
				arRefs = strAttributeValue.split(" ");
				for (j in arRefs) {
					objTarget = document.getElementById(arRefs[j]);
					if (!objTarget) {
						logResult("Attribute ", strAttribute, " does not reference a corresponding element.", "", objElement, "", "invalidref");
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
		invaliddesc: 0,
		invalidref: 0
	};
	var objElements = document.getElementsByTagName("*");
	var objBTT = document.createElement("a");
	var bValid;
	var strElement;
	var strRole;
	var strCheckElement;
	var arAllowed = [];
	var iRoleIndex;
	var i;

	createResultsWindow(objValidWAIAria);

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
					logResult("Element ", strElement, " has non-existent role ", strRole, objElements[i], ".", "nonexistent");
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
					// Check exceptions
					if (strRole === "link" && !objElements[i].getAttribute("href")){
						// Exception for a and area elements
					}
					else if ((strRole === "textbox" || strRole === "searchbox") && objElements[i].tagName === "INPUT" && objElements[i].getAttribute("list")){
						// Exception for input element with a list attribute
					}
					else {
						// The role is unecessary for the element
						objValidWAIAria.unnecessary++;
						logResult("", strElement, "", strRole, objElements[i], ".", "unnecessary");
					}
				}
				else {
					// The role is invalid for the element
					objValidWAIAria.invalid++;
					logResult("Element ", strElement, " has invalid role ", strRole, objElements[i], ".", "invalid");
				}
			}
			else {
				objValidWAIAria.unknown++;
				if (!objRoleRules.hasOwnProperty(strRole)) {
					// The specified role doesn"t exist
					objValidWAIAria.nonexistent++;
					logResult("Unknown element ", strElement, " has non-existent role ", strRole, objElements[i], ".", "unknown");
				}
				else {
					logResult("Unknown element ", strElement, " has role ", strRole, objElements[i], ".", "unknown");
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
				if (!checkValidDescendant(objElements[i], strRole)) {
					objValidWAIAria.invaliddesc++;
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
		addMessage("No details to display.");
	}
	else {
		objBTT.setAttribute("href", "#__ARIA_validator_summary__");
		objBTT.appendChild(document.createTextNode("Back to the top"));
		objWin.document.body.appendChild(objBTT);
	}
}
checkWAIAria();
})();
