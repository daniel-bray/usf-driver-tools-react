(this["webpackJsonpusf-driver-tools-react"]=this["webpackJsonpusf-driver-tools-react"]||[]).push([[0],{62:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),l=a(19),n=a.n(l),o=a(28),i=(a(62),a(7)),r=a(1);var d=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{className:"text-center",children:"Coming soon..."})})},j=a(31),b=a(27),m=a(22),h=a(17);var x=function(){return Object(r.jsxs)(j.a,{className:"navbar bg-usftheme navbar-dark",expand:"lg",children:[Object(r.jsx)(h.LinkContainer,{to:"/announcements",children:Object(r.jsx)(j.a.Brand,{children:"USF Driver Tools"})}),Object(r.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(j.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsxs)(b.a,{className:"mr-auto",children:[Object(r.jsx)(h.LinkContainer,{to:"/announcements",children:Object(r.jsx)(b.a.Link,{children:"Announcements"})}),Object(r.jsxs)(m.a,{title:"Locations",id:"basic-nav-dropdown",children:[Object(r.jsx)(h.LinkContainer,{to:"/location-search",children:Object(r.jsx)(m.a.Item,{children:"Search Locations"})}),Object(r.jsx)(h.LinkContainer,{to:"/location-add",children:Object(r.jsx)(m.a.Item,{children:"Add Location"})})]}),Object(r.jsxs)(m.a,{title:"Feedback",id:"basic-nav-dropdown",children:[Object(r.jsx)(h.LinkContainer,{to:"/feedback-routing",children:Object(r.jsx)(m.a.Item,{children:"Routing"})}),Object(r.jsx)(h.LinkContainer,{to:"/feedback-loading",children:Object(r.jsx)(m.a.Item,{children:"Loading"})})]}),Object(r.jsx)(h.LinkContainer,{to:"/barcode-generator",children:Object(r.jsx)(b.a.Link,{children:"Barcode Generator"})})]}),Object(r.jsx)(b.a,{children:Object(r.jsx)(h.LinkContainer,{to:"/profile",children:Object(r.jsx)(b.a.Link,{children:"Profile"})})})]})]})},O=a(55),p=a(40),u=a(37),g=a(52),N=a(53),v=a(57),f=a(56),y=[{id:"1",stopName:"Arsenal Overview",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793619/last-mile/ArsenalOverview_ppmzyi.png",city:"Redstone Arsenal",state:"AL",notes:"",zipCode:"35898"},{id:"2",stopName:"Redstone AMC",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793616/last-mile/RedstoneAMC_k2zdt5.png",city:"Redstone Arsenal",state:"AL",zipCode:"35898"},{id:"3",stopName:"RSA Post 6263",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793616/last-mile/RSAPost6263_shrr81.png",city:"Redstone Arsenal",state:"AL",zipCode:"35898"},{id:"4",stopName:"Redstone NDA",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793615/last-mile/RedstoneNDA_gdoflp.png",city:"Redstone Arsenal",state:"AL",zipCode:"35898"},{id:"5",stopName:"RSA Post Sparkman",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793614/last-mile/RSAPostSparkman_nchap4.png",city:"Redstone Arsenal",state:"AL",zipCode:"35898"},{id:"6",stopName:"MWR Java Cafe",image:"https://res.cloudinary.com/kekkerslawl/image/upload/v1609793613/last-mile/MWRJavaCafe_edhaab.png",city:"Redstone Arsenal",state:"AL",zipCode:"35898"}],I=a(54),L=a(81),k=a(51),w=a(79);function C(e){var t=e.location;return Object(r.jsx)(I.a,{xs:12,md:6,lg:4,children:Object(r.jsxs)(L.a,{style:{marginBottom:"2rem"},children:[Object(r.jsx)(L.a.Img,{variant:"top",src:t.image}),Object(r.jsxs)(L.a.Body,{children:[Object(r.jsx)(L.a.Title,{children:t.stopName}),Object(r.jsxs)(L.a.Text,{children:[t.city,", ",t.state]}),Object(r.jsx)(k.a,{className:"btn btn-usf-green",variant:"success",children:"View Stop"})]})]})})}var R=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var c;return Object(g.a)(this,a),(c=t.call(this,e)).state={locations:y},c}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state.locations.map((function(e){return Object(r.jsx)(C,{location:e})}));return Object(r.jsx)(w.a,{children:e})}}]),a}(c.Component);var A=function(){return Object(r.jsxs)(O.a,{className:"mt-3",children:[Object(r.jsxs)(p.a,{className:"mb-3",children:[Object(r.jsx)(p.a.Prepend,{children:Object(r.jsx)(p.a.Text,{id:"location-input",children:"Location Name"})}),Object(r.jsx)(u.a,{placeholder:"","aria-label":"","aria-describedby":"location-input"})]}),Object(r.jsx)(R,{})]})},T=a(80);var F=function(){return Object(r.jsx)(O.a,{className:"col col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4 pt-3",children:Object(r.jsx)(L.a,{children:Object(r.jsxs)(L.a.Body,{children:[Object(r.jsx)(L.a.Title,{className:"text-center",children:"Add Location"}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"image",children:Object(r.jsx)(T.a.File,{id:"custom-file",label:"Location Image",custom:!0})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"stopName",children:Object(r.jsx)(T.a.Control,{placeholder:"Stop Name"})})}),Object(r.jsxs)(T.a.Row,{children:[Object(r.jsx)(T.a.Group,{as:I.a,className:"col col-8",controlId:"city",children:Object(r.jsx)(T.a.Control,{type:"text",placeholder:"City"})}),Object(r.jsx)(T.a.Group,{as:I.a,controlId:"state",children:Object(r.jsxs)(T.a.Control,{as:"select",defaultValue:"AL",placeholder:"State",children:[Object(r.jsx)("option",{children:"AL"}),Object(r.jsx)("option",{children:"FL"}),Object(r.jsx)("option",{children:"GA"}),Object(r.jsx)("option",{children:"LA"}),Object(r.jsx)("option",{children:"MS"}),Object(r.jsx)("option",{children:"TN"})]})})]}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"gpsCoords",children:Object(r.jsx)(T.a.Control,{placeholder:"GPS Coords"})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"locationNotes",children:Object(r.jsx)(u.a,{as:"textarea",placeholder:"Location Notes"})})}),Object(r.jsx)(k.a,{className:"btn btn-usf-green",variant:"success",type:"submit",children:"Submit"})]})]})})})};var S=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Talk to drivers and get idea for how to submit routing issues"}),Object(r.jsx)("li",{children:"Maybe list of stops and drag/drop editor for better sequence"}),Object(r.jsx)("li",{children:"Time Issues"}),Object(r.jsx)("li",{children:"Report issues with specific stops"})]})})};var E=function(){return Object(r.jsx)(O.a,{className:"col col-sm-8 col-md-7 col-lg-6 col-xl-5 col-xxl-4 pt-3",children:Object(r.jsx)(L.a,{children:Object(r.jsxs)(L.a.Body,{children:[Object(r.jsx)(L.a.Title,{className:"text-center",children:"Load Feedback"}),Object(r.jsxs)(T.a,{children:[Object(r.jsxs)(T.a.Row,{children:[Object(r.jsx)(T.a.Group,{as:I.a,controlId:"route",children:Object(r.jsx)(T.a.Control,{type:"text",placeholder:"Route"})}),Object(r.jsx)(T.a.Group,{as:I.a,controlId:"date",children:Object(r.jsx)(T.a.Control,{type:"date",placeholder:"Date"})})]}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"loadmapImage",children:Object(r.jsx)(T.a.File,{id:"loadmapImage",label:"Loadmap Image",custom:!0})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"loadmapFeedback",children:Object(r.jsx)(u.a,{as:"textarea",placeholder:"Loadmap Feedback"})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"loadingErrorImage",children:Object(r.jsx)(T.a.File,{id:"loadingErrorImage",label:"Loading Error Image(s)",custom:!0})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"loadingErrorNotes",children:Object(r.jsx)(u.a,{as:"textarea",placeholder:"Loading Error Feedback"})})}),Object(r.jsx)(T.a.Row,{children:Object(r.jsx)(T.a.Group,{as:I.a,controlId:"additionalFeedback",children:Object(r.jsx)(u.a,{as:"textarea",placeholder:"Additional Feedback"})})}),Object(r.jsx)(k.a,{className:"btn btn-usf-green",variant:"success",type:"submit",children:"Submit Feedback"})]})]})})})};var P=function(){return Object(r.jsx)("div",{className:"container mt-3",children:Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"singleItem",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Single/Bulk Label"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"singleItem","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("button",{className:"btn","data-bs-toggle":"modal","data-bs-target":"#singleItemModal",children:"TAP HERE FOR HELP"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"mb-3 col-8",children:[Object(r.jsx)("input",{className:"form-control",id:"singleItemInfo","aria-describedby":"singleItemHelp",type:"number",placeholder:"Item Information"}),Object(r.jsx)("div",{id:"singleItemHelp",className:"form-text",children:"Enter the 16-digit number for a single barcode."})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("button",{className:"btn btn-usf-green text-white",children:"Generate Single"}),Object(r.jsx)("button",{className:"btn btn-usf-orange text-white",children:"Clear"})]}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("a",{target:"blank",href:"https://www.tec-it.com/en/start/Default.aspx",children:"Barcodes by Tec-it"})})]})]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"multipleItem",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Multiple Labels"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"multipleItem","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("button",{className:"btn","data-bs-toggle":"modal","data-bs-target":"#multipleItemModal",children:"TAP HERE FOR HELP"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"row align-items-start mb-3",children:[Object(r.jsx)("div",{className:"col-8",children:Object(r.jsx)("input",{className:"form-control",id:"multipleItemInfo",type:"number",placeholder:"Item Information"})}),Object(r.jsx)("div",{className:"col-4",children:Object(r.jsx)("input",{className:"form-control",id:"multipleQuantity",type:"number",placeholder:"Quantity"})})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("button",{className:"btn btn-usf-green text-white",children:"Generate Multiple"}),Object(r.jsx)("button",{className:"btn btn-usf-orange text-white",children:"Clear"})]}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("a",{target:"blank",href:"https://www.tec-it.com/en/start/Default.aspx",children:"Barcodes by Tec-it"})})]})]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Pallet Label"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse show","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("button",{className:"btn","data-bs-toggle":"modal","data-bs-target":"#palletLabelModal",children:"TAP HERE FOR HELP"}),Object(r.jsxs)("p",{children:["What is the pallet? ",Object(r.jsx)("em",{children:"Example: F02"})]}),Object(r.jsxs)("p",{children:["For multiple pallets, separate values with a comma.",Object(r.jsx)("em",{children:"Example: D10, R09, F08"})]}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"row align-items-start mb-3",children:[Object(r.jsx)("label",{className:"col-form-label",htmlFor:"division",children:"Division"}),Object(r.jsx)("div",{className:"col-4 mb-3",children:Object(r.jsx)("select",{className:"form-select",id:"division",name:"division",children:Object(r.jsx)("option",{defaultValue:"2230",children:"5Y"})})}),Object(r.jsx)("div",{className:"col-8",children:Object(r.jsx)("input",{className:"form-control",id:"multipleItemInfo",type:"number",placeholder:"Pallet(s)"})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("input",{type:"number",className:"form-control",id:"stop",placeholder:"Stop"})}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("input",{type:"text",className:"form-control",id:"route",placeholder:"Route"})}),Object(r.jsxs)("div",{className:"col col-md-6 mt-3",children:[Object(r.jsx)("label",{className:"col-form-label",htmlFor:"date",children:"Date"}),Object(r.jsx)("input",{className:"form-control",type:"date",id:"date",name:"date",placeholder:"Date"})]})]}),Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("button",{className:"btn btn-usf-green text-white",children:"Generate Pallet"}),Object(r.jsx)("button",{className:"btn btn-usf-orange text-white",children:"Clear"})]}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("a",{target:"blank",href:"https://www.tec-it.com/en/start/Default.aspx",children:"Barcodes by Tec-it"})})]})]})})]}),Object(r.jsx)("div",{className:"modal fade",id:"singleItemModal",tabIndex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",id:"modalLabel",children:"Item Label"}),Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("p",{children:"Select the item on the POD Screen. It should be highlighted in blue. Tap the 'More' button on the bottom right."}),Object(r.jsx)("img",{src:"",alt:"item code"}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:"The item information is located in the second box on the top of the next screen. Enter that number into the application then tap Generate Single"}),Object(r.jsx)("img",{src:"",alt:""})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("button",{type:"button",className:"btn btn-usf-gray text-white","data-bs-dismiss":"modal",children:"Close"})})]})})}),Object(r.jsx)("div",{className:"modal fade",id:"multipleItemModal",tabIndex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",id:"modalLabel",children:"Multiple Item Label"}),Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("p",{children:"Select the item on the POD Screen. It should be highlighted in blue. Tap the 'More' button on the bottom right."}),Object(r.jsx)("img",{src:"",alt:""}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:"The item information is located in the second box on the top of the next screen. This number should end in '01'. Enter that number into the application, then enter how many labels of that item you need to create in the Quantity box. Lastly, tap Generate Multiple."}),Object(r.jsx)("img",{src:"",alt:""})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("button",{type:"button",className:"btn btn-usf-gray text-white","data-bs-dismiss":"modal",children:"Close"})})]})})}),Object(r.jsx)("div",{className:"modal fade",id:"palletLabelModal",tabIndex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",id:"modalLabel",children:"Pallet Label"}),Object(r.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(r.jsxs)("div",{className:"modal-body",children:[Object(r.jsx)("p",{children:"The pallet number and stop appears on your POD screen."}),Object(r.jsx)("img",{src:"",alt:""}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:"Route number is your 4-digit route number."})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("button",{type:"button",className:"btn btn-usf-gray text-white","data-bs-dismiss":"modal",children:"Close"})})]})})})]})})};a(72),a(73);var G=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsxs)(i.g,{children:[Object(r.jsx)(i.d,{exact:!0,path:"/announcements",component:d}),Object(r.jsx)(i.d,{exact:!0,path:"/location-search",component:A}),Object(r.jsx)(i.d,{exact:!0,path:"/location-add",component:F}),Object(r.jsx)(i.d,{exact:!0,path:"/feedback-routing",component:S}),Object(r.jsx)(i.d,{exact:!0,path:"/feedback-loading",component:E}),Object(r.jsx)(i.d,{exact:!0,path:"/barcode-generator",component:P}),Object(r.jsx)(i.c,{to:"/announcements"})]})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),l(e),n(e)}))};n.a.render(Object(r.jsx)(o.HashRouter,{children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(G,{})})}),document.getElementById("root")),M()}},[[74,1,2]]]);
//# sourceMappingURL=main.e41a4278.chunk.js.map