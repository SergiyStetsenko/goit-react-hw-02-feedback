(this.webpackJsonpwork_2_feedback=this.webpackJsonpwork_2_feedback||[]).push([[0],{11:function(e,t,n){e.exports={given:"Notifi_given__1rRtT"}},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=n(6),o=n(4),l=n(9),u=n(10),d=n(13),b=n(12),j=n(2),h=n.n(j),O=n(3),v=n.n(O),m=n(0),_=function(e){var t=e.onIncrement;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:v.a.title,children:"Please leave feedback "}),Object(m.jsxs)("div",{className:v.a.click,children:[Object(m.jsx)("button",{className:v.a.good,type:"button",onClick:t,name:"good",children:"Good"}),Object(m.jsx)("button",{className:v.a.neutral,type:"button",onClick:t,name:"neutral",children:"Neutral"}),Object(m.jsx)("button",{className:v.a.bad,type:"button",onClick:t,name:"bad",children:"Bad"})]})]})},g=_;_.prototype={onIncrement:h.a.string.isRequired};var x=n(7),f=n.n(x),k=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:f.a.title,children:"Statistics"}),Object(m.jsxs)("ul",{className:f.a.list,children:[Object(m.jsxs)("li",{children:["Good:",t]}),Object(m.jsxs)("li",{children:["Neutral:",n]}),Object(m.jsxs)("li",{children:["Bad:",a]}),Object(m.jsxs)("li",{children:["Total: ",c]}),Object(m.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})]})},p=k;k.prototype={good:h.a.number.isRequired,neutral:h.a.number.isRequired,bad:h.a.number.isRequired,total:h.a.number.isRequired,positivePercentage:h.a.number.isRequired};var N=n(11),F=n.n(N),y=function(){return Object(m.jsx)("h2",{className:F.a.given,children:"No feedback given"})},P=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.heandleIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){for(var t=0,n=0;n<Object.values(e.state).length;n+=1)t+=Object.values(e.state)[n];return t},e.countPositiveFeedbackPercentage=function(){for(var t=0,n=0;n<Object.values(e.state).length;n+=1)t+=Object.values(e.state)[n];var a=e.state.good/t*100;return Math.round(a)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{title:"Please leave feedback",className:v.a.section,children:Object(m.jsx)(g,{onIncrement:this.heandleIncrement})}),this.countTotalFeedback()?Object(m.jsx)(p,Object(s.a)(Object(s.a)({},this.state),{},{total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})):Object(m.jsx)(y,{message:"No feedback given"})]})}}]),n}(c.a.Component),B=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(P,{})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={title:"Button_title__20oCd",section:"Button_section__1YraF",click:"Button_click__3X9ch",good:"Button_good__1Val7",neutral:"Button_neutral__1rjea",bad:"Button_bad__1xim-"}},7:function(e,t,n){e.exports={list:"ListFeed_list__2vy8a",title:"ListFeed_title__1H7ul"}}},[[21,1,2]]]);
//# sourceMappingURL=main.131b9e2a.chunk.js.map