(this["webpackJsonpyugen-torres"]=this["webpackJsonpyugen-torres"]||[]).push([[0],{122:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(21),i=n.n(r),o=(n(122),n(17)),s=n(146),l=n(101),d=n(173),u=n(174),j=n(106),b=n(24),x=n(19),m="yugen/home",h="yugen/product/:id",O="/category/:id",f="yugen/cart",g="yugen/checkout",p=n(1),y=n.n(p),v=n(25),k=n(6),C=n(154),N=n(155),F=n(175),w=n(152),B=n(100),E=n.n(B),W=n(48),I=n(4),D=c.a.createContext({}),S=function(t){var e=t.children,n=Object(a.useState)([]),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(0),l=Object(o.a)(s,2),d=l[0],u=l[1];Object(a.useEffect)((function(){b()}),[r]);var j=function(t){return null===r||void 0===r?void 0:r.some((function(e){return e.id===t}))},b=function(){var t=0;r.forEach((function(e){return t+=e.quantity})),u(t)};return Object(I.jsx)(D.Provider,{value:{products:r,addProduct:function(t,e){j(t.id)||(i([].concat(Object(W.a)(r),[Object(v.a)({quantity:e},t)])),u((function(t){return t+e})))},removeProduct:function(t){var e=r.find((function(e){return e.id===t}));u((function(t){return t-e.quantity})),i(null===r||void 0===r?void 0:r.filter((function(e){return e.id!==t})))},clearCart:function(){i([])},isInCart:j,totalProducts:d,removeOne:function(t){var e=r.map((function(e){return e.id===t&&e.quantity>1?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity-1}):e}));i(e)},addOne:function(t){var e=r.map((function(e){return e.id===t&&e.quantity<=e.stock?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity+1}):e}));i(e)}},children:e})},T=n(93),A=n(26),R=Object(T.a)({apiKey:"AIzaSyA5K62UAXGQWcJ1Grc862KEzPg3cIfCrl4",authDomain:"yugen-b5710.firebaseapp.com",projectId:"yugen-b5710",storageBucket:"yugen-b5710.appspot.com",messagingSenderId:"990853211247",appId:"1:990853211247:web:5b167f289a3f91288b999a"}),P=Object(A.e)(R),q=n(147),z=n(149),L=n(150),M=n(151),U=n(9),G=Object(s.a)({list:{width:200},fullList:{width:"auto"},link:{textDecoration:"none",color:"inherit"}}),Q=function(t){var e=t.categories,n=G();return Object(I.jsx)("div",{className:Object(U.a)(n.list),role:"presentation",children:Object(I.jsx)(q.a,{children:e.map((function(t){return Object(I.jsxs)(z.a,{button:!0,children:[t.icon&&Object(I.jsx)(L.a,{children:t.icon}),Object(I.jsx)(b.c,{to:"/category/".concat(t.id),className:n.link,children:t.name})]},t.id)}))})})},$=function(t){var e=t.state,n=t.setState,a=t.categories;return Object(I.jsx)(M.a,{anchor:"left",open:e,onClose:function(){return n((function(t){return n(!t)}))},children:Object(I.jsx)(Q,{categories:a})})},Y=n(153),H=n(99),J=n.n(H),K=n(107),V=Object(K.a)({link:{textDecoration:"none",color:"inherit"}}),X=function(){var t=Object(a.useContext)(D).totalProducts,e=V();return Object(I.jsx)(w.a,{color:"inherit",children:Object(I.jsx)(Y.a,{badgeContent:t,color:"secondary",children:Object(I.jsx)(b.b,{to:f,className:e.link,children:Object(I.jsx)(J.a,{})})})})},Z=Object(s.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1,justifyContent:"center",alignContent:"center",textDecoration:"none",color:"white",fontSize:"1.7em"},content:{display:"flex",flexDirection:"row",alignItems:"center"},navbar:{display:"flex",justifyContent:"space-between",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},widget:{alignSelf:"end"}}})),_=function(){var t=Z(),e=Object(a.useState)(!1),n=Object(o.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(a.useContext)(D).products;Object(a.useEffect)((function(){j()}),[]);var j=function(){var t=Object(k.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=Object(A.a)(P,"categories"),Object(A.d)(e).then((function(t){t.empty?console.error("No hay categorias"):d(t.docs.map((function(t){return Object(v.a)({fsId:t.id},t.data())})))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)(C.a,{position:"sticky",children:[Object(I.jsxs)(N.a,{className:t.navbar,children:[Object(I.jsxs)(F.a,{className:t.content,children:[Object(I.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"menu",className:t.menuButton,onClick:function(){return r(!0)},children:Object(I.jsx)(E.a,{})}),Object(I.jsx)(b.b,{to:m,variant:"h6",className:t.title,children:"\u5e7d\u7384"})]}),u.length>0&&Object(I.jsx)(X,{className:t.widget})]}),Object(I.jsx)($,{state:c,setState:r,categories:l})]})},tt=n(160),et=n(167),nt=n(169),at=n(170),ct=n(171),rt=n(156),it=n(158),ot=n(157),st=n(159),lt=Object(s.a)((function(t){return{countRoot:{padding:"2px 4px",display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"12em",width:"100%"},input:{textAlign:"center",flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),dt=function(t){var e=t.addItem,n=t.removeItem,a=t.itemCount,c=t.stock,r=lt();return Object(I.jsxs)(F.a,{className:r.countRoot,children:[Object(I.jsx)(w.a,{className:r.iconButton,onClick:function(){return n()},disabled:1===a,children:Object(I.jsx)(ot.a,{})}),Object(I.jsx)(it.a,{className:r.divider,orientation:"vertical"}),Object(I.jsx)(j.a,{className:r.input,variation:"body2",children:a}),Object(I.jsx)(it.a,{className:r.divider,orientation:"vertical"}),Object(I.jsx)(w.a,{className:r.iconButton,onClick:function(){return e()},disabled:a>=c,children:Object(I.jsx)(st.a,{})})]})},ut=Object(s.a)((function(t){return{root:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"1.5em"},button:{fontWeight:"600",color:"white",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,maxWidth:"15em",width:"100%",marginTop:"0.5em",textTransform:"none"}}})),jt=function(t){var e=t.stock,n=t.itemCount,a=t.setItemCount,c=t.onAdd,r=ut();return Object(I.jsxs)("div",{className:r.root,children:[Object(I.jsx)(dt,{addItem:function(){a((function(t){return t<e?t+1:t}))},removeItem:function(){a((function(t){return t>1?t-1:1}))},itemCount:n,stock:e}),Object(I.jsx)(tt.a,{size:"medium",className:r.button,onClick:c,disabled:0===e,children:"add to cart"})]})},bt=n(168),xt=n(104),mt=n(161),ht=Object(s.a)((function(t){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},backdrop:{zIndex:t.zIndex.drawer+1,color:"#fff"},spinner:{color:"#ff8e53"},text:{color:"ivory",fontWeight:"bold"}}})),Ot=function(t){var e=t.state,n=ht();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(xt.a,{className:n.backdrop,open:e,children:Object(I.jsxs)("div",{className:n.root,children:[Object(I.jsx)(mt.a,{className:n.spinner}),Object(I.jsx)(j.a,{variant:"h6",className:n.text,children:"Getting everything ready!"})]})})})},ft=n(162),gt=n(134),pt=n(163),yt=n(164),vt=n(165),kt=n(166),Ct=Object(s.a)({buttonContainer:{display:"flex",justifyContent:"center",padding:"0 0 1.5em"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,color:"white",maxWidth:"10em",width:"100%",textTransform:"none",fontWeight:"600"},link:{textDecoration:"none",color:"inherit"}}),Nt=Object(rt.a)(ft.a)((function(t){t.theme;return{"& .MuiTypography-h6":{fontSize:"1.5em",textAlign:"center",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"600"},"& .MuiDialogContentText-root":{fontSize:"1em",textAlign:"center",color:"slategrey",fontWeight:"500"}}})),Ft=function(t){var e=t.open,n=t.setOpen,a=t.itemCount,r=c.a.forwardRef((function(t,e){return Object(I.jsx)(gt.a,Object(v.a)({direction:"up",ref:e},t))})),i=Ct();return Object(I.jsxs)(Nt,{open:e,TransitionComponent:r,onClose:function(){n(!1)},children:[Object(I.jsx)(pt.a,{className:i.title,children:"Product added to cart!"}),Object(I.jsx)(yt.a,{children:Object(I.jsxs)(vt.a,{children:[a," ",a>1?"products were":"product was"," added to the cart. How would you like to continue?"]})}),Object(I.jsxs)(kt.a,{className:i.buttonContainer,children:[Object(I.jsx)(tt.a,{className:i.button,children:Object(I.jsx)(b.b,{to:"/home",className:i.link,children:"keep shopping"})}),Object(I.jsx)(tt.a,{className:i.button,children:Object(I.jsx)(b.b,{to:"/cart",className:i.link,children:"finish my order"})})]})]})},wt=Object(s.a)({root:{display:"flex",justifyContent:"space-around"},content:{display:"flex",flexDirection:"row",justifyContent:"space-around",maxWidth:"70em",maxHeight:"40em"},imageContainer:{maxWidth:"35em"},detailContainer:{display:"flex",flexDirection:"column",justifyContent:"center",overflowY:"auto"},cardContent:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},title:{textAlign:"center",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"600"},description:{whiteSpace:"pre-wrap",padding:"2em",textAlign:"left"},price:{textAlign:"center",color:"white",background:"linear-gradient(45deg, #FF8E53 50%, #FE6B8B 90%)",width:"100%",opacity:"65%",borderRadius:"10px",maxWidth:"10em"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white"},onCartBox:{display:"flex",flexDirection:"column",alignItems:"center"},onCartButton:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:10,color:"white",fontWeight:"bold",maxWidth:"13em",width:"100%",margin:"1em 0 1.5em",textAlign:"center",fontFamily:"Quicksand"},link:{textDecoration:"none",color:"inherit",fontWeight:"600"},count:{margin:"0.5em 0"}}),Bt=function(t){var e=t.setLoading,n=t.loading,c=Object(x.h)().id,r=Object(x.g)(),i=wt(),s=Object(a.useContext)(D),l=s.addProduct,d=s.isInCart,u=Object(a.useState)({}),m=Object(o.a)(u,2),h=m[0],O=m[1],g=Object(a.useState)(!1),p=Object(o.a)(g,2),C=p[0],N=p[1],w=Object(a.useState)(1),B=Object(o.a)(w,2),E=B[0],W=B[1];Object(a.useEffect)((function(){e(!0),T(c)}),[]);var S=Object(rt.a)(tt.a)((function(t){t.theme;return{"& .MuiButton-label":{fontFamily:"Quicksand",textTransform:"none"}}})),T=function(){var t=Object(k.a)(y.a.mark((function t(n){var a,c,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(A.b)(P,"products",n),t.next=3,Object(A.c)(a);case 3:(c=t.sent).exists()?(r=R(c),O(r),e(!1)):(console.log("No such document!"),e(!1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(t){var e=t.data();return Object(v.a)(Object(v.a)({},e),{},{description:e.description.replaceAll("\\n","\n")})};return n?Object(I.jsx)(Ot,{state:n}):Object(I.jsxs)(F.a,{className:i.root,children:[Object(I.jsx)(et.a,{className:i.button,onClick:function(){return r.goBack()},children:Object(I.jsx)(bt.a,{})}),Object(I.jsxs)(nt.a,{className:i.content,children:[Object(I.jsx)(at.a,{component:"img",className:i.imageContainer,image:h.imageUrl,alt:h.title}),Object(I.jsxs)(F.a,{className:i.detailContainer,children:[Object(I.jsxs)(ct.a,{className:i.cardContent,children:[Object(I.jsx)(j.a,{component:"div",variant:"h3",className:i.title,children:h.title}),Object(I.jsx)(F.a,{className:i.description,children:Object(I.jsx)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:h.description})}),Object(I.jsxs)(j.a,{variant:"h5",className:i.price,children:["$",h.price]})]}),d(h.id)?Object(I.jsx)(F.a,{className:i.onCartBox,children:Object(I.jsx)(S,{size:"medium",className:i.onCartButton,children:Object(I.jsx)(b.b,{to:f,className:i.link,children:"go to cart!"})})}):Object(I.jsx)(jt,{stock:h.stock,onAdd:function(){return l(h,E),void N(!0)},itemCount:E,setItemCount:W})]})]}),C&&Object(I.jsx)(Ft,{open:C,setOpen:N,itemCount:E})]})},Et=n(172),Wt=Object(s.a)({root:{maxWidth:345,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",margin:"1em"},media:{height:250},productText:{textAlign:"center"},openButton:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,color:"white",maxWidth:"15em",width:"100%",marginTop:"auto",marginBottom:"1em",padding:"0.5em",textDecoration:"none !important",textAlign:"center",fontFamily:"Quicksand",fontWeight:"600"},title:{fontWeight:"600",color:"slategrey"}}),It=function(t){var e=t.product,n=Wt();return Object(I.jsxs)(nt.a,{className:n.root,children:[Object(I.jsxs)(Et.a,{children:[Object(I.jsx)(at.a,{className:n.media,image:e.imageUrl,title:e.title}),Object(I.jsxs)(ct.a,{className:n.productText,children:[Object(I.jsx)(j.a,{gutterBottom:!0,variant:"h6",component:"h2",className:n.title,children:e.title}),Object(I.jsxs)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:["$",e.price]})]})]}),Object(I.jsx)(b.b,{to:"/product/".concat(e.fsId),className:n.openButton,children:"more"})]})},Dt=Object(s.a)({catalog:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",flexWrap:"wrap"}}),St=function(t){var e=t.products,n=Dt();return Object(I.jsx)("div",{className:n.catalog,children:e.map((function(t){return Object(I.jsx)(It,{product:t},t.title)}))})};St.defaultProps={products:[]};var Tt=St,At=function(t){var e=t.setLoading,n=t.loading,c=Object(a.useState)([]),r=Object(o.a)(c,2),i=r[0],s=r[1];Object(a.useEffect)((function(){e(!0),l()}),[]);var l=function(){var t=Object(k.a)(y.a.mark((function t(){var n,a,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a=Object(A.a)(P,"products"),c=Object(A.h)(a,Object(A.g)("title"),Object(A.f)(6)),t.next=5,Object(A.d)(c);case 5:t.sent.forEach((function(t){n.push(Object(v.a)(Object(v.a)({},t.data()),{},{fsId:t.id}))})),s(n),e(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n?Object(I.jsx)(Ot,{state:n}):Object(I.jsxs)(F.a,{children:[Object(I.jsx)(Tt,{products:i}),Object(I.jsx)(Ot,{state:n})]})},Rt=function(t){var e=t.setLoading,n=t.loading,c=Object(x.h)().id,r=Object(a.useState)([]),i=Object(o.a)(r,2),s=i[0],l=i[1];Object(a.useEffect)((function(){c&&(e(!0),d())}),[c]);var d=function(){var t=Object(k.a)(y.a.mark((function t(){var n,a,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],a=Object(A.a)(P,"products"),r=Object(A.h)(a,Object(A.i)("categories","array-contains",parseInt(c))),t.next=5,Object(A.d)(r);case 5:t.sent.forEach((function(t){n.push(Object(v.a)(Object(v.a)({},t.data()),{},{fsId:t.id}))})),l(n),e(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n?Object(I.jsx)(Ot,{state:n}):Object(I.jsx)(F.a,{children:Object(I.jsx)(Tt,{products:s})})},Pt=Object(s.a)({row:{display:"flex",minWidth:"35em",maxWidth:"40em",margin:"0.5em"},image:{maxWidth:"12em"},detail:{display:"flex",flexDirection:"column",justifyContent:"center",minWidth:"22em",width:"100%"},count:{display:"flex",justifyContent:"space-between"},title:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textAlign:"start",fontWeight:"600"},price:{color:"grey"},divider:{margin:"1em 0",maxWidth:"42em"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white",fontWeight:"600",textTransform:"none"}}),qt=function(t){var e=t.product,n=t.isLast,c=Pt(),r=Object(a.useContext)(D),i=r.addOne,o=r.removeOne,s=r.removeProduct;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(nt.a,{className:c.row,children:[Object(I.jsx)(at.a,{component:"img",image:e.imageUrl,alt:e.title,className:c.image}),Object(I.jsxs)(ct.a,{sx:{flex:"1 0 auto"},className:c.detail,children:[Object(I.jsx)(j.a,{component:"div",variant:"h5",className:c.title,children:e.title}),Object(I.jsxs)(j.a,{component:"div",variant:"h6",className:c.price,children:["$",e.price*e.quantity]}),Object(I.jsxs)(F.a,{className:c.count,children:[Object(I.jsx)(dt,{itemCount:e.quantity,addItem:function(){return i(e.id)},removeItem:function(){return o(e.id)},stock:e.stock}),Object(I.jsx)(et.a,{size:"small",className:c.button,onClick:function(){return s(e.id)},children:Object(I.jsx)(ot.a,{})})]})]})]}),!n&&Object(I.jsx)(it.a,{className:c.divider})]})},zt=function(t){var e=t.products;return Object(I.jsx)(I.Fragment,{children:e.map((function(t,n){return Object(I.jsx)(qt,{product:t,isLast:n===e.length-1},t.id)}))})},Lt=Object(K.a)({container:{display:"flex",flexDirection:"column",alignItems:"center"},link:{textDecoration:"none",color:"inherit"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,color:"white",fontVariantCaps:"all-small-caps",maxWidth:"15em",width:"100%",margin:"2em"}}),Mt=function(){var t=Lt();return Object(I.jsxs)(F.a,{className:t.container,children:[Object(I.jsx)(j.a,{variant:"h3",children:"Nothing on the cart yet! (\uff61\u2022\u02c7\u2038\u02c7\u2022\uff61)"}),Object(I.jsx)(tt.a,{className:t.button,children:Object(I.jsx)(b.b,{to:m,className:t.link,children:" Go to main page "})})]})},Ut=Object(K.a)({border:{margin:"0.5em",padding:"0.5em"},title:{background:"linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textAlign:"start",fontWeight:"bold"},content:{display:"flex",flexDirection:"row",color:"grey",justifyContent:"space-between"},total:{background:"linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textAlign:"start",display:"flex",flexDirection:"row",color:"grey",justifyContent:"space-between",marginTop:"0.3em"},accent:{fontWeight:"bold"}}),Gt=function(t){var e=t.products,n=t.totalProducts,a=Ut(),c=function(){var t=0;return e.forEach((function(e){return t+=e.price*e.quantity})),Math.round(100*(t+Number.EPSILON))/100};return Object(I.jsxs)(nt.a,{className:a.border,children:[Object(I.jsx)(j.a,{variant:"h6",className:a.title,children:"YOUR ORDER SUMMARY"}),Object(I.jsxs)(F.a,{className:a.content,children:[Object(I.jsxs)(j.a,{variant:"body2",children:[n," products"]}),Object(I.jsxs)(j.a,{variant:"body2",children:["$",c()]})]}),Object(I.jsxs)(F.a,{className:a.total,children:[Object(I.jsx)(j.a,{variant:"body1",className:a.accent,children:"Total"}),Object(I.jsxs)(j.a,{variant:"body2",className:a.accent,children:["$",c()]})]})]})},Qt=Object(s.a)({container:{display:"flex",flexDirection:"row"},title:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textAlign:"start",fontWeight:"bold",marginBottom:"1em"},summaryContainer:{display:"flex",flexDirection:"column",alignItems:"center"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,color:"white",maxWidth:"15.5em",width:"100%",padding:"1em",textAlign:"center",fontSize:"1em",textTransform:"none",fontWeight:"bold",boxShadow:"2px 2px 5px lightslategrey"},fab:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,color:"white",margin:"0 1.5em",maxWidth:"3em",maxHeight:"3em"},link:{textDecoration:"none",color:"inherit"}}),$t=function(){var t=Object(a.useContext)(D),e=t.products,n=t.totalProducts,c=Qt(),r=Object(x.g)();return e.length>0?Object(I.jsxs)(F.a,{className:c.container,children:[Object(I.jsx)(et.a,{onClick:function(){return r.goBack()},className:c.fab,children:Object(I.jsx)(bt.a,{fontSize:"small"})}),Object(I.jsxs)(F.a,{children:[Object(I.jsx)(j.a,{variant:"h4",className:c.title,children:"YOUR CART"}),Object(I.jsxs)(F.a,{className:c.container,children:[Object(I.jsx)(F.a,{children:Object(I.jsx)(zt,{products:e})}),Object(I.jsxs)(F.a,{className:c.summaryContainer,children:[Object(I.jsx)(Gt,{products:e,totalProducts:n}),Object(I.jsx)(tt.a,{className:c.button,children:Object(I.jsx)(b.b,{to:g,className:c.link,children:"proceed to checkout!"})})]})]})]})]}):Object(I.jsx)(Mt,{})},Yt=Object(s.a)({appContainer:{display:"flex",flexDirection:"column"},content:{marginTop:"3.5em"}}),Ht=function(){var t=Yt(),e=Object(a.useState)(!0),n=Object(o.a)(e,2),c=n[0],r=n[1],i=Object(l.a)({typography:{fontFamily:["Quicksand","sans-serif"].join(",")}});return Object(I.jsx)(b.a,{children:Object(I.jsx)(d.a,{theme:i,children:Object(I.jsxs)(S,{children:[Object(I.jsx)(_,{}),Object(I.jsx)(u.a,{className:t.content,fixed:!0,children:Object(I.jsxs)(x.d,{children:[Object(I.jsx)(x.b,{path:m,children:Object(I.jsx)(At,{setLoading:r,loading:c})}),Object(I.jsx)(x.b,{path:h,children:Object(I.jsx)(Bt,{setLoading:r,loading:c})}),Object(I.jsx)(x.b,{path:O,children:Object(I.jsx)(Rt,{setLoading:r,loading:c})}),Object(I.jsx)(x.b,{path:f,children:Object(I.jsx)($t,{})}),Object(I.jsx)(x.b,{path:g,children:Object(I.jsx)(j.a,{variant:"h2",children:"Checkout in progress! (\xb4\uff61\u2022 \u25e1 \u2022\uff61`) \u2661"})}),Object(I.jsx)(x.b,{exact:!0,path:"/yugen",children:Object(I.jsx)(x.a,{to:m})}),Object(I.jsx)(x.b,{path:"*",children:Object(I.jsx)(j.a,{variant:"h2",children:"Not found! (\uff61\u2022\u0301\ufe3f\u2022\u0300\uff61) "})})]})})]})})})},Jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Ht,{})}),document.getElementById("root")),Jt()}},[[131,1,2]]]);
//# sourceMappingURL=main.b94146f9.chunk.js.map