(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(255)},125:function(e,t,a){},127:function(e,t,a){},154:function(e,t){},156:function(e,t){},194:function(e,t){},195:function(e,t){},255:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"registerUser",function(){return D}),a.d(n,"loginUser",function(){return L}),a.d(n,"logoutUser",function(){return U});var r={};a.r(r),a.d(r,"fetchCheatSheets",function(){return X}),a.d(r,"fetchSingleCheatSheet",function(){return $}),a.d(r,"resetSingleCheatSheet",function(){return q}),a.d(r,"searchCheat",function(){return W}),a.d(r,"createCheatSheet",function(){return J}),a.d(r,"deleteCheatSheet",function(){return z});var c={};a.r(c),a.d(c,"fetchAllcheatCommands",function(){return re}),a.d(c,"deleteCommand",function(){return ce}),a.d(c,"addCommand",function(){return oe});var o=a(0),s=a.n(o),l=a(114),i=a.n(l),m=(a(125),a(8)),h=a(9),u=a(12),d=a(10),p=a(13),E=a(119),f=(a(127),a(258)),b=a(259),v=a(260),C=a(261),O=a(22),g=a(11),S=a(262),_=a(4),y=a(116),A=a.n(y).a.create({baseURL:"http://35.231.196.222",timeout:1e4,headers:{"Content-Type":"application/json"}});A.interceptors.request.use(function(e){var t=localStorage.getItem("token");return e.headers.Authorization=t?"Bearer ".concat(t):"",e.headers["Access-Control-Allow-Origin"]="*",e});var j=A,N=a(45),w=a.n(N),D=function(e,t){return function(a){j.post("/api/user/register",e).then(function(e){t.push("/Login"),a({type:"REGISTER_USER_SUCCESS",payload:e.data})}).catch(function(e){a({type:"REGISTER_USER_FAILURE",payload:e.response.data})})}},L=function(e,t){return function(a){j.post("/api/user/login",e).then(function(e){var n=e.data.token,r=w.a.decode(n);a({type:"LOGIN_USER_SUCCESS",payload:r}),localStorage.setItem("token",n),t.push("/cheats")}).catch(function(e){a({type:"LOGIN_USER_FAILURE",payload:e.response})})}},U=function(e){return function(t){localStorage.removeItem("token"),e.push("/Login"),t({type:"LOGOUT_USER_SUCCESS"})}},I=function(e){var t=e.name,a=e.label,n=e.onChange,r=e.placeholder,c=e.value,o=e.formErrors,l="form-group";return o&&o.username.length>0&&(l+=" has-error"),s.a.createElement("div",{className:l},s.a.createElement("label",{htmlFor:t},a),s.a.createElement("div",{className:"field"},s.a.createElement("input",{type:"text",name:t,className:"form-control",placeholder:r,value:c,onChange:n})))},k=function(e){var t=e.name,a=e.label,n=e.onChange,r=e.value,c=e.formErrors,o="form-group";return c&&c.email.length>0&&(o+=" has-error"),s.a.createElement("div",{className:o},s.a.createElement("label",{htmlFor:t},a),s.a.createElement("div",{className:"field"},s.a.createElement("input",{type:"text",required:!0,name:t,className:"form-control",placeholder:"johndoe@email.com",value:r,onChange:n})))},T=function(e){var t=e.name,a=e.label,n=e.onChange,r=e.placeholder,c=e.value,o=e.formErrors,l="form-group";return o&&o.password.length>0&&(l+=" has-error"),s.a.createElement("div",{className:l},s.a.createElement("label",{htmlFor:t},a),s.a.createElement("div",{className:"field"},s.a.createElement("input",{type:"password",name:t,className:"form-control",placeholder:r,value:c,onChange:n})))},R=function(e){var t=e.name,a=e.label,n=e.onChange,r=e.value,c=e.formErrors,o="form-group";return c&&c.confirm.length>0&&(o+=" has-error"),s.a.createElement("div",{className:o},s.a.createElement("label",{htmlFor:t},a),s.a.createElement("div",{className:"field"},s.a.createElement("input",{type:"password",required:!0,name:t,className:"form-control",placeholder:"Confirm Password",value:r,onChange:n})))},V=function(e){var t=e.formErrors;return s.a.createElement("div",{className:"formErrors"},Object.keys(t).map(function(e,a){return t[e].length>0?s.a.createElement("p",{key:a},e," ",t[e]):""}))},F=function(e){var t=e.handleOnChange,a=e.handleOnSubmit,n=e.formErrors,r=e.isDisabled;return s.a.createElement("form",{className:"login-form",onSubmit:a},s.a.createElement("h3",null,"Register"),s.a.createElement(V,{formErrors:n}),s.a.createElement("br",null),s.a.createElement(I,{name:"username",label:"Username",placeholder:"Username",formErrors:n,onChange:t}),s.a.createElement(k,{name:"email",label:"Email",placeholder:"Email",formErrors:n,onChange:t}),s.a.createElement(T,{name:"password",label:"Password",placeholder:"Password",formErrors:n,onChange:t}),s.a.createElement(R,{name:"confirm",label:"Confirm password",placeholder:"Confirm",formErrors:n,onChange:t}),s.a.createElement("button",{type:"submit",className:"btn btn-success",disabled:!r},"Register"))},H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n),function(){a.validateField(t,n)})},a.handleOnSubmit=function(e){e.preventDefault();var t=a.state,n={username:t.username,email:t.email,password:t.password};a.props.authActions.registerUser(n,a.props.history)},a.state={auth:{},username:"",email:"",password:"",confirm:"",usernameValid:!1,emailValid:!1,passwordValid:!1,formValid:!1,formErrors:{username:"",password:"",email:"",confirm:""}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.usernameValid,r=this.state.emailValid,c=this.state.passwordValid,o=this.state.confirmValid;switch(e){case"username":n=t.trim().length>=5,a.username=n?"":"should be at least 5 characters.";break;case"email":r=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=r?"":"is not valid.";break;case"password":c=t.trim().length>=8,a.password=c?"":"should be at least 8 characters.";break;case"confirm":o=t.trim().length>=8&&t.trim()===this.state.password.trim(),a.confirm=o?"":"do not match"}this.setState({formErrors:a,usernameValid:n,emailValid:r,passwordValid:c,confirmValid:o},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.usernameValid&&this.state.emailValid&&this.state.passwordValid&&this.state.confirmValid})}},{key:"render",value:function(){var e=this.state.formValid;return s.a.createElement("div",{className:"auth-form-container"},s.a.createElement(F,{isDisabled:e,formErrors:this.state.formErrors,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit}))}}]),t}(o.Component),M=Object(g.b)(function(e){return{auth:e.auth}},function(e){return{authActions:Object(_.b)(n,e)}})(Object(S.a)(H)),G=function(e){var t=e.handleOnChange,a=e.handleOnSubmit,n=e.formErrors,r=e.isDisabled;return s.a.createElement("form",{className:"login-form",onSubmit:a},s.a.createElement("h3",null,"Login"),s.a.createElement(V,{formErrors:n}),s.a.createElement("br",null),s.a.createElement(k,{name:"email",label:"Email",placeholder:"Email",formErrors:n,onChange:t}),s.a.createElement(T,{name:"password",label:"Password",placeholder:"Password",formErrors:n,onChange:t}),s.a.createElement("button",{type:"submit",className:"btn btn-success",disabled:!r},"Login"))},x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n),function(){a.validateField(t,n)})},a.handleOnSubmit=function(e){e.preventDefault();var t=a.state,n={email:t.email,password:t.password};a.props.authActions.loginUser(n,a.props.history)},a.state={email:"",password:"",emailValid:!1,passwordValid:!1,formValid:!1,formErrors:{password:"",email:""}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid,r=this.state.passwordValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":"is not valid.";break;case"password":r=t.trim().length>=8,a.password=r?"":"should be at least 8 characters."}this.setState({formErrors:a,emailValid:n,passwordValid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"render",value:function(){var e=this.state.formValid;return s.a.createElement("div",{className:"auth-form-container"},s.a.createElement(G,{isDisabled:e,formErrors:this.state.formErrors,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit}))}}]),t}(o.Component),B=Object(g.b)(function(e){return{auth:e.auth}},function(e){return{authActions:Object(_.b)(n,e)}})(Object(S.a)(x)),P=function(e){var t=e.handleOnChange,a=e.value;return localStorage.getItem("token")?s.a.createElement("div",{class:"main_search"},s.a.createElement("form",null,s.a.createElement("div",{class:"form-group has-feedback has-search"},s.a.createElement("input",{type:"text",value:a,name:"search",class:"form-control",placeholder:"Search",onChange:t})))):""},X=function(){return function(e){j.get("/user/cheats").then(function(t){e({type:"LOAD_CHEAT_SUCCESS",payload:t.data})}).catch(function(t){e({type:"LOAD_CHEAT_FAILURE",payload:t.response})})}},$=function(e){return function(t){j.get("/user/cheats/".concat(e)).then(function(e){t({type:"LOAD_SINGLE_CHEAT_SHEET_SUCCESS",payload:e.data})}).catch(function(e){t({type:"LOAD_SINGLE_CHEAT_SHEET_FAILURE",payload:e.response})})}},q=function(){return function(e){e({type:"RESET_SINGLE_CHEAT_SHEET",payload:{}})}},W=function(e){return function(t){t({type:"SEARCH_CHEAT",payload:e})}},J=function(e){return function(t){j.post("/user/cheats",e).then(function(e){t({type:"CREATE_CHEAT_SUCCESS",payload:e.data.newCheat})}).catch(function(e){t({type:"CREATE_CHEAT_FAILURE",payload:e.response})})}},z=function(e){return function(t){j.delete("/user/cheats/".concat(e)).then(function(a){t({type:"DELETE_CHEAT_SUCCESS",payload:{cheatId:e,res:a}})}).catch(function(e){t({type:"DELETE_CHEAT_FAILURE",payload:e.response})})}},Y=a(257),K=function(e){var t=e.command,a=e.cheatId,n=e.handleDelete;return a?s.a.createElement("li",{className:"cheat_command",key:t._id},s.a.createElement("div",null,s.a.createElement("b",{className:"description"},t.description),s.a.createElement("br",null),"$",s.a.createElement("b",{className:"command"},t.command,">")),s.a.createElement("div",{className:"btn_container"},s.a.createElement("div",null,s.a.createElement("span",{onClick:function(){return n(t._id)},className:"glyphicon glyphicon-trash delete_icons"})))):s.a.createElement("li",{className:"cheat_command",key:t._id},s.a.createElement("div",{className:"cheat_command_item"},s.a.createElement("b",{className:"description"},t.description),s.a.createElement("br",null),s.a.createElement("b",{className:"command"},"$",t.command)),s.a.createElement("hr",null))},Q=function(e){var t=e.cheat,a=e.handleDelete,n=e.cheatId;return t.commands?s.a.createElement("div",{className:"item"},s.a.createElement("div",{className:"item_header"},s.a.createElement(Y.a,{to:"/cheats/".concat(t._id,"/commands")},s.a.createElement("h5",null,t.title)),s.a.createElement("span",{onClick:function(){return a(t._id)},className:"glyphicon glyphicon-trash delete_icon"})),s.a.createElement("li",{className:"card__text"},t.commands.map(function(e){return s.a.createElement(K,{cheatId:n,command:e})}))):t.title?s.a.createElement("h1",{className:"card"},t.title):s.a.createElement("h1",null,"No items available")},Z=function(e){var t=e.cheats,a=e.cheatId,n=e.handleDelete,r=e.searchText;return t.length>0?s.a.createElement("ul",{className:"masonry"},t.filter(function(e){return e.title.toLowerCase().includes(r.toLowerCase())}).map(function(e,t){return s.a.createElement(Q,{key:t,cheatId:a,handleDelete:n,cheat:e})})):s.a.createElement("h1",null,"Your have no Cheats")},ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleDelete=function(e){e&&a.props.cheatActions.deleteCheatSheet(e)},a.handleOnChange=function(e){a.setState({searchText:e.target.value})},a.state={searchText:""},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.cheatActions.fetchCheatSheets(),this.props.cheatActions.resetSingleCheatSheet()}},{key:"componentDidUpdate",value:function(e){this.props.cheats!==e.cheats&&this.setState({cheats:this.props.cheats})}},{key:"render",value:function(){var e=this.props.cheats,t=this.props.match.params.cheatId;return e.length>0?s.a.createElement("div",{className:"main_content"},s.a.createElement(P,{value:this.state.searchText,handleOnChange:this.handleOnChange}),s.a.createElement(Z,{searchText:this.state.searchText,cheatId:t,handleDelete:this.handleDelete,cheats:e})):s.a.createElement("div",{className:"empty_content"},s.a.createElement("h2",null,"No cheats available for this User"))}}]),t}(o.Component),te=Object(g.b)(function(e){return{cheats:e.cheats}},function(e){return{cheatActions:Object(_.b)(r,e)}})(Object(S.a)(ee)),ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n),function(){a.validateField(t,n)})},a.handleOnSubmit=function(e){e.preventDefault();var t={title:a.state.title};a.props.cheatActions.createCheatSheet(t),a.setState({title:""}),a.props.history.push("/cheats")},a.handleOnCancel=function(e){e.preventDefault(),a.props.history.push("/cheats")},a.state={title:"",titleValid:!1,formValid:!1,formErrors:{title:""}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.titleValid;switch(e){case"title":n=t.length>=5,a.title=n?"":"should be at least 5 characters."}this.setState({formErrors:a,titleValid:n},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.titleValid})}},{key:"render",value:function(){var e=this.state.formValid;return s.a.createElement("form",{className:"add_cheat_form",onSubmit:this.handleOnSubmit},s.a.createElement(V,{formErrors:this.state.formErrors}),s.a.createElement(I,{placeholder:"e.g Configuration",label:"Title",name:"title",onChange:this.handleOnChange}),s.a.createElement("button",{variant:"contained",color:"primary",type:"submit",disabled:!e,className:"btn btn-success"},"Add cheat"),s.a.createElement("button",{variant:"contained",color:"secondary",onClick:this.handleOnCancel,className:"btn btn-danger",type:"button"},"Cancel"))}}]),t}(o.Component),ne=Object(g.b)(function(e){return{singleCheat:e.singleCheat}},function(e){return{cheatActions:Object(_.b)(r,e)}})(Object(S.a)(ae)),re=function(e){return function(t){j.get("/user/cheats/".concat(e,"/commands")).then(function(e){t({type:"LOAD_COMMANDS_SUCCESS",payload:e.data})}).catch(function(e){t({type:"LOAD_COMMANDS_FAILURE",payload:e.response})})}},ce=function(e,t){return function(a){j.delete("/user/cheats/".concat(e,"/commands/").concat(t)).then(function(e){a({type:"DELETE_COMMAND_SUCCESS",payload:{commandId:t,data:e}})}).catch(function(e){a({type:"DELETE_COMMAND_FAILURE",payload:e.response})})}},oe=function(e,t){return function(a){j.post("/user/cheats/".concat(t,"/commands"),e).then(function(e){a({type:"ADD_COMMAND_SUCCESS",payload:e.data.newCommand})}).catch(function(e){a({type:"ADD_COMMAND_FAILURE",payload:e.response})})}},se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){if(e){var t=a.props.match.params.cheatId;a.props.commandActions.deleteCommand(t,e)}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.cheatId;e&&(this.props.commandActions.fetchAllcheatCommands(e),this.props.cheatActions.fetchSingleCheatSheet(e))}},{key:"componentDidUpdate",value:function(e){this.props.commands!==e.commands&&this.setState({commands:e.commands})}},{key:"render",value:function(){var e=this,t=this.props.singleCheat.title,a=this.props.commands,n=this.props.match.params.cheatId;return s.a.createElement("div",{className:"single_cheat"},s.a.createElement("ul",null,s.a.createElement("h5",{className:"item_header"},t),a.length>0?a.map(function(t){return s.a.createElement(K,{cheatId:n,handleDelete:e.handleDelete,command:t})}):s.a.createElement("div",{className:"empty_command"},s.a.createElement("h3",null,"No commands found"))))}}]),t}(o.Component),le=Object(g.b)(function(e){return{singleCheat:e.singleCheat,commands:e.commands}},function(e){return{commandActions:Object(_.b)(c,e),cheatActions:Object(_.b)(r,e)}})(Object(S.a)(se)),ie=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n),function(){a.validateField(t,n)})},a.handleOnSubmit=function(e){e.preventDefault();var t=a.props.match.params.cheatId,n=a.state,r={description:n.description,command:n.command};a.props.commandActions.addCommand(r,t),a.setState({description:"",command:""}),a.props.history.push("/cheats/".concat(t,"/commands"))},a.handleOnCancel=function(e){e.preventDefault(),a.props.history.push("/cheats/".concat(a.props.match.params.cheatId,"/commands"))},a.state={description:"",command:"",descriptionValid:!1,commandValid:!1,formValid:!1,formErrors:{description:"",command:""}},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.descriptionValid,r=this.state.commandValid;switch(e){case"description":n=t.length>=5,a.title=n?"":"should be at least 5 characters.";break;case"command":r=t.length>=5,a.title=r?"":"should be at least 5 characters."}this.setState({formErrors:a,descriptionValid:n,commandValid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.descriptionValid&&this.state.commandValid})}},{key:"render",value:function(){var e=this.state.formValid;return s.a.createElement("form",{className:"add_cheat_form",onSubmit:this.handleOnSubmit},s.a.createElement(V,{formErrors:this.state.formErrors}),s.a.createElement(I,{placeholder:"e.g clone repo",label:"Description",name:"description",onChange:this.handleOnChange}),s.a.createElement(I,{placeholder:"e.g git clone url",label:"Command",name:"command",onChange:this.handleOnChange}),s.a.createElement("button",{className:"btn btn-success",disabled:!e,type:"submit"},"Save"),s.a.createElement("button",{onClick:this.handleOnCancel,type:"button",className:"btn btn-danger"},s.a.createElement("b",null,"X")))}}]),t}(o.Component),me=Object(g.b)(function(e){return{singleCheat:e.singleCheat}},function(e){return{commandActions:Object(_.b)(c,e)}})(Object(S.a)(ie)),he=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(e){e.preventDefault(),a.props.authActions.logoutUser(a.props.history)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"navBarLinks",value:function(){var e=this.props.singleCheat._id;return this.props.auth.isAuthenticated?s.a.createElement("div",{className:"nav_menu"},s.a.createElement(Y.a,{className:"nav_link",to:"/cheats"},s.a.createElement("b",null,this.props.auth.user.username)),s.a.createElement("div",{className:"topnav-right"},s.a.createElement(Y.a,{className:"nav_link",to:e?"/cheats/".concat(e,"/add-command"):"/createCheat"},e?"+ Command":"+ Cheat"),s.a.createElement(Y.a,{className:"nav_link",onClick:this.handleLogout,to:"/logout"},"Logout"))):s.a.createElement("div",{className:"nav_menu"},s.a.createElement("div",{className:"topnav-right"},s.a.createElement(Y.a,{className:"nav_link",to:"/"},"Register"),s.a.createElement(Y.a,{className:"nav_link",to:"/Login"},"Login")))}},{key:"render",value:function(){return this.navBarLinks()}}]),t}(o.Component),ue=Object(g.b)(function(e){return{singleCheat:e.singleCheat,auth:e.auth}},function(e){return{authActions:Object(_.b)(n,e)}})(Object(S.a)(he)),de=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.history;this.props.authActions.logoutUser(e)}},{key:"render",value:function(){return null}}]),t}(o.Component),pe=Object(g.b)(null,function(e){return{authActions:Object(_.b)(n,e)}})(Object(S.a)(de)),Ee=function(){return s.a.createElement("div",{className:"not_found"},s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"Oops! Something went absolutely wrong. 404"))},fe=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("span",null,"git cheat sheet | @2017"))},be=function(e){var t=e.component,a=Object(E.a)(e,["component"]);return s.a.createElement(f.a,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?s.a.createElement(t,e):s.a.createElement(b.a,{to:"/Login"})}}))},ve=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement(v.a,null,s.a.createElement("div",{className:"App container-fluid"},s.a.createElement(ue,null),s.a.createElement(C.a,null,s.a.createElement(f.a,{exact:!0,path:"/Register",component:M}),s.a.createElement(f.a,{exact:!0,path:"/"},s.a.createElement(b.a,{to:"/Register"})),s.a.createElement(f.a,{exact:!0,path:"/Login",component:B}),s.a.createElement(be,{exact:!0,path:"/cheats",component:te}),s.a.createElement(be,{path:"/cheats/:cheatId/commands",component:le}),s.a.createElement(be,{path:"/cheats/:cheatId/add-command",component:me}),s.a.createElement(be,{path:"/createCheat",component:ne}),s.a.createElement(be,{path:"/logout",component:pe}),s.a.createElement(f.a,{component:Ee})),s.a.createElement(fe,null)))}}]),t}(o.Component),Ce=a(118),Oe=a(23),ge=a(31),Se={auth:{},cheats:{docs:[],total:0,limit:0,page:0,pages:0,currentCheat:{}},singleCheatSheet:{commands:[],title:"",_id:""},commands:{docs:[],total:0,limit:0,page:0,pages:0}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se.cheats,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CHEAT_SUCCESS":return Object(ge.a)(e).concat([Object.assign({},t.payload)]);case"CREATE_CHEAT_FAILURE":return Object(Oe.a)({},e,{error:t.payload});case"LOAD_CHEAT_SUCCESS":return Object(ge.a)(t.payload.docs);case"LOAD_CHEAT_FAILURE":case"SEARCH_CHEAT":return t.payload;case"DELETE_CHEAT_SUCCESS":return e.filter(function(e){return e._id!==t.payload.cheatId})}return e},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se.commands,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMAND_SUCCESS":return Object(ge.a)(e).concat([Object.assign({},t.payload)]);case"ADD_COMMAND_FAILURE":return Object(Oe.a)({},e,{errors:t.payload});case"LOAD_COMMANDS_SUCCESS":return Object(ge.a)(t.payload.docs);case"LOAD_COMMANDS_FAILURE":return t.payload;case"DELETE_COMMAND_SUCCESS":return e.filter(function(e){return e._id!==t.payload.commandId})}return e},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se.singleCheatSheet,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_SINGLE_CHEAT_SHEET_SUCCESS":return{commands:t.payload.commands,title:t.payload.title,_id:t.payload._id};case"LOAD_SINGLE_CHEAT_SHEET_FAILURE":case"RESET_SINGLE_CHEAT_SHEET":return t.payload}return e},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_USER_SUCCESS":return Object(Oe.a)({},e,{isRegistered:!0,data:t.payload});case"REGISTER_USER_FAILURE":return Object(Oe.a)({},e,{isRegistered:!1,data:t.payload});case"LOGIN_USER_SUCCESS":return Object(Oe.a)({},e,{isAuthenticated:!0,user:t.payload});case"LOGIN_USER_FAILURE":case"LOGOUT_USER_SUCCESS":return Object(Oe.a)({},e,{isAuthenticated:!1,user:null})}return e},Ne=Object(_.c)({auth:je,cheats:_e,commands:ye,singleCheat:Ae}),we=Object(_.e)(Ne,Object(_.d)(Object(_.a)(Ce.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=localStorage.getItem("token");if(De){var Le=w.a.decode(De);we.dispatch({type:"LOGIN_USER_SUCCESS",payload:Le}),we.dispatch(X())}i.a.render(s.a.createElement(g.a,{store:we},s.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.b1f0956d.chunk.js.map