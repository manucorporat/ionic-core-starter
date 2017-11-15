/*! Built with http://stenciljs.com (es5) */

App.loadComponents(

/**** module id (dev mode) ****/
"j32hezbk",

/**** component modules ****/
,


/***************** ion-gesture *****************/
[
/** ion-gesture: tag **/
"ion-gesture",

/** ion-gesture: members **/
[
  [ "attachTo", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "autoBlockAll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "block", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "canStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "direction", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "disableScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "gestureName", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "gesturePriority", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "maxAngle", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "notCaptured", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onMove", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onPress", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onWillStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "threshold", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-gesture: host **/
0 /* no host data */,

/** ion-gesture: events **/
[
  [
    /*****  ion-gesture ionGestureEnd ***** /
    /* event name ***/ "ionGestureEnd"
  ],
  [
    /*****  ion-gesture ionGestureMove ***** /
    /* event name ***/ "ionGestureMove"
  ],
  [
    /*****  ion-gesture ionGestureNotCaptured ***** /
    /* event name ***/ "ionGestureNotCaptured"
  ],
  [
    /*****  ion-gesture ionGestureStart ***** /
    /* event name ***/ "ionGestureStart"
  ],
  [
    /*****  ion-gesture ionPress ***** /
    /* event name ***/ "ionPress"
  ]
],

/** ion-gesture: propWillChanges **/
0 /* no prop will change methods */,

/** ion-gesture: propDidChanges **/
[
  [
    /*****  ion-gesture prop did change [0] ***** /
    /* prop name **/ "block",
    /* call fn *****/ "blockChanged"
  ],
  [
    /*****  ion-gesture prop did change [1] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ]
]

]
);