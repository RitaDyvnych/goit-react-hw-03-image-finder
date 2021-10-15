(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{1:function(e,t,a){e.exports={Searchbar:"styles_Searchbar__MZQM7",SearchForm:"styles_SearchForm__1UtAm",SearchForm__button:"styles_SearchForm__button__3mzZE",SearchForm__buttonLabel:"styles_SearchForm__buttonLabel__1wo7B",SearchForm__input:"styles_SearchForm__input__37bpK",ImageGallery:"styles_ImageGallery__2VuoT",ImageGalleryItem:"styles_ImageGalleryItem__1XQjo",ImageGalleryItem__image:"styles_ImageGalleryItem__image__3RMIn","ImageGalleryItem-image":"styles_ImageGalleryItem-image__11jwm",Overlay:"styles_Overlay__3VHVn",Modal:"styles_Modal__1k8UN",Button:"styles_Button__2BlLB",text:"styles_text__2THab"}},10:function(e){e.exports=JSON.parse('{"base_url":"https://pixabay.com/api/","key":"23189460-aa79835af7cd31cf0c37fbc18","per_page":12}')},27:function(e,t,a){},28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(3),r=a.n(s),n=a(21),c=a.n(n),o=(a(27),a(4)),i=a(5),l=a(7),u=a(6),h=(a(28),a(1)),m=a.n(h),p=a(0),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={find:""},e.handleChangeInput=function(t){e.setState({find:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.find.trim()?(e.props.onSubmit(e.state.find),e.setState({find:""})):alert("Please type searchihg query")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.find;return Object(p.jsx)("header",{className:m.a.Searchbar,children:Object(p.jsxs)("form",{className:m.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:m.a.SearchForm__button,children:Object(p.jsx)("span",{className:m.a.SearchForm__buttonLabel,children:"Search"})}),Object(p.jsx)("input",{className:m.a.SearchForm__input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeInput})]})})}}]),a}(s.Component),b=a(12),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.imgArray.map((function(e){return Object(p.jsx)("li",{className:m.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:e.webformatURL,alt:e.tags,className:m.a.ImageGalleryItem__image})},e.id)}))}}]),a}(s.Component),y=a(22),f=a.n(y),j=a(10),d=new(function(){function e(){Object(o.a)(this,e),this.searchQuery="",this.page=1,this.base_url=j.base_url,this.key=j.key,this.per_page=j.per_page}return Object(i.a)(e,[{key:"resetPage",value:function(){this.page=1}},{key:"pages",get:function(){return this.page},set:function(e){this.page+=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"searchImages",value:function(){var e="".concat(this.base_url,"?image_type=photo&orientation=horizontal&q=").concat(this.searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.per_page,"&key=").concat(this.key);return f.a.get(e).then((function(e){return e.data}))}}]),e}()),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={imgArray:[],page:1,status:"idle"},e.handleClick=function(){d.pages=1,d.searchImages().then((function(t){e.setState((function(e){return{imgArray:[].concat(Object(b.a)(e.imgArray),Object(b.a)(t.hits)),page:d.pages,status:"success"}}))})).catch((function(t){console.log(t),e.setState({status:"error"})})),setTimeout((function(){return e.props.scroll()}),1e3)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.searchImg!==this.props.searchImg&&(this.setState({status:"pending"}),d.resetPage(),d.query=this.props.searchImg,d.searchImages().then((function(e){a.setState({imgArray:e.hits,page:d.pages,status:"success"})})).catch((function(e){console.log(e),a.setState({status:"error"})})))}},{key:"render",value:function(){var e=this.state.imgArray;return"idle"===this.state.status?Object(p.jsx)("p",{className:m.a.text,children:"Hello! Search something"}):"pending"===this.state.status?Object(p.jsx)("p",{className:m.a.text,children:"Wait please!"}):"success"===this.state.status?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:m.a.ImageGallery,children:Object(p.jsx)(_,{imgArray:e})}),Object(p.jsx)("button",{type:"button",onClick:this.handleClick,className:m.a.Button,children:"Load more"})]}):"error"===this.state.status?Object(p.jsx)("p",{className:m.a.text,children:"Ooops! Something went wrong"}):void 0}}]),a}(s.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={searchImg:""},e.onSubmit=function(t){e.setState({searchImg:t}),setTimeout((function(){return e.onPageScroll()}),1e3)},e}return Object(i.a)(a,[{key:"onPageScroll",value:function(){window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(g,{onSubmit:this.onSubmit}),Object(p.jsx)(O,{searchImg:this.state.searchImg,scroll:this.onPageScroll})]})}}]),a}(s.Component),I=S;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.1585687d.chunk.js.map