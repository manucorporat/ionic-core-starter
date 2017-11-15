/*! Built with http://stenciljs.com */

App.loadStyles("ion-datetime_ios","\nion-datetime.hydrated{visibility:inherit}","ion-picker_ios","\nion-picker.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"epdrmsxn",

/**** component modules ****/
,


/***************** ion-datetime *****************/
[
/** ion-datetime: tag **/
"ion-datetime",

/** ion-datetime: members **/
[
  [ "cancelText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dayNames", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "dayShortNames", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "dayValues", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "displayFormat", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "doneText", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "hourValues", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "max", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "min", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "minuteValues", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "monthNames", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "monthShortNames", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "monthValues", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "pickerCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-picker-controller" ],
  [ "pickerFormat", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "pickerOptions", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "text", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "yearValues", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ]
],

/** ion-datetime: host **/
{"theme":"datetime"},

/** ion-datetime: events **/
[
  [
    /*****  ion-datetime ionCancel ***** /
    /* event name ***/ "ionCancel"
  ]
],

/** ion-datetime: propWillChanges **/
0 /* no prop will change methods */,

/** ion-datetime: propDidChanges **/
[
  [
    /*****  ion-datetime prop did change [0] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-picker *****************/
[
/** ion-picker: tag **/
"ion-picker",

/** ion-picker: members **/
[
  [ "addButton", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "addColumn", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "animationCtrl", /** prop connect **/ 4, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "ion-animation-controller" ],
  [ "buttons", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "columns", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "config", /** prop context **/ 3, /** do not observe attribute **/ 0, /** type any **/ 1, /** context ***/ "config" ],
  [ "content", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "cssClass", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "dismissOnPageChange", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "duration", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "enableBackdropDismiss", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "enterAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "exitAnimation", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "getColumn", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "getColumns", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "pickerId", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "showBackdrop", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "showSpinner", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "spinner", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-picker: host **/
{"theme":"picker"},

/** ion-picker: events **/
[
  [
    /*****  ion-picker ionPickerDidDismiss ***** /
    /* event name ***/ "ionPickerDidDismiss"
  ],
  [
    /*****  ion-picker ionPickerDidLoad ***** /
    /* event name ***/ "ionPickerDidLoad"
  ],
  [
    /*****  ion-picker ionPickerDidPresent ***** /
    /* event name ***/ "ionPickerDidPresent"
  ],
  [
    /*****  ion-picker ionPickerDidUnload ***** /
    /* event name ***/ "ionPickerDidUnload"
  ],
  [
    /*****  ion-picker ionPickerWillDismiss ***** /
    /* event name ***/ "ionPickerWillDismiss"
  ],
  [
    /*****  ion-picker ionPickerWillPresent ***** /
    /* event name ***/ "ionPickerWillPresent"
  ]
]

],

/***************** ion-picker-column *****************/
[
/** ion-picker-column: tag **/
"ion-picker-column",

/** ion-picker-column: members **/
[
  [ "col", /** prop **/ 1, /** observe attribute **/ 1, /** type any **/ 1 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** ion-picker-column: host **/
{"theme":"picker-col"}

],

/***************** ion-picker-controller *****************/
[
/** ion-picker-controller: tag **/
"ion-picker-controller",

/** ion-picker-controller: members **/
[
  [ "create", /** method **/ 6, /** do not observe attribute **/ 0, /** type any **/ 1 ]
]

]
);