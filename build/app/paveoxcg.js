/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-checkbox_md","\nion-checkbox.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"paveoxcg",

/**** component modules ****/
,


/***************** ion-checkbox *****************/
[
/** ion-checkbox: tag **/
"ion-checkbox",

/** ion-checkbox: members **/
[
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-checkbox: host **/
{"theme":"checkbox"},

/** ion-checkbox: events **/
[
  [
    /*****  ion-checkbox ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-checkbox ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-checkbox: propWillChanges **/
0 /* no prop will change methods */,

/** ion-checkbox: propDidChanges **/
[
  [
    /*****  ion-checkbox prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-checkbox prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

]
);