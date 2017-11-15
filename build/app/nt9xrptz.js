/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-radio_wp","\nion-radio.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"nt9xrptz",

/**** component modules ****/
,


/***************** ion-radio *****************/
[
/** ion-radio: tag **/
"ion-radio",

/** ion-radio: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "radioId", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-radio: host **/
{"theme":"radio"},

/** ion-radio: events **/
[
  [
    /*****  ion-radio ionRadioCheckedDidChange ***** /
    /* event name ***/ "ionRadioCheckedDidChange"
  ],
  [
    /*****  ion-radio ionRadioDidLoad ***** /
    /* event name ***/ "ionRadioDidLoad"
  ],
  [
    /*****  ion-radio ionRadioDidToggle ***** /
    /* event name ***/ "ionRadioDidToggle"
  ],
  [
    /*****  ion-radio ionRadioDidUnload ***** /
    /* event name ***/ "ionRadioDidUnload"
  ],
  [
    /*****  ion-radio ionSelect ***** /
    /* event name ***/ "ionSelect"
  ],
  [
    /*****  ion-radio ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-radio: propWillChanges **/
0 /* no prop will change methods */,

/** ion-radio: propDidChanges **/
[
  [
    /*****  ion-radio prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-radio prop did change [1] ***** /
    /* prop name **/ "color",
    /* call fn *****/ "colorChanged"
  ],
  [
    /*****  ion-radio prop did change [2] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ]
]

],

/***************** ion-radio-group *****************/
[
/** ion-radio-group: tag **/
"ion-radio-group",

/** ion-radio-group: members **/
[
  [ "activeId", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "allowEmptySelection", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "headerId", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-radio-group: host **/
0 /* no host data */,

/** ion-radio-group: events **/
[
  [
    /*****  ion-radio-group ionChange ***** /
    /* event name ***/ "ionChange"
  ]
],

/** ion-radio-group: propWillChanges **/
0 /* no prop will change methods */,

/** ion-radio-group: propDidChanges **/
[
  [
    /*****  ion-radio-group prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);