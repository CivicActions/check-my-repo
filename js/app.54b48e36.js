(function(){"use strict";var e={32:function(e,t,i){var s=i(144),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Navbar"),i("router-view"),i("Footer")],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar"},[i("ul",[i("li",[i("router-link",{staticClass:"name",attrs:{to:{path:"/"}}},[e._v("CHECK MY REPO")])],1),i("li",[i("router-link",{staticClass:"pages",attrs:{to:{path:"/about"}}},[e._v("About")])],1),i("li",[i("router-link",{staticClass:"pages",attrs:{to:{path:"/rules"}}},[e._v("Rules")])],1)])])},c=[],r={name:"Navbar",data(){return{}}},l=r,u=i(1),p=(0,u.Z)(l,a,c,!1,null,"744edaf4",null),d=p.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("GitHub")]),i("p",{staticClass:"break-line"},[e._v("Open source automated tool daily checking our public")]),i("p",{staticClass:"break-line p-bottom"},[e._v("repositories health and quality")])])}],m={name:"Footer",data(){}},g=m,b=(0,u.Z)(g,h,f,!1,null,"1776be4e",null),x=b.exports,v={name:"app",components:{Navbar:d,Footer:x}},y=v,C=(0,u.Z)(y,o,n,!1,null,null,null),w=C.exports,_=i(205);(0,_.z)("/check-my-repo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var A=i(345),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"square content"},[i("h1",[e._v("About")]),i("p",[e._v(" Aiming to help Open Source Software OSS maintainers we, at the "),i("a",{attrs:{href:"https://opensource.saucelabs.com",target:"_blank",rel:"noopener"}},[e._v("Sauce Labs Open Source Program Office")]),e._v(", created Check-My-Repo. "),i("br"),i("br"),e._v(" An automated tool built upon "),i("a",{attrs:{href:"https://todogroup.github.io/repolinter/",target:"_blank",rel:"noopener"}},[e._v("Repolinter")]),e._v(", that verifies if the main necessary parameters to comply with "),i("a",{attrs:{href:"https://opensource.guide/building-community/",target:"_blank",rel:"noopener"}},[e._v("open source best practices")]),e._v(", from Readme to License, are present in the organization's repositories. "),i("br"),i("br"),e._v(" By automating this verification open source projects maintenance is more effective and effortless, and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain. "),i("br"),i("br"),e._v(" To implement it in your organization all you need to do is to "),i("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("fork the repository on GitHub")]),e._v(". It's that easy. ")])])])}],E={components:{},name:"About"},j=E,O=(0,u.Z)(j,k,q,!1,null,"62cecab0",null),R=O.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"square"},[s("button",{staticClass:"content total",attrs:{"aria-label":"Total repos"},on:{click:function(t){return e.goToRepo(e.frontend[0].repo)}}},[s("img",{staticClass:"icon-space",attrs:{src:i(485),alt:"Feather Icon Box"}}),s("h4",[e._v("Total Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.frontend.length))]),s("p",{staticClass:"text"},[e._v("Repository "),s("img",{staticClass:"icon",attrs:{src:i(297),alt:"Feather External Link"}})])]),s("button",{staticClass:"content passed",class:{"state-healthy":!e.buttonPassedOff},attrs:{"aria-label":"List healthy repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideHealthy=!e.hideHealthy,e.buttonPassedOff=!e.buttonPassedOff}}},[s("img",{staticClass:"icon-space",attrs:{src:i(881),alt:"Feather Icon Check"}}),s("h4",[e._v("Healthy Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.allPassed))]),s("p",[e._v("View repos")])]),s("button",{staticClass:"content failed",class:{"state-failed":!e.buttonFailedOff},attrs:{"aria-label":"List failing repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideRepos=!e.hideRepos,e.buttonFailedOff=!e.buttonFailedOff}}},[s("img",{staticClass:"icon-space",attrs:{src:i(114),alt:"Feather Icon No Check"}}),s("h4",[e._v("Failing Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.frontend.length-e.allPassed))]),s("p",[e._v("View repos")])])]),e.hideRepos?e._e():s("div",[s("Details")],1),e.hideHealthy?e._e():s("div",[s("Healthy")],1)])},S=[],T=JSON.parse('[{"repo":"https://github.com/CivicActions","name":"bowline","url":"https://github.com/CivicActions/bowline.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"guidebook","url":"https://github.com/CivicActions/guidebook.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"devops","url":"https://github.com/CivicActions/devops.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"compliance-docs","url":"https://github.com/CivicActions/compliance-docs.git","failed":["code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"style-guide","url":"https://github.com/CivicActions/style-guide.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"drydock","url":"https://github.com/CivicActions/drydock.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"hailstone","url":"https://github.com/CivicActions/hailstone.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"project-settings","url":"https://github.com/CivicActions/project-settings.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-knowledgebase","url":"https://github.com/CivicActions/FE-knowledgebase.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-component-library","url":"https://github.com/CivicActions/FE-component-library.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"uswds-drupal-demo","url":"https://github.com/CivicActions/uswds-drupal-demo.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"ssp-toolkit","url":"https://github.com/CivicActions/ssp-toolkit.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"saas-brand","url":"https://github.com/CivicActions/saas-brand.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"uswds-color-tool","url":"https://github.com/CivicActions/uswds-color-tool.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-knowledgebase-Strapi","url":"https://github.com/CivicActions/FE-knowledgebase-Strapi.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"accessibility","url":"https://github.com/CivicActions/accessibility.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email","github-issue-template-exists"]},{"repo":"https://github.com/CivicActions","name":"compliance-io","url":"https://github.com/CivicActions/compliance-io.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"civicactions-homesite","url":"https://github.com/CivicActions/civicactions-homesite.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email","github-issue-template-exists"]},{"repo":"https://github.com/CivicActions","name":"cypress-tests","url":"https://github.com/CivicActions/cypress-tests.git","failed":["code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"ca-jekyll-vanilla","url":"https://github.com/CivicActions/ca-jekyll-vanilla.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email","github-issue-template-exists"]},{"repo":"https://github.com/CivicActions","name":"accessibility-qa","url":"https://github.com/CivicActions/accessibility-qa.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"accessibility-data-reference","url":"https://github.com/CivicActions/accessibility-data-reference.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-drupal-storybook-starterkit","url":"https://github.com/CivicActions/FE-drupal-storybook-starterkit.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-resource-library","url":"https://github.com/CivicActions/FE-resource-library.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"OAAK","url":"https://github.com/CivicActions/OAAK.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"oscal-component-definitions","url":"https://github.com/CivicActions/oscal-component-definitions.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"openacr","url":"https://github.com/CivicActions/openacr.git","failed":["code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"openacr-editor","url":"https://github.com/CivicActions/openacr-editor.git","failed":["code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"component_creator","url":"https://github.com/CivicActions/component_creator.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"allusgov","url":"https://github.com/CivicActions/allusgov.git","failed":["code-of-conduct-file-exists","security-file-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"FE-drupal-react-prodev","url":"https://github.com/CivicActions/FE-drupal-react-prodev.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","test-directory-exists","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"impact-criteria","url":"https://github.com/CivicActions/impact-criteria.git","failed":["license-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"prompts","url":"https://github.com/CivicActions/prompts.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"oipa","url":"https://github.com/CivicActions/oipa.git","failed":["code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"open-practice","url":"https://github.com/CivicActions/open-practice.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","integrates-with-ci","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"site-evaluation-tools","url":"https://github.com/CivicActions/site-evaluation-tools.git","failed":["contributing-file-exists","code-of-conduct-file-exists","security-file-exists","test-directory-exists","github-issue-template-exists","github-pull-request-template-exists"],"passed":["license-file-exists","readme-file-exists","binaries-not-present","integrates-with-ci","code-of-conduct-file-contains-email"]},{"repo":"https://github.com/CivicActions","name":"check-my-repo","url":"https://github.com/CivicActions/check-my-repo.git","failed":[],"passed":["license-file-exists","readme-file-exists","contributing-file-exists","code-of-conduct-file-exists","security-file-exists","binaries-not-present","test-directory-exists","integrates-with-ci","code-of-conduct-file-contains-email","github-issue-template-exists","github-pull-request-template-exists"]}]'),H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"square-detail"},[i("table",{staticClass:"table-content"},[i("tr",e._l(e.columns,(function(t){return i("th",{key:t.key},[e._v(e._s(t.name))])})),0),e._l(e.frontend,(function(t){return i("tr",{key:t},[0!==t.failed.length?[i("td",{staticClass:"td-left"},[i("a",{attrs:{href:t.url,target:"_blank",rel:"noopener"}},[e._v(e._s(t.name))])]),i("td",e._l(t.failed,(function(t){return i("span",{key:t},[i("span",{staticClass:"badge high"},[e._v(" "+e._s(t)+" ")])])})),0)]:e._e()],2)}))],2)])},P=[],Z={name:"Details",data(){return{frontend:T,columns:[{key:"name",name:"Repository name"},{key:"failed",name:"Failed rules"}]}}},I=Z,$=(0,u.Z)(I,H,P,!1,null,"4659e40c",null),L=$.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"square-healthy"},[i("table",{staticClass:"table-healthy"},[i("tr",e._l(e.columns,(function(t){return i("th",{key:t},[e._v(e._s(t))])})),0),i("tr",[i("td",[e._v(e._s(e.healthy))])])])])},M=[],N={name:"Healthy",data(){return{frontend:T,columns:{name:"Healthy Repos"}}},computed:{healthy:function(){return this.frontend.filter((e=>e.passed&&e.failed.length<1)).map((e=>e.name)).join("\n")}}},G=N,B=(0,u.Z)(G,D,M,!1,null,"46394d7b",null),z=B.exports,W={components:{Details:L,Healthy:z},name:"Home",data(){return{frontend:T,hideRepos:!0,hideHealthy:!0,buttonPassedOff:!0,buttonFailedOff:!0}},computed:{allPassed:function(){return this.frontend.filter((e=>e.passed&&e.failed.length<1)).length},failedRepo:function(){return this.frontend.map((({failed:e})=>e)).flat().length}},methods:{goToRepo:e=>{window.open(e,"_blank","noopener")}}},Y=W,K=(0,u.Z)(Y,F,S,!1,null,"5fe54dbc",null),U=K.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"square content"},[i("h1",[e._v("Rules")]),e._v(" Check-My-Repo uses a ruleset that searches for files considered essential in an open source project, according to best practices. In order to help filter the emergence of necessary actions on the missing of those files, we have separated the rules into: low, medium or high priority. Badges help to visually understand these priorities. "),i("br"),i("br"),e._v(" Following is a brief explanation of what each of these rules means and the importance of complying with them: "),i("br"),i("br"),i("span",{staticClass:"badge high"},[e._v("Binaries")]),i("p",[e._v(" The security rule looks for binary files, executables and passwords, which should not be contained in an open project. ")]),i("span",{staticClass:"badge high"},[e._v("CodeOfConduct")]),i("p",[e._v("A code of conduct establishes expectations and facilitates a healthy and constructive community.")]),i("p",{staticClass:"quote"},[e._v(" When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow, and create a safe environment for all. ")]),i("p",[e._v(" You can read more about it at "),i("a",{attrs:{href:"https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself.",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(". ")]),i("span",{staticClass:"badge high"},[e._v("License")]),i("p",[e._v(" Compliance with open source software (OSS) license requirements is necessary, and complex. Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly. It is also important to protect you legally. If you want to understand it better, we highly recommend you to take the free certificate from "),i("a",{attrs:{href:"https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/",target:"_blank",rel:"noopener"}},[e._v("Linux Foundation")]),e._v(". Check-my-repo searches for a License file or a license mentioned on README file. ")]),i("span",{staticClass:"badge high"},[e._v("Readme")]),i("p",[e._v(" A friendly README and clear code examples will make it easier for anyone who lands on your project to get started. It is about knowing your audience and their needs. The "),i("a",{attrs:{href:"https://opensource.guide/",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(" reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion. ")]),i("span",{staticClass:"badge medium"},[e._v("Changelog")]),i("p",[e._v(" The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project. While Changelog is a file, a "),i("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener"}},[e._v("SemVer")]),e._v(", a semantic version, may be a better choice in systems with many dependencies. Doesn't matter what you choose, this makes it easier for people to understand the development speed of the project, or it's lack of maintenance. Check-my-repo searches if the project has a CHANGELOG.md file in the project root or if it contains a release tag on GitHub. ")]),i("span",{staticClass:"badge medium"},[e._v("Contributing")]),i("p",[e._v(" A contributor guideline saves lots of time from both maintainers and contributors. Eager contributors rely on it to be their guiding hand. ")]),i("span",{staticClass:"badge medium"},[e._v("Ownership")]),i("p",[e._v(" The main purpose of this file is to ensure someone is assigned to the project and to prevent it from going into the forgetful mode. Another reason is to provide a contact for potential contributors. When no one other than the original author has maintenance rights, continuation of the project through bifurcation can lead to confusion about the status and reliability of the project. ")]),i("span",{staticClass:"badge medium"},[e._v("TestDir")]),i("p",[e._v(" Having tests on your project can avoid regresion, breaks and so many issues. A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and digital confidence; which leads to users satisfaction. ")]),i("span",{staticClass:"badge low"},[e._v("IssueTemplate")]),i("span",{staticClass:"badge low"},[e._v("PullRequestTemplate")]),i("p",[e._v(" These templates, embeded on your repository, are used to create issues and pull requests. They are highly recommended to avoid problems, keep your contributors communication clear and short and to make it easier for them express their needs. ")]),i("p",[e._v(" You can read more about it at "),i("a",{attrs:{href:"https://help.github.com/en/articles/about-issue-and-pull-request-templates",target:"_blank",rel:"noopener"}},[e._v("GitHub Docs")]),e._v(". ")]),i("span",{staticClass:"badge low"},[e._v("LicenseOnHeaders")]),i("p",[e._v(" Adding the license and copyright at the beginning of each document enhances its visibility. It is also a way to help the user quickly learn about their possibilities, even when using only one document from the project. ")]),i("span",{staticClass:"badge low"},[e._v("LicenseOnReadme")]),i("p",[e._v(" Although the license is valid in any format, as long as it is added to the project, having it in the main file ensures it will be clearly visible. So even if the license exists in a separate file it is important to have a mention of it in the README. Some projects add copyright and license on the first line of every file of the project. ")]),i("span",{staticClass:"badge low"},[e._v("Security")]),i("p",[e._v(" A SECURITY.md is where a security policy goes, a place to instruct users how to report a security vulnerability. This allows users to easily report and maintainers to quickly take actions upon vulnerabilities. ")]),i("span",{staticClass:"badge low"},[e._v("Support")]),i("p",[e._v(" A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. It can include: how and where can a user get help and support, which communication channels should be used and what not to do to avoid communication noise. This file helps both users and maintainers to communicate to each other having their needs to get into the right channel. ")])])}],Q={components:{},name:"Rules"},X=Q,ee=(0,u.Z)(X,V,J,!1,null,"0d6d1ba6",null),te=ee.exports;s.Z.use(A.Z);const ie=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:R},{path:"/rules",name:"Rules",component:te}],se=new A.Z({mode:"history",base:"/check-my-repo/",routes:ie,linkActiveClass:"active",linkExactActiveClass:"exact-active"});var oe=se,ne=i(629);s.Z.use(ne.ZP);var ae=new ne.ZP.Store({state:{},mutations:{},actions:{},modules:{}});s.Z.config.productionTip=!1,new s.Z({router:oe,store:ae,render:e=>e(w)}).$mount("#app")},485:function(e,t,i){e.exports=i.p+"img/box.96eb7ca2.svg"},881:function(e,t,i){e.exports=i.p+"img/check-circle.eea445fc.svg"},297:function(e,t,i){e.exports=i.p+"img/external-link.cb89befa.svg"},114:function(e,t,i){e.exports=i.p+"img/x-circle.6ce42bf9.svg"}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,o,n){if(!s){var a=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],n=e[u][2];for(var c=!0,r=0;r<s.length;r++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[r])}))?s.splice(r--,1):(c=!1,n<a&&(a=n));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,o,n]}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/check-my-repo/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,a=s[0],c=s[1],r=s[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(r)var u=r(i)}for(t&&t(s);l<a.length;l++)n=a[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(32)}));s=i.O(s)})();
//# sourceMappingURL=app.54b48e36.js.map