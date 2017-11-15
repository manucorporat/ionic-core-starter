/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-app_ios","\nion-app.hydrated{visibility:inherit}","ion-content_ios","\nion-content.hydrated{visibility:inherit}","ion-title_ios","\nion-title.hydrated{visibility:inherit}","ion-toolbar_ios","\nion-toolbar.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"ewy5knog",

/**** component modules ****/
,


/***************** ion-app *****************/
[
/** ion-app: tag **/
"ion-app",

/** ion-app: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "element", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-app: host **/
{"theme":"app"}

],

/***************** ion-content *****************/
[
/** ion-content: tag **/
"ion-content",

/** ion-content: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableJsScroll", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "fullscreen", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "ionScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "ionScrollEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "ionScrollStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "scrollToBottom", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToTop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
]

],

/***************** ion-footer *****************/
[
/** ion-footer: tag **/
"ion-footer",

/** ion-footer: members **/
0 /* no members */,

/** ion-footer: host **/
{"theme":"footer"}

],

/***************** ion-header *****************/
[
/** ion-header: tag **/
"ion-header",

/** ion-header: members **/
0 /* no members */,

/** ion-header: host **/
{"theme":"header"}

],

/***************** ion-navbar *****************/
[
/** ion-navbar: tag **/
"ion-navbar",

/** ion-navbar: members **/
[
  [ "backButtonIcon", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "backButtonText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "hidden", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "hideBackButton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-navbar: host **/
{"theme":"toolbar"}

],

/***************** ion-page *****************/
[
/** ion-page: tag **/
"ion-page"

],

/***************** ion-scroll *****************/
[
/** ion-scroll: tag **/
"ion-scroll",

/** ion-scroll: members **/
[
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "jsScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "onionScroll", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onionScrollEnd", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "onionScrollStart", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "scrollToBottom", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToPoint", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "scrollToTop", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-scroll: host **/
0 /* no host data */,

/** ion-scroll: events **/
[
  [
    /*****  ion-scroll ionScroll ***** /
    /* event name ***/ "ionScroll"
  ],
  [
    /*****  ion-scroll ionScrollEnd ***** /
    /* event name ***/ "ionScrollEnd"
  ],
  [
    /*****  ion-scroll ionScrollStart ***** /
    /* event name ***/ "ionScrollStart"
  ]
],

/** ion-scroll: propWillChanges **/
0 /* no prop will change methods */,

/** ion-scroll: propDidChanges **/
[
  [
    /*****  ion-scroll prop did change [0] ***** /
    /* prop name **/ "jsScroll",
    /* call fn *****/ "jsScrollChanged"
  ]
]

],

/***************** ion-title *****************/
[
/** ion-title: tag **/
"ion-title",

/** ion-title: members **/
0 /* no members */,

/** ion-title: host **/
{"theme":"title"}

],

/***************** ion-toolbar *****************/
[
/** ion-toolbar: tag **/
"ion-toolbar",

/** ion-toolbar: members **/
[
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-toolbar: host **/
{"theme":"toolbar"}

]
);