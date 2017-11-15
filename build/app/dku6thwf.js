/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-split-pane_ios","\nion-split-pane.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"dku6thwf",

/**** component modules ****/
,


/***************** ion-split-pane *****************/
[
/** ion-split-pane: tag **/
"ion-split-pane",

/** ion-split-pane: members **/
[
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "isVisible", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "visible", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "when", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-split-pane: host **/
{"theme":"split-pane"},

/** ion-split-pane: events **/
[
  [
    /*****  ion-split-pane ionChange ***** /
    /* event name ***/ "ionChange"
  ],
  [
    /*****  ion-split-pane ionSplitPaneDidChange ***** /
    /* event name ***/ "ionSplitPaneDidChange"
  ]
],

/** ion-split-pane: propWillChanges **/
0 /* no prop will change methods */,

/** ion-split-pane: propDidChanges **/
[
  [
    /*****  ion-split-pane prop did change [0] ***** /
    /* prop name **/ "when",
    /* call fn *****/ "whenChanged"
  ]
]

]
);