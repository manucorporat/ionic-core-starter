/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-menu_wp","\nion-menu.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"vogxjcn1",

/**** component modules ****/
,


/***************** ion-menu *****************/
[
/** ion-menu: tag **/
"ion-menu",

/** ion-menu: members **/
[
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "content", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enabled", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "isOpen", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "lazyMenuCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-menu-controller" ],
  [ "maxEdgeStart", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "menuId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "open", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "persistent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "setOpen", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "side", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "swipeEnabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "toggle", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "type", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-menu: host **/
{"theme":"menu"},

/** ion-menu: events **/
[
  [
    /*****  ion-menu ionClose ***** /
    /* event name ***/ "ionClose"
  ],
  [
    /*****  ion-menu ionDrag ***** /
    /* event name ***/ "ionDrag"
  ],
  [
    /*****  ion-menu ionOpen ***** /
    /* event name ***/ "ionOpen"
  ]
],

/** ion-menu: propWillChanges **/
[
  [
    /*****  ion-menu prop will change [0] ***** /
    /* prop name **/ "type",
    /* call fn *****/ "typeChanged"
  ]
],

/** ion-menu: propDidChanges **/
[
  [
    /*****  ion-menu prop did change [0] ***** /
    /* prop name **/ "enabled",
    /* call fn *****/ "enabledChanged"
  ],
  [
    /*****  ion-menu prop did change [1] ***** /
    /* prop name **/ "side",
    /* call fn *****/ "sideChanged"
  ],
  [
    /*****  ion-menu prop did change [2] ***** /
    /* prop name **/ "swipeEnabled",
    /* call fn *****/ "swipeEnabledChanged"
  ]
]

],

/***************** ion-menu-controller *****************/
[
/** ion-menu-controller: tag **/
"ion-menu-controller",

/** ion-menu-controller: members **/
[
  [ "_register", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "_setActiveMenu", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "_unregister", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "close", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "createAnimation", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enable", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "get", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getMenus", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getOpen", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "isAnimating", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "isEnabled", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "isOpen", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "open", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "swipeEnable", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "toggle", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
]

]
);