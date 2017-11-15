/*! Built with http://stenciljs.com */

App.loadStyles("ion-tabs_md","\nion-tabs.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"ib54pg93",

/**** component modules ****/
,


/***************** ion-tab *****************/
[
/** ion-tab: tag **/
"ion-tab",

/** ion-tab: members **/
[
  [ "_setActive", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "active", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "badge", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "badgeStyle", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "btnId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "getActive", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getNav", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "goToRoot", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "icon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "init", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "resize", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "root", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "rootParams", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "selected", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "show", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabsHideOnSubPages", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "urlPath", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-tab: host **/
0 /* no host data */,

/** ion-tab: events **/
[
  [
    /*****  ion-tab ionSelect ***** /
    /* event name ***/ "ionSelect"
  ],
  [
    /*****  ion-tab ionTabDidLoad ***** /
    /* event name ***/ "ionTabDidLoad"
  ],
  [
    /*****  ion-tab ionTabDidUnload ***** /
    /* event name ***/ "ionTabDidUnload"
  ]
],

/** ion-tab: propWillChanges **/
0 /* no prop will change methods */,

/** ion-tab: propDidChanges **/
[
  [
    /*****  ion-tab prop did change [0] ***** /
    /* prop name **/ "selected",
    /* call fn *****/ "selectedChanged"
  ]
]

],

/***************** ion-tab-button *****************/
[
/** ion-tab-button: tag **/
"ion-tab-button",

/** ion-tab-button: members **/
[
  [ "selected", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-tab-button: host **/
0 /* no host data */,

/** ion-tab-button: events **/
[
  [
    /*****  ion-tab-button ionTabbarClick ***** /
    /* event name ***/ "ionTabbarClick"
  ]
]

],

/***************** ion-tab-highlight *****************/
[
/** ion-tab-highlight: tag **/
"ion-tab-highlight",

/** ion-tab-highlight: members **/
[
  [ "animated", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selectedTab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "transform", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-tab-highlight: host **/
0 /* no host data */,

/** ion-tab-highlight: events **/
0 /* no events */,

/** ion-tab-highlight: propWillChanges **/
0 /* no prop will change methods */,

/** ion-tab-highlight: propDidChanges **/
[
  [
    /*****  ion-tab-highlight prop did change [0] ***** /
    /* prop name **/ "selectedTab",
    /* call fn *****/ "selectedTabChanged"
  ]
]

],

/***************** ion-tabbar *****************/
[
/** ion-tabbar: tag **/
"ion-tabbar",

/** ion-tabbar: members **/
[
  [ "hidden", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "highlight", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "layout", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placement", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "selectedTab", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "tabs", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-tabbar: host **/
{"theme":"tabbar"}

],

/***************** ion-tabs *****************/
[
/** ion-tabs: tag **/
"ion-tabs",

/** ion-tabs: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getByIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getIndex", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getSelected", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getTabs", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "previousTab", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "resize", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "select", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "selectedTab", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "tabbarHidden", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabbarHighlight", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "tabbarLayout", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "tabbarPlacement", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "tabs", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-tabs: host **/
0 /* no host data */,

/** ion-tabs: events **/
[
  [
    /*****  ion-tabs ionChange ***** /
    /* event name ***/ "ionChange"
  ]
]

]
);