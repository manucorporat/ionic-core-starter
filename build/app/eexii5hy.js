/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-range_wp","\nion-range.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"eexii5hy",

/**** component modules ****/
,


/***************** ion-range *****************/
[
/** ion-range: tag **/
"ion-range",

/** ion-range: members **/
[
  [ "activeB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "barL", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "barR", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "debounce", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "dualKnobs", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "pin", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "pressed", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pressedA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pressedB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratio", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "ratioUpper", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "rect", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "snaps", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "step", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "ticks", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "valA", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "valB", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-range: host **/
{"theme":"range"},

/** ion-range: events **/
[
  [
    /*****  ion-range ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-range ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-range ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-range ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-range: propWillChanges **/
0 /* no prop will change methods */,

/** ion-range: propDidChanges **/
[
  [
    /*****  ion-range prop did change [0] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-range prop did change [1] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-range-knob *****************/
[
/** ion-range-knob: tag **/
"ion-range-knob",

/** ion-range-knob: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "knob", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "labelId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "pin", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "pressed", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ratio", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "val", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ]
],

/** ion-range-knob: host **/
0 /* no host data */,

/** ion-range-knob: events **/
[
  [
    /*****  ion-range-knob ionDecrease ***** /
    /* event name ***/ "ionDecrease"
  ],
  [
    /*****  ion-range-knob ionIncrease ***** /
    /* event name ***/ "ionIncrease"
  ]
]

]
);