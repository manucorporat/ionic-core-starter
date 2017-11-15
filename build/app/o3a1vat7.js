/*! Built with http://stenciljs.com */

App.loadStyles("ion-segment_md","\nion-segment.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"o3a1vat7",

/**** component modules ****/
,


/***************** ion-segment *****************/
[
/** ion-segment: tag **/
"ion-segment",

/** ion-segment: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-segment: host **/
{"theme":"segment"},

/** ion-segment: events **/
[
  [
    /*****  ion-segment ionChange ***** /
    /* event name ***/ "ionChange"
  ]
],

/** ion-segment: propWillChanges **/
0 /* no prop will change methods */,

/** ion-segment: propDidChanges **/
[
  [
    /*****  ion-segment prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-segment-button *****************/
[
/** ion-segment-button: tag **/
"ion-segment-button",

/** ion-segment-button: members **/
[
  [ "activated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "checked", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-segment-button: host **/
0 /* no host data */,

/** ion-segment-button: events **/
[
  [
    /*****  ion-segment-button ionClick ***** /
    /* event name ***/ "ionClick"
  ]
]

]
);