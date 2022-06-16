"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1959],{4137:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8448:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},7358:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),l=a(1048),i=a(2713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(2613),u=a(6010),p="tabItem_1uMI";function d(e){var t,a,n,l=e.lazy,i=e.block,d=e.defaultValue,m=e.values,c=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=g[0])?void 0:n.props.value;if(null!==f&&!h.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),v=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(f),C=w[0],D=w[1],M=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=v[c];null!=T&&T!==C&&h.some((function(e){return e.value===T}))&&D(T)}var _=function(e){var t=e.currentTarget,a=M.indexOf(t),n=h[a].value;n!==C&&(O(t),D(n),null!=c&&y(c,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=M.indexOf(e.currentTarget)+1;a=M[n]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;a=M[r]||M[M.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},b)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return M.push(e)},onKeyDown:j,onFocus:_,onClick:_},null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},2713:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},33:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var n=a(7462),r=a(3366),l=(a(7294),a(4137)),i=a(7358),o=a(8448),s=["components"],u={title:"Metabase",sidebar_label:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},p="Metabase",d={unversionedId:"docs/generated/ingestion/sources/metabase",id:"docs/generated/ingestion/sources/metabase",isDocsHomePage:!1,title:"Metabase",description:"Module metabase",source:"@site/genDocs/docs/generated/ingestion/sources/metabase.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/metabase",permalink:"/docs/generated/ingestion/sources/metabase",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md",tags:[],version:"current",frontMatter:{title:"Metabase",sidebar_label:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},sidebar:"overviewSidebar",previous:{title:"MariaDB",permalink:"/docs/generated/ingestion/sources/mariadb"},next:{title:"Mode",permalink:"/docs/generated/ingestion/sources/mode"}},m=[{value:"Module <code>metabase</code>",id:"module-metabase",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Dashboard",id:"dashboard",children:[],level:3},{value:"Chart",id:"chart",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],c={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"metabase"},"Metabase"),(0,l.kt)("h2",{id:"module-metabase"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"metabase")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"This plugin extracts Charts, dashboards, and associated metadata. This plugin is in beta and has only been tested\non PostgreSQL and H2 database."),(0,l.kt)("h3",{id:"dashboard"},"Dashboard"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#dashboard"},"/api/dashboard")," endpoint is used to\nretrieve the following dashboard information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Title and description"),(0,l.kt)("li",{parentName:"ul"},"Last edited by"),(0,l.kt)("li",{parentName:"ul"},"Owner"),(0,l.kt)("li",{parentName:"ul"},"Link to the dashboard in Metabase"),(0,l.kt)("li",{parentName:"ul"},"Associated charts")),(0,l.kt)("h3",{id:"chart"},"Chart"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#card"},"/api/card")," endpoint is used to\nretrieve the following information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Title and description"),(0,l.kt)("li",{parentName:"ul"},"Last edited by"),(0,l.kt)("li",{parentName:"ul"},"Owner"),(0,l.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,l.kt)("li",{parentName:"ul"},"Datasource and lineage")),(0,l.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Dimensions")),(0,l.kt)("td",{parentName:"tr",align:null},"Column names")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Filters")),(0,l.kt)("td",{parentName:"tr",align:null},"Any filters applied to the chart")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,l.kt)("td",{parentName:"tr",align:null},"All columns that are being used for aggregation")))),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[metabase]'\n")),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"platform_instance_map"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"A holder for platform -> platform_instance mappings to generate correct dataset urns"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect_uri"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Metabase host URL."),(0,l.kt)("td",{parentName:"tr",align:null},"localhost:3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Metabase username."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Metabase password."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_alias_map"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name map to use when constructing dataset URN."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"engine_platform_map"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom mappings between metabase database engines and DataHub platforms"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_schema"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Default schema name to use when schema is not provided in an SQL query"),(0,l.kt)("td",{parentName:"tr",align:null},"public")))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MetabaseConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Metabase host URL.",\n      "default": "localhost:3000",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Metabase username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Metabase password.",\n      "type": "string"\n    },\n    "database_alias_map": {\n      "title": "Database Alias Map",\n      "description": "Database name map to use when constructing dataset URN.",\n      "type": "object"\n    },\n    "engine_platform_map": {\n      "title": "Engine Platform Map",\n      "description": "Custom mappings between metabase database engines and DataHub platforms",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema name to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,l.kt)("p",null,"Metabase databases will be mapped to a DataHub platform based on the engine listed in the\n",(0,l.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database")," response. This mapping can be\ncustomized by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"engine_platform_map")," config option. For example, to map databases using the ",(0,l.kt)("inlineCode",{parentName:"p"},"athena")," engine to\nthe underlying datasets in the ",(0,l.kt)("inlineCode",{parentName:"p"},"glue")," platform, the following snippet can be used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"  engine_platform_map:\n    athena: glue\n")),(0,l.kt)("p",null,"DataHub will try to determine database name from Metabase ",(0,l.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database"),"\npayload. However, the name can be overridden from ",(0,l.kt)("inlineCode",{parentName:"p"},"database_alias_map")," for a given database connected to Metabase."),(0,l.kt)("h2",{id:"compatibility"},"Compatibility"),(0,l.kt)("p",null,"Metabase version ",(0,l.kt)("a",{parentName:"p",href:"https://www.metabase.com/start/oss/"},"v0.41.2")),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metabase.MetabaseSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metabase.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Metabase, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}b.isMDXComponent=!0}}]);