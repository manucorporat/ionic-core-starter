/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-modal_md","\nion-modal.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"g8tmhttp",

/**** component modules ****/
,


/***************** ion-modal *****************/
[
/** ion-modal: tag **/
"ion-modal",

/** ion-modal: members **/
[
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "color", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "component", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "componentProps", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "exitAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "modalId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "mode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "showBackdrop", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ]
],

/** ion-modal: host **/
{"theme":"modal"},

/** ion-modal: events **/
[
  [
    /*****  ion-modal ionModalDidDismiss ***** /
    /* event name ***/ "ionModalDidDismiss"
  ],
  [
    /*****  ion-modal ionModalDidLoad ***** /
    /* event name ***/ "ionModalDidLoad"
  ],
  [
    /*****  ion-modal ionModalDidPresent ***** /
    /* event name ***/ "ionModalDidPresent"
  ],
  [
    /*****  ion-modal ionModalDidUnload ***** /
    /* event name ***/ "ionModalDidUnload"
  ],
  [
    /*****  ion-modal ionModalWillDismiss ***** /
    /* event name ***/ "ionModalWillDismiss"
  ],
  [
    /*****  ion-modal ionModalWillPresent ***** /
    /* event name ***/ "ionModalWillPresent"
  ]
]

],

/***************** ion-modal-controller *****************/
[
/** ion-modal-controller: tag **/
"ion-modal-controller",

/** ion-modal-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
]

]
);