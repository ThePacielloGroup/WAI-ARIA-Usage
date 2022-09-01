(function() {
var objRoleRules = {
	"alert": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"alertdialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-modal"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"application": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-expanded"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"article": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"aside": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-pressed"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"banner": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main", "header", "footer"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"blockquote": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"button": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded", "aria-pressed"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"caption": {
		"requiredParent": ["figure", "grid", "table", "treegrid"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"cell": {
		"requiredParent": "row",
		"requiredParentNative": "tr",
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-rowindex", "aria-rowspan"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"checkbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded", "aria-readonly"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"code": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"columnheader": {
		"requiredParent": "row",
		"requiredParentNative": "tr",
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	},
	"combobox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-expanded", "aria-controls"],
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-required", "aria-orientation"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"complementary": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"contentinfo": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main", "header", "footer"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"definition": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["phrasing"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"deletion": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"dialog": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-modal"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"directory": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecated": true,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"document": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"nameable": "yes"
	}, 
	"emphasis": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"feed": {
		"requiredParent": null,
		"requiredChild": ["article"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"figure": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"form": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"generic": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"grid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredChildNative": ["tr"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"gridcell": {
		"requiredParent": ["row"],
		"requiredParentNative": ["tr"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colspan", "aria-colindex", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"group": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"heading": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-level"],
		"descendantRestrictions": ["article", "aside", "blockquote", "body", "details", "dialog", "fieldset", "figure", "section", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "nav", "td"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"insertion": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"img": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"link": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"list": {
		"requiredParent": null,
		"requiredChild": ["group", "listitem"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"listbox": {
		"requiredParent": null,
		"requiredChild": ["option"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-orientation"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"listitem": {
		"requiredParent": ["group", "list"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-level", "aria-posinset", "aria-setsize"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"log": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"main": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"marquee": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"math": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"meter": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuenow"],
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"menu": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-orientation"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"menubar": {
		"requiredParent": null,
		"requiredChild": ["group", "menuitem", "menuitemcheckbox", "menuitemradio"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-orientation"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"menuitem": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded", "aria-posinset", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"menuitemcheckbox": {
		"requiredParent": ["menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"menuitemradio": {
		"requiredParent": ["group", "menu", "menubar"],
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"navigation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["main"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"none": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "no"
	}, 
	"note": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"option": {
		"requiredParent": ["listbox"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"paragraph": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"presentation": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "no"
	}, 
	"progressbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"radio": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-posinset", "aria-selected", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"radiogroup": {
		"requiredParent": null,
		"requiredChild": "radio",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-orientation", "aria-required"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"region": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"row": {
		"requiredParent": ["grid", "rowgroup", "table", "treegrid"],
		"requiredParentNative": ["table", "thead", "tbody", "tfoot"],
		"requiredChild": ["cell", "columnheader", "gridcell", "rowheader"],
		"requiredChildNative": ["td", "th"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colindex", "aria-rowindex", "aria-selected", "aria-expanded", "aria-level","aria-posinset", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"rowgroup": {
		"requiredParent": ["grid", "table", "treegrid"],
		"requiredParentNative": "table",
		"requiredChild": ["row"],
		"requiredChildNative": "tr",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"rowheader": {
		"requiredParent": ["row"],
		"requiredParentNative": ["tr"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-expanded"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"scrollbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-valuetext"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"search": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"searchbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"separator": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-orientation", "aria-valuetext"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"slider": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-orientation", "aria-valuetext"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"spinbutton": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-valuemax", "aria-valuemin", "aria-valuenow"],
		"descendantRestrictions": null,
		"supported": ["aria-readonly", "aria-required", "aria-valuetext", "aria-placeholder"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"status": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"strong": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"subscript": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"superscript": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"switch": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": ["aria-checked"],
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-expanded", "aria-readonly"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"tab": {
		"requiredParent": ["tablist"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-expanded", "aria-posinset", "aria-selected", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	}, 
	"table": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredChildNative": ["tr", "thead", "tbody", "tfoot"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-colcount", "aria-rowcount"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"tablist": {
		"requiredParent": null,
		"requiredChild": ["tab"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-level", "aria-multiselectable", "aria-orientation"],
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"tabpanel": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"term": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["phrasing"],
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"textbox": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": ["interactive"],
		"supported": ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed"],
		"nameable": "yes"
	}, 
	"time": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-errormessage", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"timer": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"toolbar": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-orientation"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"]
	}, 
	"tooltip": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}, 
	"tree": {
		"requiredParent": null,
		"requiredChild": ["group", "treeitem"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-multiselectable", "aria-orientation", "aria-required"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"treegrid": {
		"requiredParent": null,
		"requiredChild": ["row", "rowgroup"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": ["aria-activedescendant", "aria-colcount", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-grabbed", "aria-haspopup"],
		"nameable": "yes"
	}, 
	"treeitem": {
		"requiredParent": ["group", "tree"],
		"requiredChild": null,
		"requiredState": ["aria-selected"],
		"descendantRestrictions": null,
		"supported": ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"],
		"deprecatedAttributes": ["aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-invalid"],
		"nameable": "yes"
	},
	// DPub roles
	"doc-abstract": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-acknowledgments": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-afterword": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-appendix": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-backlink": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-biblioentry": {
		"requiredParent": "list",
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecated": true,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-bibliography": {
		"requiredParent": null,
		"requiredChild": "list",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-biblioref": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-chapter": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-colophon": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-conclusion": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-cover": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"]
	},
	"doc-credit": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-credits": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-dedication": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-endnote": {
		"requiredParent": ["list"],
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecated": true,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-endnotes": {
		"requiredParent": null,
		"requiredChild": "list",
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-epigraph": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-epilogue": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-errata": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-example": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-footnote": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-foreword": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-glossary": {
		"requiredParent": null,
		"requiredChild": ["term", "definition"],
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-glossref": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-index": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-introduction": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-noteref": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-notice": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},

	"doc-pagebreak": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-pagelist": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-part": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-preface": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-prologue": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},

	"doc-pullquote": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-qna": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"]
	},
	"doc-subtitle": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-tip": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	},
	"doc-toc": {
		"requiredParent": null,
		"requiredChild": null,
		"requiredState": null,
		"descendantRestrictions": null,
		"supported": null,
		"deprecatedAttributes": ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"],
		"nameable": "yes"
	}
 };

var objElementRules = {
	"ahref": {
		"nodeName": "a",
		"nativeRole": "link",
		"allowedRoles": ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem",  "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"],
		"nameable": "yes"
	},
	"anohref": {
		"nodeName": "a",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"abbr": {
		"nodeName": "abbr",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes",
		"nameable": "no"
	},
	"address": {
		"nodeName": "address",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"area": {
		"nodeName": "area",
		"nativeRole": "link",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"areanohref": {
		"nodeName": "area",
		"nativeRole": null,
		"allowedRoles": ["button", "link"],
		"nameable": "no"
	},
	"article": {
		"nodeName": "article",
		"nativeRole": "article",
		"allowedRoles": ["feed", "presentation", "none", "document", "application", "main", "region"],
		"nameable": "yes"
	},
	"aside": {
		"nodeName": "aside",
		"nativeRole": "complementary",
		"allowedRoles": ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-pullquote", "doc-tip"],
		"nameable": "yes"
	},
	"audio": {
		"nodeName": "audio",
		"nativeRole": null,
		"allowedRoles": ["application"],
		"nameable": "yes"
	},
	"b": {
		"nodeName": "b",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"base": {
		"nodeName": "base",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"bdi": {
		"nodeName": "bdi",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"bdo": {
		"nodeName": "bdo",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"blockquote": {
		"nodeName": "blockquote",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"body": {
		"nodeName": "body",
		"nativeRole": "document",
		"allowedRoles": [],
		"nameable": "no"
	},
	"br": {
		"nodeName": "br",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"button": {
		"nodeName": "button",
		"nativeRole": "button",
		"allowedRoles": ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
		"nameable": "yes"
	},
	"canvas": {
		"nodeName": "canvas",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"caption": {
		"nodeName": "caption",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "no"
	},
	"cite": {
		"nodeName": "cite",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"code": {
		"nodeName": "code",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"col": {
		"nodeName": "col",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"colgroup": {
		"nodeName": "colgroup",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"data": {
		"nodeName": "data",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"datalist": {
		"nodeName": "datalist",
		"nativeRole": "listbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"dd": {
		"nodeName": "dd",
		"nativeRole": "definition",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"del": {
		"nodeName": "del",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"details": {
		"nodeName": "details",
		"nativeRole": "group",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"dfn": {
		"nodeName": "dfn",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"dialog": {
		"nodeName": "dialog",
		"nativeRole": "dialog",
		"allowedRoles": ["alertdialog"],
		"nameable": "yes"
	},
	"div": {
		"nodeName": "div",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"dl": {
		"nodeName": "dl",
		"nativeRole": null,
		"allowedRoles": ["group", "list", "presentation", "none"],
		"nameable": "yes"
	},
	"dt": {
		"nodeName": "dt",
		"nativeRole": "term",
		"allowedRoles": ["listitem"],
		"nameable": "yes"
	},
	"em": {
		"nodeName": "em",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"embed": {
		"nodeName": "embed",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"figcaption": {
		"nodeName": "figcaption",
		"nativeRole": null,
		"allowedRoles": ["group", "presentation", "none"],
		"nameable": "no"
	},
	"fieldset": {
		"nodeName": "fieldset",
		"nativeRole": "group",
		"allowedRoles": ["radiogroup", "none", "presentation"],
		"nameable": "yes"
	},
	"figure": {
		"nodeName": "figure",
		"nativeRole": "figure",
		"allowedRoles": ["doc-example"],
		"nameable": "yes"
	},
	"figure-nofigcap": {
		"nodeName": "figure",
		"nativeRole": "figure",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"footer": {
		"nodeName": "footer",
		"nativeRole": "contentinfo",
		"allowedRoles": ["group", "none", "presentation", "doc-footnote"],
		"nameable": "no"
	},
	"form": {
		"nodeName": "form",
		"nativeRole": "form",
		"allowedRoles": ["search", "none", "presentation"],
		"nameable": "yes"
	},
	"h1": {
		"nodeName": "h1",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"],
		"nameable": "yes"
	},
	"h2": {
		"nodeName": "h2",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"]
	},
	"h3": {
		"nodeName": "h3",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"],
		"nameable": "yes"
	},
	"h4": {
		"nodeName": "h4",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"],
		"nameable": "yes"
	},
	"h5": {
		"nodeName": "h5",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"],
		"nameable": "yes"
	},
	"h6": {
		"nodeName": "h6",
		"nativeRole": "heading",
		"allowedRoles": ["tab", "none", "presentation", "doc-subtitle"],
		"nameable": "yes"
	},
	"head": {
		"nodeName": "head",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"header": {
		"nodeName": "header",
		"nativeRole": "banner",
		"allowedRoles": ["group", "none", "presentation"],
		"nameable": "no"
	},
	"hgroup": {
		"nodeName": "hgroup",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"hr": {
		"nodeName": "hr",
		"nativeRole": "separator",
		"allowedRoles": ["none", "presentation", "doc-pagebreak"],
		"nameable": "yes"
	},
	"html": {
		"nodeName": "html",
		"nativeRole": "document",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"i": {
		"nodeName": "i",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"iframe": {
		"nodeName": "iframe",
		"nativeRole": null,
		"allowedRoles": ["application", "document", "img", "none", "presentation"],
		"nameable": "yes"
	},
	"img-noalt": {
		"nodeName": "imgEmptyAlt",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"img-emptyalt": {
		"nodeName": "imgEmptyAlt",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"img": {
		"nodeName": "imgWithAlt",
		"nativeRole": "img",
		"allowedRoles": ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem"],
		"nameable": "yes"
	},
	"input-button": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"],
		"nameable": "yes"
	},
	"input-checkbox": {
		"nodeName": "input",
		"nativeRole": "checkbox",
		"allowedRoles": ["button", "menuitemcheckbox", "option", "switch"],
		"nameable": "yes"
	},
	"input-color": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-date": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-datetime-local": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-email": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-file": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-hidden": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-image": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"],
		"nameable": "yes"
	},
	"input-month": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-number": {
		"nodeName": "input",
		"nativeRole": "spinbutton",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-password": {
		"nodeName": "input",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-radio": {
		"nodeName": "input",
		"nativeRole": "radio",
		"allowedRoles": ["menuitemradio"],
		"nameable": "yes"
	},
	"input-range": {
		"nodeName": "input",
		"nativeRole": "slider",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-reset": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-search": {
		"nodeName": "input",
		"nativeRole": "searchbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-submit": {
		"nodeName": "input",
		"nativeRole": "button",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-tel": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-text": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": ["combobox", "searchbox", "spinbutton"],
		"nameable": "yes"
	},
	"input-time": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-url": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"input-week": {
		"nodeName": "input",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"ins": {
		"nodeName": "ins",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"kbd": {
		"nodeName": "kbd",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"label": {
		"nodeName": "label",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "no"
	},
	"legend": {
		"nodeName": "legend",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"li": {
		"nodeName": "li",
		"nativeRole": "listitem",
		"allowedRoles": ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"],
		"nameable": "yes"
	},
	"link": {
		"nodeName": "link",
		"nativeRole": "link",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"main": {
		"nodeName": "main",
		"nativeRole": "main",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"map": {
		"nodeName": "map",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"mark": {
		"nodeName": "mark",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"math": {
		"nodeName": "math",
		"nativeRole": "math",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"menu": {
		"nodeName": "menu",
		"nativeRole": "list",
		"allowedRoles": [ "directory", "group", "listbox", "menu", "menubar", "radiogroup", "tablist", "toolbar", "tree", "presentation", "none"],
		"nameable": "yes"
	},
	"meta": {
		"nodeName": "meta",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"meter": {
		"nodeName": "meter",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"nav": {
		"nodeName": "nav",
		"nativeRole": "navigation",
		"allowedRoles": ["menu", "menubar", "none", "presentation", "tablist", "doc-index", "doc-pagelist", "doc-toc"],
		"nameable": "yes"
	},
	"noscript": {
		"nodeName": "noscript",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"object": {
		"nodeName": "object",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"ol": {
		"nodeName": "ol",
		"nativeRole": "list",
		"allowedRoles": ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"],
		"nameable": "yes"
	},
	"optgroup": {
		"nodeName": "optgroup",
		"nativeRole": "group",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"option": {
		"nodeName": "option",
		"nativeRole": "option",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"output": {
		"nodeName": "output",
		"nativeRole": "status",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"p": {
		"nodeName": "p",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"param": {
		"nodeName": "param",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"picture": {
		"nodeName": "picture",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"pre": {
		"nodeName": "pre",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"progress": {
		"nodeName": "progress",
		"nativeRole": "progressbar",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"q": {
		"nodeName": "q",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"rp": {
		"nodeName": "rp",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"rt": {
		"nodeName": "rt",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"ruby": {
		"nodeName": "ruby",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"s": {
		"nodeName": "s",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"samp": {
		"nodeName": "samp",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"script": {
		"nodeName": "script",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"section": {
		"nodeName": "section",
		"nativeRole": "region",
		"allowedRoles": ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel",  "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"],
		"nameable": "yes"
	},
	"select": {
		"nodeName": "select",
		"nativeRole": "combobox",
		"allowedRoles": ["menu"],
		"nameable": "yes"
	},
	"select-nomenu": {
		"nodeName": "select",
		"nativeRole": "combobox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"select-2": {
		"nodeName": "select",
		"nativeRole": "listbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"slot": {
		"nodeName": "slot",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"small": {
		"nodeName": "small",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"source": {
		"nodeName": "source",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"span": {
		"nodeName": "span",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"strong": {
		"nodeName": "strong",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"style": {
		"nodeName": "style",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"svg": {
		"nodeName": "svg",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"sub": {
		"nodeName": "sub",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"sup": {
		"nodeName": "sup",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"summary": {
		"nodeName": "summary",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"table": {
		"nodeName": "table",
		"nativeRole": "table",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"template": {
		"nodeName": "template",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"textarea": {
		"nodeName": "textarea",
		"nativeRole": "textbox",
		"allowedRoles": [],
		"nameable": "yes"
	},
	"tbody": {
		"nodeName": "tbody",
		"nativeRole": "rowgroup",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"tfoot": {
		"nodeName": "tfoot",
		"nativeRole": "rowgroup",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"thead": {
		"nodeName": "thead",
		"nativeRole": "rowgroup",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"title": {
		"nodeName": "title",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"td": {
		"nodeName": "td",
		"nativeRole": "cell",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"th": {
		"nodeName": "th",
		"nativeRole": "columnheader",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"time": {
		"nodeName": "time",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"tr": {
		"nodeName": "tr",
		"nativeRole": "row",
		"allowedRoles": "all",
		"nameable": "yes"
	},
	"track": {
		"nodeName": "track",
		"nativeRole": null,
		"allowedRoles": [],
		"nameable": "yes"
	},
	"u": {
		"nodeName": "u",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"ul": {
		"nodeName": "ul",
		"nativeRole": "list",
		"allowedRoles": ["directory", "group", "listbox", "menu", "menubar", "radiogroup", "tablist", "toolbar", "tree", "presentation", "none"],
		"nameable": "yes"
	},
	"var": {
		"nodeName": "var",
		"nativeRole": null,
		"allowedRoles": "all",
		"nameable": "no"
	},
	"video": {
		"nodeName": "video",
		"nativeRole": null,
		"allowedRoles": ["application"],
		"nameable": "yes"
	},
	"wbr": {
		"nodeName": "wbr",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	// Common SVG elements
	"circle": {
		"nodeName": "circle",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"defs": {
		"nodeName": "defs",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"ellipse": {
		"nodeName": "ellipse",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"g": {
		"nodeName": "g",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"line": {
		"nodeName": "line",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"path": {
		"nodeName": "path",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"polygon": {
		"nodeName": "polygon",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"polyline": {
		"nodeName": "polyline",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"rect": {
		"nodeName": "rect",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	},
	"text": {
		"nodeName": "text",
		"nativeRole": null,
		"allowedRoles": ["none", "presentation"],
		"nameable": "yes"
	}
};

// Token for deprecated roles are not included, as a warning is provided for them
var objTokens = {
	"aria-atomic": {
		"tokenlist": ["false", "true"]
	},
	"aria-autocomplete": {
		"tokenlist": ["inline", "list", "both"]
	},
	"aria-busy": {
		"tokenlist": ["false", "true"]
	},
	"aria-checked": {
		"tokenlist": ["false", "true", "mixed"]
	},
	"aria-current": {
		"tokenlist": ["page", "step", "location", "date", "time", "true", "false"]
	},
	"aria-disabled": {
		"tokenlist": ["false", "true"]
	},
	"aria-expanded": {
		"tokenlist": ["false", "true"]
	},
	"aria-haspopup": {
		"tokenlist": ["true", "false", "menu", "listbox", "tree", "grid", "dialog"]
	},
	"aria-hidden": {
		"tokenlist": ["false", "true"]
	},
	"aria-invalid": {
		"tokenlist": ["grammar", "false", "spelling", "true"]
	},
	"aria-live": {
		"tokenlist": ["assertive", "off", "polite"]
	},
	"aria-modal": {
		"tokenlist": ["false", "true"]
	},
	"aria-multiline": {
		"tokenlist": ["false", "true"]
	},
	"aria-multiselectable": {
		"tokenlist": ["false", "true"]
	},
	"aria-orientation": {
		"tokenlist": ["horizontal", "vertical"]
	},
	"aria-pressed": {
		"tokenlist": ["false", "true", "mixed"]
	},
	"aria-readonly": {
		"tokenlist": ["false", "true"]
	},
	"aria-relevant": {
		"tokenlist": ["additions", "additions text", "all", "removals", "text"]
	},
	"aria-required": {
		"tokenlist": ["false", "true"]
	},
	"aria-selected": {
		"tokenlist": ["false", "true"]
	}
};


// 1 = must be 0 or higher; 
// 2 = must be 1 or higher; 
// 3 = must be 1 or higher, or -1; 
// 4 = between 1 and 6 on a heading
var objIntegers = {
	"aria-colcount": {
		"type": 3
	},
	"aria-colindex": {
		"type": 2
	},
	"aria-colspan": {
		"type": 2
	},
	"aria-level": {
		"type": 4
	},
	"aria-posinset": {
		"type": 2
	},
	"aria-rowcount": {
		"type": 3
	},
	"aria-rowindex": {
		"type": 2
	},
	"aria-rowspan": {
		"type": 1
	},
	"aria-setsize": {
		"type": 3
	}
};

var arValidARIAAttributes = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];

var arPhrasing = ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "emembed", "i", "iframe", "img", "input", "ins", "kbd", "label", "link", "map", "mark", "math", "meta", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "text", "area", "time", "u", "var", "video", "wbr"];
var arInteractive = ["a", "audio", "button", "details", "embed", "iframe", "img", "input", "label", "object", "select", "textarea", "video"];
var arValidRoles=[];
var bDetails = false;
var objWin;

function conditionalElement(objElement, strElement) {
	var strType;

	switch (strElement) {
		case "a" : 
			if (objElement.hasAttribute("href")) {
				return "ahref";
			}
			else {
				return "anohref";
			}
		case "area" : 
			if (!objElement.hasAttribute("href")) {
				return "areanohref";
			}
			break;
		case "img" : 
			if (!objElement.hasAttribute("alt")) {
				return "img-noalt";
			}
			else if (!objElement.getAttribute("alt")) {
				return "img-emptyalt";
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
			case "deprecatedattribute":
				strPhrase = objValidWAIAria[i] + " deprecated attributes.";
				break;
			case "dpub":
				if (objValidWAIAria[i] > 0) {
					strPhrase = objValidWAIAria[i] + " valid DPub roles. Note: although valid, DPUB roles are likely not recognized on the web.";
					objListItem.appendChild(document.createTextNode(strPhrase));
					objList.appendChild(objListItem);
				}
				bAppend = false;
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
			break;
		case "deprecated":
			objHeading.appendChild(document.createTextNode("Deprecated roles"));
			break;
		case "deprecatedattribute":
			objHeading.appendChild(document.createTextNode("Deprecated attributes"));
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
		objMessage.appendChild(document.createTextNode(' There may be additional issues with this element.'));
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

function checkAncestor(objElement, arRole) {
	var strParentRole;

	while (objElement.tagName.toLowerCase() !== "body") {
		objElement = objElement.parentNode;
		strParentRole = objElement.getAttribute("role");
		if (strParentRole) {
			if (arRole.indexOf(strParentRole) !== -1) {
				return true;
			}
			return false;
		}
		else if (arRole.indexOf(objElement.tagName.toLowerCase()) !== -1) {
			return true;
		}
	}
	return false;
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
		// Check for required children
		for (i=0; i<objChildren.length; i++) {
			strChildRole = objChildren[i].getAttribute("role");
			if (!strChildRole) { 
				// Role not found, so check for native role
				strChildRole = objChildren[i].tagName.toLowerCase();
				if (strChildRole === "input" && objChildren[i].hasAttribute("type")) { 
					strChildRole = objChildren[i].getAttribute("type").toLowerCase();
				}
			}
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

	// Special condition for separator that isn't focusable
	// The role isn't valid on native elements that receive keyboard focus, 
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

function checkScope(objElement) {
	var objParent = objElement.parentNode;
	var objScope = ["article", "aside", "nav", "section"];
	var strCheck;

	do {
		strCheck = objParent.tagName.toLowerCase();

		if (strCheck === "body") {
			return true;
		}
		else if (objScope.indexOf(strCheck) >= 0) {
			return false;
		}
	} while (objParent = objParent.parentNode);

	return false;
}

function isHeading(objElement) {
	var arNativeHeading = ["h1", "h2", "h3", "h4", "h5", "h6"];
	if (arNativeHeading.indexOf(objElement.tagName.toLowerCase()) >= 0) {
		return true;
	}
	if (objElement.getAttribute("role") === "heading") {
		return true;
	}
	return false;
}

function checkValidProperties(objElement, strRole, objValidWAIAria) {
	var arGlobal = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"];
	var arHiddenExceptions = ["base", "col", "colgroup", "head", "html", "link", "map", "meta", "noscript", "param", "script", "slot", "source", "style", "template", "title", "track"];
	var arValidType = ["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
	var arListExceptions = ["email", "search", "tel", "text", "url"];
	var arCaseSensitive = ["aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-current", "aria-disabled", "aria-dropeffect", "aria-expanded", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-selected", "aria-sort"];
	var arOptionalValue = ["aria-keyshortcuts", "aria-label", "aria-roledescription", "aria-placeholder", "aria-valuetext"];
	var arDeprecatedAttributes = ["aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-grabbed", "aria-haspopup", "aria-invalid"]
	var arDeprecatedValues = ["spelling", "grammar", "false"];
	var strAttributeValue;
	var arValid=[];
	var arState=[];
	var arAttributes = objElement.attributes;
	var strAttribute;
	var strNameElement;
	var strConditionalAttribute;
	var strTagName = objElement.tagName.toLowerCase();
	var strElement;
	var strType;
	var strTokens;
	var strException;
	var bException;
	var bGlobal = false;
	var bFound = false;
	var iInteger;
	var i;

	if (strTagName === "input") {
		if (objElement.hasAttribute("type")) {
			strType = objElement.getAttribute("type").toLowerCase();
		}
		if (objElement.hasAttribute("list") && objElement.hasAttribute("aria-haspopup")) {
			if (!strType) {
				logResult("Warning: ", strTagName, " with a missing type attribute has aria-haspopup along with a native list attribute", "", objElement, ".", "invalidproperty");
				return false;
			}
			else if ((arValidType.indexOf(strType) === -1) || (arListExceptions.indexOf(strType) >= 0)) {
				logResult("Warning: ", strTagName + " type=" + strType, " has aria-haspopup along with a native list attribute", "", objElement, ".", "invalidproperty");
				return false;
			}
		}
	}

	// If a role has not been specified, see if the element has a native role
	if (!strRole) {
		// Check for aria-checked on native checkbox or radio buttons
		if (strTagName === "input" && objElement.hasAttribute("aria-checked")) {
			if (strType === "checkbox") {
				if ( objElement.getAttribute("aria-checked") === "mixed" ) {
					logResult("Error: ", strTagName, " aria-checked=mixed is used on a native checkbox. Use the element's indeterminate IDL attribute instead", "", objElement, ".", "invalidproperty");
				}
				else {
					logResult("Error: ", strTagName, " aria-checked is used on a native checkbox. Use the element's native checked semantics instead", "", objElement, ".", "invalidproperty");	
				}
				return false;
			}
			else if (strType === "radio") {
				logResult("Error: ", strTagName, " aria-checked is used on a native radio button. Use the element's native checked semantics instead", "", objElement, ".", "invalidproperty");
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
			// Check for aria-label and aria-label restrictions
			if (strAttribute === "aria-label" || strAttribute === "aria-labelledby") {
				// Use conditional statements where appropriate
				if (strElement === "header" || strElement === "footer") {
					if (!checkScope(objElement)) {
						logResult("Element ", strTagName, " is prohibited from being named by authors unless scoped to body ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
						return false;
					}
				}
				else if (strElement === "anohref" || strElement === "areanohref") {
					logResult("Element ", strTagName, " without an href is prohibited from being named by authors ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
				else {
					if (strElement) {
						strNameElement = strElement;
					}
					else {
						strNameElement = objElement.tagName.toLowerCase();
					}
					if (objRoleRules[strRole]) {
						if (objRoleRules[strRole].nameable === "no") {
							logResult("Element ", strTagName, " is prohibited from being named by authors ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
							return false;
						}
					}
					else if (objElementRules[strNameElement]) {
						if (objElementRules[strNameElement].nameable === "no") {
							logResult("Element ", strTagName, " is prohibited from being named by authors ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
							return false;
						}
					}
					else {
						logResult("Custom element ", strTagName, " is prohibited from being named by authors ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
						return false;
					}
				}
			}
			if (arOptionalValue.indexOf(strAttribute) < 0 && arAttributes[i].value === "") {
				strConditionalAttribute = objElement.getAttribute("aria-expanded");
				if (strConditionalAttribute !== "false") {
					logResult("Element ", strTagName, " has an aria-* attribute without a value ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
			}
			bGlobal = arGlobal.indexOf(strAttribute);
			// Check for deprecated attributes
			if (strRole && bGlobal && objRoleRules[strRole].deprecatedAttributes) {
				if (objRoleRules[strRole].deprecatedAttributes.indexOf(strAttribute) >= 0) {
					strAttributeValue = objElement.getAttribute(strAttribute);
					// Exception for aria-invalid
					if (strAttribute === "aria-invalid" && strAttributeValue && arDeprecatedValues.indexOf(strAttributeValue) >= 0) {
						logResult("Warning ", strTagName, " has a deprecated attribute for ", strRole, objElement, " (" + strAttribute + "). Although deprecated, the \"" + strAttributeValue + "\" value may be used until a replacement attribute is created to convey this information.", "deprecatedattribute");
					}
					else {
						logResult("Warning ", strTagName, " has a deprecated attribute for ", strRole, objElement, " (" + strAttribute + ").", "deprecatedattribute");
					}
					objValidWAIAria.deprecatedattribute++;
				}
			}
			else if (bGlobal && arDeprecatedAttributes.indexOf(strAttribute) >= 0) {
				strAttributeValue = objElement.getAttribute(strAttribute);
				// Exception for aria-invalid
				if (strAttribute === "aria-invalid" && strAttributeValue && arDeprecatedValues.indexOf(strAttributeValue) >= 0) {
					logResult("Warning ", strTagName, " has a deprecated attribute ", "", objElement, "(" + strAttribute + "). Although deprecated, the \"" + strAttributeValue + "\" value may be used until a replacement attribute is created to convey this information.", "deprecatedattribute");
				}
				else {
					if (strAttribute === "aria-grabbed" || strAttribute === "aria-dropeffect") {
						logResult("Warning ", strTagName, " has a deprecated attribute ", "", objElement, "(" + strAttribute + ").", "deprecatedattribute");
					}
					else {
						logResult("Warning ", strTagName, " has a deprecated attribute in this context ", "", objElement, "(" + strAttribute + ").", "deprecatedattribute");
					}
				}
				objValidWAIAria.deprecatedattribute++;
			}
			if (strTagName === 'datalist' && (bGlobal || ["aria-activedescendant", "aria-expanded", "aria-multiselectable", "aria-required", "aria-orientation"].indexOf(strAttribute))) {
				logResult("Warning ", strTagName, " has an attribute that serves no benefit ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
				return false;
			}
			if (strTagName === "input" && objElement.hasAttribute("type")) {
				if (strType === "hidden") {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
				if ((strType === "number" || strType === "range") && objElement.hasAttribute("aria-valuemin")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
				if ((strType === "number" || strType === "range") && objElement.hasAttribute("aria-valuemax")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
			}
			if (strTagName === "br" || strTagName === "wbr") {
				if (strAttribute !== "aria-hidden") {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
			}
			if (strTagName === "progress") {
				if (objElement.hasAttribute("aria-valuemax")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(aria-valuemax).", "invalidproperty");
				}
				if (objElement.hasAttribute("aria-valuemin")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(aria-valuemin).", "invalidproperty");
				}
			}
			if (strAttribute === "aria-hidden") {
				if (arHiddenExceptions.indexOf(strTagName) >= 0 || objElement.hasAttribute("hidden")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
			}
			if (strAttribute === "aria-required" && objElement.hasAttribute("required")) {
				logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
				return false;
			}
			if (objElement.hasAttribute("contenteditable") && objElement.getAttribute("aria-readonly")) {
				logResult("Element ", strTagName, " has a contenteditable attribute along with aria-readonly", "", objElement, ".", "invalidproperty");
				return false;
			}
			if (!strRole && bGlobal === -1) {
				// No role without a global attribute
				if (!(strAttribute === "aria-required" && strTagName === "input")) {
					logResult("Element ", strTagName, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
					return false;
				}
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
					if (!(strAttribute === "aria-required" && strTagName === "input")) {
						logResult("Role ", strRole, " has invalid attribute ", "", objElement, "(" + strAttribute + ").", "invalidproperty");
						return false;
					}
				}
			}
			// Check valid tokens for attribute values
			if (objTokens[strAttribute]) { 
				if (objTokens[strAttribute].tokenlist.indexOf(arAttributes[i].value.toLowerCase()) === -1) {
					// Exception for aria-relevant
					bException = false;
					if (strAttribute === "aria-relevant" && arAttributes[i].value.indexOf(" ") >= 0) {
						strException = arAttributes[i].value.replace(/\s/g, "");
						if (strException === "additionstext" || strException === "textadditions") {
							bException = true;
						}
					}
					if (!bException) {
						strTokens = objTokens[strAttribute].tokenlist.toString().replaceAll(",", ", ");
						logResult("Invalid attribute value for ", strAttribute, ". The value must be one of " + strTokens, "", objElement, ".", "invalidproperty");
						return false;
					}
				}
			}
			if (objElement.getAttribute(strAttribute) !== objElement.getAttribute(strAttribute).toLowerCase()) {
				if (arCaseSensitive.indexOf(strAttribute) >=0) {
					logResult("Warning: Attribute value for ", strAttribute, " not all browsers / assistive technology combinations expose attribute values that are not written in lowercase", "", objElement, ".", "invalidproperty");
					return false;
				} 
			}

			// Check integer values for attributes
			if (objIntegers[strAttribute]) {
				iInteger = parseInt(arAttributes[i].value);
				if (isNaN(iInteger)) {
					logResult("Invalid attribute value for ", strAttribute, ". The value must be an integer", "", objElement, ".", "invalidproperty");
					return false;
				}
				// 1 = must be 0 or higher; 
				// 2 = must be 1 or higher; 
				// 3 = must be 1 or higher, or -1; 
				// 4 = between 1 and 6 on a heading element
				switch (objIntegers[strAttribute].type) {
					case 1: if (iInteger < 0 ) {
								logResult("Invalid attribute value for ", strAttribute, ". The value must be 0 or higher", "", objElement, ".", "invalidproperty");
								return false;
							}
							break;
					case 2: if (iInteger < 1 ) {
								logResult("Invalid attribute value for ", strAttribute, ". The value must be 1 or higher", "", objElement, ".", "invalidproperty");
								return false;
							}
							break;
					case 3: if (iInteger < -1 || iInteger === 0) {
								logResult("Invalid attribute value for ", strAttribute, ". The value must be 1 or higher, or -1", "", objElement, ".", "invalidproperty");
								return false;
							}
							break;
					case 4: if (isHeading(objElement)) { // Must be between 1 and 6 on a heading element
								if (iInteger < 1 || iInteger > 6) {
									logResult("Invalid attribute value for ", strAttribute, ". The value must be between 1 and 6 on a heading", "", objElement, ".", "invalidproperty");
									return false;
								}
							}
							else if (iInteger < 1 ) {
								logResult("Invalid attribute value for ", strAttribute, ". The value must be 1 or higher", "", objElement, ".", "invalidproperty");
								return false;
							}
				}
			}
			// Check the aria- attribute is a valid attribute
			if (arValidARIAAttributes.indexOf(strAttribute) === -1) {
				logResult("Attribute ", strAttribute, " is not a valid attribute", "", objElement, ".", "invalidproperty");
				return false;
			}
		}
	}

	return true;
}

function checkValidReferences(objElement) {
	var arRefattributes = ["aria-activedescendant", "aria-controls", "aria-describedby", "aria-details", "aria-errormessage", "aria-flowto", "aria-labelledby", "aria-owns"];
	var arAttributes = objElement.attributes;
	var strAttribute;
	var strConditionalAttribute;
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
				strConditionalAttribute = objElement.getAttribute("aria-expanded");
				if (strConditionalAttribute !== "false") {
					logResult("Attribute ", strAttribute, " has an empty string.", "", objElement, "", "invalidref");
					bValid = false;
				}
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
		invalidref: 0,
		dpub: 0,
		deprecated: 0,
		deprecatedattribute: 0
	};
	var objElements = document.getElementsByTagName("*");
	var objBTT = document.createElement("a");
	var bValid;
	var bNative;
	var bLogged;
	var bCaseChange;
	var bException;
	var strElement;
	var strRole;
	var strParentElement;
	var strParentRole;
	var strCheckElement;
	var arAllowed = [];
	var arListExceptions = ["ul", "ol", "menu"];
	var iRoleIndex;
	var i;

	createResultsWindow(objValidWAIAria);

 	// Iterate through all elements in the DOM
	for (i=0; i < objElements.length; i++) {
		bValid = false;
		bNative = false;
		bLogged = false;
		bCaseChange = false;
		// If a role has been set, check it is valid for the element
		if (objElements[i].getAttribute("role") && objElements[i].getAttribute("id") !== "__ARIA_validator_resultsWindow__") {
			strElement = objElements[i].tagName.toLowerCase();
			// If the element is an input without a type, set the default type of text
			if (strElement === 'input' && !objElements[i].getAttribute("type")) {
				objElements[i].setAttribute("type", "text");
			}
			// Check if the element is conditional (e.g., input with a type that affects valid roles)
			strCheckElement = conditionalElement(objElements[i], strElement);
			strRole = objElements[i].getAttribute("role");
			if (strRole !== strRole.toLowerCase()) {
				strRole = strRole.toLowerCase();
				bCaseChange = true;
			}
			iRoleIndex = getIndex(strRole);
			if (objElementRules[strCheckElement]) {
				arAllowed = objElementRules[strCheckElement].allowedRoles;
				if (!objRoleRules.hasOwnProperty(strRole)) {
					// The specified role doesn't exist
					objValidWAIAria.nonexistent++;
					logResult("Element ", strElement, " has non-existent role ", strRole, objElements[i], ".", "nonexistent");
					bLogged = true;
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
					if (bCaseChange) {
							logResult("Warning: ", strElement, " not all browsers / assistive technology combinations expose roles that are not written in lowercase", "", objElements[i], ".", "invalidproperty");
					}
					bValid = true;
				}
				bNative = strRole === objElementRules[strCheckElement].nativeRole;
				if (strRole === "rowheader" && strElement === "th") {
					bNative = true;
				}
				if (arAllowed === "all" && !bLogged) {
					// Any role is valid for the element, unless there are conditional ancestors
					switch (strElement) {
						case "td" : if (!checkAncestor(objElements[i], ["table", "grid", "treegrid"])) {
										bValid = true;
									}
									break;
						case "th" : if (!checkAncestor(objElements[i], ["table", "grid", "treegrid"])) {
										bValid = true;
									}
									break;
						case "tr" : if (!checkAncestor(objElements[i], ["table", "grid", "treegrid"])) {
										bValid = true;
									}
									break;
						case "div" : if (objElements[i].parentNode.tagName.toLowerCase() === "dl") {
										if (strRole === "presentation" || strRole === "none") {
											bValid = true;
										}
									}
									else {
										bValid = true;
									}
									break; 
						default: bValid = true;
					}
					if (!bValid && !bNative) {
						// The role is invalid for the element
						objValidWAIAria.invalid++;
						logResult("Element ", strElement, " has invalid role ", strRole, objElements[i], ".", "invalid");
						bLogged = true;
					}
					else {
						objValidWAIAria.valid++;
						if (iRoleIndex === -1) {
							arValidRoles.push([strRole, 1]);
						}
						else {
							arValidRoles[iRoleIndex][1]++;
						}
						if (bCaseChange) {
							logResult("Warning: ", strElement, " not all browsers / assistive technology combinations expose roles that are not written in lowercase", "", objElements[i], ".", "invalidproperty");
						}
					}
				}
				if (!bValid && !bLogged && !bNative) {
					bException = false;
					// Exceptions for lists
					if (strElement === "li") {
						strParentElement = objElements[i].parentNode.tagName.toLowerCase();
						strParentRole = objElements[i].parentNode.getAttribute("role");
						if (arListExceptions.indexOf(strParentElement) === -1) {
							// Not a child of <ul>, <ol>, or <menu>
							bException = true;
							bValid = true;
						}
						else if (strParentRole) {
							if (strParentRole.toLowerCase() === "none" || strParentRole.toLowerCase() === "presentation") {
								bException = true;
								bValid = true;
							} 
						}
					}
					if (!bException) {
						// The role is invalid for the element
						objValidWAIAria.invalid++;
						logResult("Element ", strElement, " has invalid role ", strRole, objElements[i], ".", "invalid");
					}
				}
				if (bNative) {
					bValid = true;
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
				if (!checkValidProperties(objElements[i], strRole, objValidWAIAria)) {
					objValidWAIAria.invalidproperty++;
				}
				if (bCaseChange) {
					objValidWAIAria.invalidproperty++;
				}
				if (!checkValidDescendant(objElements[i], strRole)) {
					objValidWAIAria.invaliddesc++;
				}
				if (strRole.substring(0, 4) === "doc-") {
					objValidWAIAria.dpub++;
				}
				if (objRoleRules[strRole].deprecated) {
					objValidWAIAria.deprecated++;
					logResult("Warning: ", strElement, " has deprecated role ", strRole, objElements[i], ".", "deprecated");
				}
			}
		}
		else {
			// Element has no role, so check for global aria values
			if (!checkValidProperties(objElements[i], null, objValidWAIAria)) {
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
