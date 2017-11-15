/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-toggle_wp","\nion-toggle.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"wb2uq6ha",

/**** component modules ****/
,


/***************** ion-toggle *****************/
[
/** ion-toggle: tag **/
"ion-toggle",

/** ion-toggle: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "toggle", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-toggle: host **/
{"theme":"toggle"},

/** ion-toggle: events **/
[
  [
    /*****  ion-toggle ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-toggle ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-toggle ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-toggle ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-toggle: propWillChanges **/
0 /* no prop will change methods */,

/** ion-toggle: propDidChanges **/
[
  [
    /*****  ion-toggle prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-toggle prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

]
);