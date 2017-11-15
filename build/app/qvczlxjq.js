/*! Built with http://stenciljs.com */

App.loadStyles("ion-input_md","\nion-input.hydrated{visibility:inherit}","ion-textarea_md","\nion-textarea.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"qvczlxjq",

/**** component modules ****/
,


/***************** ion-input *****************/
[
/** ion-input: tag **/
"ion-input",

/** ion-input: members **/
[
  [ "accept", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocapitalize", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocomplete", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocorrect", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autofocus", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "checked", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearInput", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearOnEdit", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "inputmode", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "max", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "maxlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "min", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "minlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "multiple", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "pattern", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "readonly", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "required", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "results", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "size", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "spellcheck", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "step", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "type", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-input: host **/
{"theme":"input"},

/** ion-input: events **/
[
  [
    /*****  ion-input ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-input ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-input ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-input: propWillChanges **/
0 /* no prop will change methods */,

/** ion-input: propDidChanges **/
[
  [
    /*****  ion-input prop did change [0] ***** /
    /* prop name **/ "checked",
    /* call fn *****/ "checkedChanged"
  ],
  [
    /*****  ion-input prop did change [1] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-input prop did change [2] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

],

/***************** ion-textarea *****************/
[
/** ion-textarea: tag **/
"ion-textarea",

/** ion-textarea: members **/
[
  [ "autocapitalize", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autocomplete", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "autofocus", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "clearOnEdit", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "cols", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "el", /** element ref **/ 7, /** do not observe attribute **/ 0, /** type any **/ 1 ],
  [ "maxlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "minlength", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "name", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "placeholder", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "readonly", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "required", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "rows", /** prop **/ 1, /** observe attribute **/ 1, /** type number **/ 4 ],
  [ "spellcheck", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** prop mutable **/ 2, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "wrap", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** ion-textarea: host **/
{"theme":"input"},

/** ion-textarea: events **/
[
  [
    /*****  ion-textarea ionBlur ***** /
    /* event name ***/ "ionBlur"
  ],
  [
    /*****  ion-textarea ionFocus ***** /
    /* event name ***/ "ionFocus"
  ],
  [
    /*****  ion-textarea ionStyle ***** /
    /* event name ***/ "ionStyle"
  ]
],

/** ion-textarea: propWillChanges **/
0 /* no prop will change methods */,

/** ion-textarea: propDidChanges **/
[
  [
    /*****  ion-textarea prop did change [0] ***** /
    /* prop name **/ "disabled",
    /* call fn *****/ "disabledChanged"
  ],
  [
    /*****  ion-textarea prop did change [1] ***** /
    /* prop name **/ "value",
    /* call fn *****/ "valueChanged"
  ]
]

]
);