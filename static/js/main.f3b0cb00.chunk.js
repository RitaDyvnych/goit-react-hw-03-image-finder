(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(8),s=a.n(c),o=(a(13),a(3)),i=a(4),l=a(6),m=a(5),u=(a(14),a(2)),h=a.n(u),_=a(0),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={find:""},e.handleChangeInput=function(t){e.setState({find:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.find.trim()?(e.props.onSubmit(e.state.find),e.setState({find:""})):alert("Please type searchihg query")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.find;return Object(_.jsx)("header",{className:h.a.Searchbar,children:Object(_.jsxs)("form",{className:h.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(_.jsx)("button",{type:"submit",className:h.a.SearchForm__button,children:Object(_.jsx)("span",{className:h.a.SearchForm__buttonLabel,children:"Search"})}),Object(_.jsx)("input",{className:h.a.SearchForm__input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeInput})]})})}}]),a}(r.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.imgArray.map((function(e){return Object(_.jsx)("li",{className:h.a.ImageGalleryItem,children:Object(_.jsx)("img",{src:e.webformatURL,alt:e.tags,className:h.a.ImageGalleryItem__image})},e.id)}))}}]),a}(r.Component),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imgArray:[],page:1},e.BASE_URL="https://pixabay.com/api/",e.KEY="23189460-aa79835af7cd31cf0c37fbc18",e.per_page=12,e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.searchImg!==this.props.searchImg){var r="".concat(this.BASE_URL,"?image_type=photo&orientation=horizontal&q=").concat(this.props.searchImg,"&page=").concat(this.state.page,"&per_page=").concat(this.per_page,"&key=").concat(this.KEY);return fetch(r).then((function(e){return e.json()})).then((function(e){return a.setState({imgArray:e.hits})}))}}},{key:"render",value:function(){return Object(_.jsx)("ul",{className:h.a.ImageGallery,children:Object(_.jsx)(p,{imgArray:this.state.imgArray})})}}]),a}(r.Component),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(_.jsx)("button",{type:"button",className:h.a.Button,children:"Load more"})}}]),a}(r.Component),y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchImg:"",loading:!1},e.onSubmit=function(t){e.setState({searchImg:t,loading:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(b,{onSubmit:this.onSubmit}),Object(_.jsx)(j,{searchImg:this.state.searchImg}),this.state.loading&&Object(_.jsx)(g,{})]})}}]),a}(r.Component),f=y;s.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(f,{})}),document.getElementById("root"))},2:function(e,t,a){e.exports={Searchbar:"styles_Searchbar__MZQM7",SearchForm:"styles_SearchForm__1UtAm",SearchForm__button:"styles_SearchForm__button__3mzZE",SearchForm__buttonLabel:"styles_SearchForm__buttonLabel__1wo7B",SearchForm__input:"styles_SearchForm__input__37bpK",ImageGallery:"styles_ImageGallery__2VuoT",ImageGalleryItem:"styles_ImageGalleryItem__1XQjo",ImageGalleryItem__image:"styles_ImageGalleryItem__image__3RMIn","ImageGalleryItem-image":"styles_ImageGalleryItem-image__11jwm",Overlay:"styles_Overlay__3VHVn",Modal:"styles_Modal__1k8UN",Button:"styles_Button__2BlLB"}}},[[16,1,2]]]);
//# sourceMappingURL=main.f3b0cb00.chunk.js.map