/*! Built with http://stenciljs.com */

App.loadStyles("ion-toast_wp","\nion-toast.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"5ubfnaxx",

/**** component modules ****/
,


/***************** ion-toast *****************/
[
/** ion-toast: tag **/
"ion-toast",

/** ion-toast: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "closeButtonText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismissOnPageChange", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "duration", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "exitAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "message", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "position", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "showCloseButton", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "toastId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-toast: host **/
{"theme":"toast"},

/** ion-toast: events **/
[
  [
    /*****  ion-toast ionToastDidDismiss ***** /
    /* event name ***/ "ionToastDidDismiss"
  ],
  [
    /*****  ion-toast ionToastDidLoad ***** /
    /* event name ***/ "ionToastDidLoad"
  ],
  [
    /*****  ion-toast ionToastDidPresent ***** /
    /* event name ***/ "ionToastDidPresent"
  ],
  [
    /*****  ion-toast ionToastDidUnload ***** /
    /* event name ***/ "ionToastDidUnload"
  ],
  [
    /*****  ion-toast ionToastWillDismiss ***** /
    /* event name ***/ "ionToastWillDismiss"
  ],
  [
    /*****  ion-toast ionToastWillPresent ***** /
    /* event name ***/ "ionToastWillPresent"
  ]
]

],

/***************** ion-toast-controller *****************/
[
/** ion-toast-controller: tag **/
"ion-toast-controller",

/** ion-toast-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
]

]
);