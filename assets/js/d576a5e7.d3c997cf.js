"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3893],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),b=n,h=p["".concat(u,".").concat(b)]||p[b]||d[b]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8805:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=["components"],s={title:"UI Tabs Guide",sidebar_label:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"},u="UI Tabs Guide",l={unversionedId:"docs/how/ui-tabs-guide",id:"docs/how/ui-tabs-guide",isDocsHomePage:!1,title:"UI Tabs Guide",description:"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs.",source:"@site/genDocs/docs/how/ui-tabs-guide.md",sourceDirName:"docs/how",slug:"/how/ui-tabs-guide",permalink:"/docs/how/ui-tabs-guide",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md",tags:[],version:"current",frontMatter:{title:"UI Tabs Guide",sidebar_label:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"},sidebar:"overviewSidebar",previous:{title:"Adding Users to DataHub",permalink:"/docs/how/auth/add-users"},next:{title:"Local Development",permalink:"/docs/developers"}},c=[{value:"Datasets",id:"datasets",children:[{value:"Stats and Queries Tab",id:"stats-and-queries-tab",children:[],level:3},{value:"Validation Tab",id:"validation-tab",children:[],level:3}],level:2},{value:"Common to multiple entities",id:"common-to-multiple-entities",children:[{value:"Properties Tab",id:"properties-tab",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ui-tabs-guide"},"UI Tabs Guide"),(0,o.kt)("p",null,"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs."),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("h3",{id:"stats-and-queries-tab"},"Stats and Queries Tab"),(0,o.kt)("p",null,"To enable these tabs you need to use one of the usage sources which gets the relevant metadata from your sources and ingests them into DataHub. These usage sources are listed under other sources which support them e.g. ",(0,o.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/snowflake"},"Snowflake source"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/bigquery"},"BigQuery source")),(0,o.kt)("h3",{id:"validation-tab"},"Validation Tab"),(0,o.kt)("p",null,"This tab is enabled if you use ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/integration_docs/great-expectations"},"Data Quality Integration with Great Expectations"),"."),(0,o.kt)("h2",{id:"common-to-multiple-entities"},"Common to multiple entities"),(0,o.kt)("h3",{id:"properties-tab"},"Properties Tab"),(0,o.kt)("p",null,"Properties are a catch-all bag for metadata not captured in other aspects stored for a Dataset. These are populated via the various source connectors when ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata is ingested"),"."))}p.isMDXComponent=!0}}]);