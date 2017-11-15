/*! Built with http://stenciljs.com */

App.loadStyles("ion-select_ios","\nion-select.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"cyycztdh",

/**** component modules ****/
,


/***************** ion-select *****************/
[
/** ion-select: tag **/
"ion-select",

/** ion-select: members **/
[
  [ "actionSheetCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-action-sheet-controller" ],
  [ "alertCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-alert-controller" ],
  [ "cancelText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "interface", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "multiple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "okText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "popoverCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-popover-controller" ],
  [ "selectedText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "selectOptions", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "text", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-select: host **/
{"theme":"select"},

/** ion-select: events **/
[
  [
    /*****  ion-select ionCancel ***** /
    /* event name ***/ "ionCancel"
  ]
],

/** ion-select: propWillChanges **/
0 /* no prop will change methods */,

/** ion-select: propDidChanges **/
[
  [
    /*****  ion-select prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-select-option *****************/
[
/** ion-select-option: tag **/
"ion-select-option",

/** ion-select-option: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getText", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selected", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-select-option: host **/
{"theme":"select-option"},

/** ion-select-option: events **/
[
  [
    /*****  ion-select-option ionSelect ***** /
    /* event name ***/ "ionSelect"
  ]
]

],

/***************** ion-select-popover *****************/
[
/** ion-select-popover: tag **/
"ion-select-popover",

/** ion-select-popover: members **/
[
  [ "options", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-select-popover: host **/
{"theme":"select-popover"},

/** ion-select-popover: events **/
[
  [
    /*****  ion-select-popover ionDismiss ***** /
    /* event name ***/ "ionDismiss"
  ]
],

/** ion-select-popover: propWillChanges **/
0 /* no prop will change methods */,

/** ion-select-popover: propDidChanges **/
[
  [
    /*****  ion-select-popover prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);