"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7110],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1812:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={title:"Search Guide",sidebar_label:"Search Guide",slug:"/how/search",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/search.md"},l="Search Guide",p={unversionedId:"docs/how/search",id:"docs/how/search",isDocsHomePage:!1,title:"Search Guide",description:"Introduction",source:"@site/genDocs/docs/how/search.md",sourceDirName:"docs/how",slug:"/how/search",permalink:"/docs/how/search",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/search.md",tags:[],version:"current",frontMatter:{title:"Search Guide",sidebar_label:"Search Guide",slug:"/how/search",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/search.md"},sidebar:"overviewSidebar",previous:{title:"Schema History Guide",permalink:"/docs/schema-history"},next:{title:"Adding Users to DataHub",permalink:"/docs/how/auth/add-users"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Search in Specific Fields",id:"search-in-specific-fields",children:[],level:3}],level:2},{value:"Where to find more information?",id:"where-to-find-more-information",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-guide"},"Search Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The search bar is one of the means of finding data in Datahub. In this document, we discuss more effective ways of finding information beyond doing a standard keyword search. This is because keyword searches can return results from almost any part of an entity."),(0,o.kt)("h3",{id:"search-in-specific-fields"},"Search in Specific Fields"),(0,o.kt)("p",null,"The following examples are in the format of",(0,o.kt)("br",{parentName:"p"}),"\n","X: ",(0,o.kt)("em",{parentName:"p"},"typical question")," :",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"what to key in search bar"),".  ",(0,o.kt)("a",{parentName:"p",href:"https://example.com"},"sample url"),(0,o.kt)("br",{parentName:"p"}),"\n","Wildcard characters can be added to the search terms as well. These examples are non exhaustive and using Datasets as a reference.    "),(0,o.kt)("p",null,"I want to:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Find a dataset with the word ",(0,o.kt)("strong",{parentName:"em"},"mask")," in the name")," :",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"name: *mask*")," ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=name%3A%20%2Amask%2A"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","This will return entities with ",(0,o.kt)("strong",{parentName:"p"},"mask")," in the name.",(0,o.kt)("br",{parentName:"p"}),"\n","Names tends to be connected by other symbols, hence the wildcard symbols before and after the word.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"*Find a dataset with a property, ",(0,o.kt)("strong",{parentName:"p"},"encoding*"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"customProperties: encoding*")," ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=customProperties%3A%20encoding%2A"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","Dataset Properties are indexed in ElasticSearch the manner of key=value. Hence if you know the precise key-value pair, you can search using ",(0,o.kt)("inlineCode",{parentName:"p"},"key=value"),". However, if you only know the key, you can use wildcards to replace the value and that is what is being done here.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"*Find a dataset with a column name, ",(0,o.kt)("strong",{parentName:"p"},"latitude*"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"fieldPaths: latitude")," ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=fieldPaths%3A%20latitude"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","fieldPaths is the name of the attribute that holds the column name in Datasets.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Find a dataset with the term ",(0,o.kt)("strong",{parentName:"em"},"latitude")," in the field description"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"editedFieldDescriptions: latitude OR fieldDescriptions: latitude"),"  ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=editedFieldDescriptions%3A%20latitude%20OR%20fieldDescriptions%3A%20latitude"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","Datasets has 2 attributes that contains field description. fieldDescription comes from the SchemaMetadata aspect, while editedFieldDescriptions comes from the EditableSchemaMetadata aspect. EditableSchemaMetadata holds information that comes from UI edits, while SchemaMetadata holds data from ingestion of the dataset.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Find a dataset with the term ",(0,o.kt)("strong",{parentName:"em"},"logical")," in the dataset description"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"editedDescription: *logical* OR description: *logical*")," ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=editedDescription%3A%20%2Alogical%2A%20OR%20description%3A%20%2Alogical%2A"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","Similar to field descriptions, dataset descriptions can be found in 2 aspects, hence the need to search 2 attributes.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Find a dataset which reside in one of the browsing folders, for instance, the ",(0,o.kt)("strong",{parentName:"em"},"hive")," folder"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"browsePaths: *hive*")," ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/search?page=1&query=browsePaths%3A%20%2Ahive%2A"},"Sample results"),(0,o.kt)("br",{parentName:"p"}),"\n","BrowsePath is stored as a complete string, for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"/datasets/prod/hive/SampleKafkaDataset"),", hence the need for wildcards on both ends of the term to return a result. "))),(0,o.kt)("h2",{id:"where-to-find-more-information"},"Where to find more information?"),(0,o.kt)("p",null,"The sample queries here are non exhaustive. ",(0,o.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/tag/urn:li:tag:Searchable"},"The link here")," shows the current list of indexed fields for each entity inside Datahub. Click on the fields inside each entity and see which field has the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"Searchable"),".",(0,o.kt)("br",{parentName:"p"}),"\n","However, it does not tell you the specific attribute name to use for specialized searches. One way to do so is to inspect the ElasticSearch indices, for example:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:9200/_cat/indices")," returns all the ES indices in the ElasticSearch container.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yellow open chartindex_v2_1643510690325                           bQO_RSiCSUiKJYsmJClsew 1 1   2 0   8.5kb   8.5kb\nyellow open mlmodelgroupindex_v2_1643510678529                    OjIy0wb7RyKqLz3uTENRHQ 1 1   0 0    208b    208b\nyellow open dataprocessindex_v2_1643510676831                     2w-IHpuiTUCs6e6gumpYHA 1 1   0 0    208b    208b\nyellow open corpgroupindex_v2_1643510673894                       O7myCFlqQWKNtgsldzBS6g 1 1   3 0  16.8kb  16.8kb\nyellow open corpuserindex_v2_1643510672335                        0rIe_uIQTjme5Wy61MFbaw 1 1   6 2  32.4kb  32.4kb\nyellow open datasetindex_v2_1643510688970                         bjBfUEswSoSqPi3BP4iqjw 1 1  15 0  29.2kb  29.2kb\nyellow open dataflowindex_v2_1643510681607                        N8CMlRFvQ42rnYMVDaQJ2g 1 1   1 0  10.2kb  10.2kb\nyellow open dataset_datasetusagestatisticsaspect_v1_1643510694706 kdqvqMYLRWq1oZt1pcAsXQ 1 1   4 0   8.9kb   8.9kb\nyellow open .ds-datahub_usage_event-000003                        YMVcU8sHTFilUwyI4CWJJg 1 1 186 0 203.9kb 203.9kb\nyellow open datajob_datahubingestioncheckpointaspect_v1           nTXJf7C1Q3GoaIJ71gONxw 1 1   0 0    208b    208b\nyellow open .ds-datahub_usage_event-000004                        XRFwisRPSJuSr6UVmmsCsg 1 1 196 0 165.5kb 165.5kb\nyellow open .ds-datahub_usage_event-000005                        d0O6l5wIRLOyG6iIfAISGw 1 1  77 0 108.1kb 108.1kb\nyellow open dataplatformindex_v2_1643510671426                    _4SIIhfAT8yq_WROufunXA 1 1   0 0    208b    208b\nyellow open mlmodeldeploymentindex_v2_1643510670629               n81eJIypSp2Qx-fpjZHgRw 1 1   0 0    208b    208b\nyellow open .ds-datahub_usage_event-000006                        oyrWKndjQ-a8Rt1IMD9aSA 1 1 143 0 127.1kb 127.1kb\nyellow open mlfeaturetableindex_v2_1643510677164                  iEXPt637S1OcilXpxPNYHw 1 1   5 0   8.9kb   8.9kb\nyellow open .ds-datahub_usage_event-000001                        S9EnGj64TEW8O3sLUb9I2Q 1 1 257 0 163.9kb 163.9kb\nyellow open .ds-datahub_usage_event-000002                        2xJyvKG_RYGwJOG9yq8pJw 1 1  44 0 155.4kb 155.4kb\nyellow open dataset_datasetprofileaspect_v1_1643510693373         uahwTHGRRAC7w1c2VqVy8g 1 1  31 0  18.9kb  18.9kb\nyellow open mlprimarykeyindex_v2_1643510687579                    MUcmT8ASSASzEpLL98vrWg 1 1   7 0   9.5kb   9.5kb\nyellow open glossarytermindex_v2_1643510686127                    cQL8Pg6uQeKfMly9GPhgFQ 1 1   3 0    10kb    10kb\nyellow open datajob_datahubingestionrunsummaryaspect_v1           rk22mIsDQ02-52MpWLm1DA 1 1   0 0    208b    208b\nyellow open mlmodelindex_v2_1643510675399                         gk-WSTVjRZmkDU5ggeFSqg 1 1   1 0  10.3kb  10.3kb\nyellow open dashboardindex_v2_1643510691686                       PQjSaGhTRqWW6zYjcqXo6Q 1 1   1 0   8.7kb   8.7kb\nyellow open datahubpolicyindex_v2_1643510671774                   ZyTrYx3-Q1e-7dYq1kn5Gg 1 1   0 0    208b    208b\nyellow open datajobindex_v2_1643510682977                         K-rbEyjBS6ew5uOQQS4sPw 1 1   2 0  11.3kb  11.3kb\nyellow open datahubretentionindex_v2                              8XrQTPwRTX278mx1SrNwZA 1 1   0 0    208b    208b\nyellow open glossarynodeindex_v2_1643510678826                    Y3_bCz0YR2KPwCrrVngDdA 1 1   1 0   7.4kb   7.4kb\nyellow open system_metadata_service_v1                            36spEDbDTdKgVlSjE8t-Jw 1 1 387 8  63.2kb  63.2kb\nyellow open schemafieldindex_v2_1643510684410                     tZ1gC3haTReRLmpCxirVxQ 1 1   0 0    208b    208b\nyellow open mlfeatureindex_v2_1643510680246                       aQO5HF0mT62Znn-oIWBC8A 1 1  20 0  17.4kb  17.4kb\nyellow open tagindex_v2_1643510684785                             PfnUdCUORY2fnF3I3W7HwA 1 1   3 1  18.6kb  18.6kb\n")),(0,o.kt)("p",null,"The index name will vary from instance to instance. Indexed information about Datasets can be found in:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:9200/datasetindex_v2_1643510688970/_search?=pretty"),"  "),(0,o.kt)("p",null,"example information of a dataset:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n        "_index" : "datasetindex_v2_1643510688970",\n        "_type" : "_doc",\n        "_id" : "urn%3Ali%3Adataset%3A%28urn%3Ali%3AdataPlatform%3Akafka%2CSampleKafkaDataset%2CPROD%29",\n        "_score" : 1.0,\n        "_source" : {\n          "urn" : "urn:li:dataset:(urn:li:dataPlatform:kafka,SampleKafkaDataset,PROD)",\n          "name" : "SampleKafkaDataset",\n          "browsePaths" : [\n            "/prod/kafka/SampleKafkaDataset"\n          ],\n          "origin" : "PROD",\n          "customProperties" : [\n            "prop2=pikachu",\n            "prop1=fakeprop"\n          ],\n          "hasDescription" : false,\n          "hasOwners" : true,\n          "owners" : [\n            "urn:li:corpuser:jdoe",\n            "urn:li:corpuser:datahub"\n          ],\n          "fieldPaths" : [\n            "[version=2.0].[type=boolean].field_foo_2",\n            "[version=2.0].[type=boolean].field_bar",\n            "[version=2.0].[key=True].[type=int].id"\n          ],\n          "fieldGlossaryTerms" : [ ],\n          "fieldDescriptions" : [\n            "Foo field description",\n            "Bar field description",\n            "Id specifying which partition the message should go to"\n          ],\n          "fieldTags" : [\n            "urn:li:tag:NeedsDocumentation"\n          ],\n          "platform" : "urn:li:dataPlatform:kafka"\n        }\n      },\n')))}m.isMDXComponent=!0}}]);