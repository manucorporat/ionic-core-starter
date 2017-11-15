/*! Built with http://stenciljs.com */

App.loadStyles("ion-infinite-scroll","\nion-infinite-scroll.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"vfxusodc",

/**** component modules ****/
,


/***************** ion-infinite-scroll *****************/
[
/** ion-infinite-scroll: tag **/
"ion-infinite-scroll",

/** ion-infinite-scroll: members **/
[
  [ "complete", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "isLoading", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "position", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "threshold", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-infinite-scroll: host **/
0 /* no host data */,

/** ion-infinite-scroll: events **/
[
  [
    /*****  ion-infinite-scroll ionInfinite ***** /
    /* event name ***/ "ionInfinite"
  ]
],

/** ion-infinite-scroll: propWillChanges **/
0 /* no prop will change methods */,

/** ion-infinite-scroll: propDidChanges **/
[
  [
    /*****  ion-infinite-scroll prop did change [0] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ],
  [
    /*****  ion-infinite-scroll prop did change [1] ***** /
    /* prop name **/ "threshold",
    /* call fn *****/ "thresholdChanged"
  ]
]

],

/***************** ion-infinite-scroll-content *****************/
[
/** ion-infinite-scroll-content: tag **/
"ion-infinite-scroll-content",

/** ion-infinite-scroll-content: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "loadingSpinner", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "loadingText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
]

]
);