(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/1.a2fdc099.jpg"},function(e,a,t){e.exports=t.p+"static/media/2.b4b019eb.jpg"},function(e,a,t){e.exports=t.p+"static/media/3.bf18f5d6.jpg"},function(e,a,t){e.exports=t.p+"static/media/4.402741f5.jpg"},function(e,a,t){e.exports=t.p+"static/media/5.3d7a701f.jpg"},function(e,a,t){e.exports=t.p+"static/media/6.0fa4db6c.jpg"},function(e,a,t){e.exports=t.p+"static/media/7.bc40f8ba.jpg"},function(e,a,t){e.exports=t.p+"static/media/8.52a968e1.jpg"},function(e,a,t){e.exports=t.p+"static/media/9.aa0c6026.jpg"},function(e,a,t){e.exports=t.p+"static/media/10.e6255fe6.jpg"},function(e,a,t){e.exports=t.p+"static/media/11.e40e67b4.jpg"},function(e,a,t){e.exports=t.p+"static/media/12.7e9c0fe3.jpg"},function(e,a,t){e.exports=t.p+"static/media/13.79525cbb.jpg"},function(e,a,t){e.exports=t.p+"static/media/14.4ec3cff6.jpg"},function(e,a,t){e.exports=t.p+"static/media/15.f70e0cc2.jpg"},function(e,a,t){e.exports=t.p+"static/media/16.437541ff.jpg"},function(e,a,t){e.exports=t.p+"static/media/17.4468fd00.jpg"},function(e,a,t){e.exports=t.p+"static/media/18.1a5cb077.jpg"},function(e,a,t){e.exports=t.p+"static/media/19.c34505e1.jpg"},function(e,a,t){e.exports=t.p+"static/media/20.fe5fd9c9.jpg"},,,,,function(e,a,t){e.exports=t(38)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),s=t(28),r=t.n(s),c=(t(36),t(1)),i=t(2),l=t(4),p=t(3),d=t(5),u=t(6),h=t.n(u),m=t(7),g=t.n(m),f=t(8),b=t.n(f),k=t(9),v=t.n(k),y=t(10),w=t.n(y),j=t(11),S=t.n(j),O=t(12),x=t.n(O),C=t(13),E=t.n(C),P=t(14),T=t.n(P),B=t(15),N=t.n(B),G=t(16),I=t.n(G),A=t(17),z=t.n(A),R=t(18),F=t.n(R),M=t(19),D=t.n(M),W=t(20),J=t.n(W),H=t(21),L=t.n(H),q=t(22),Y=t.n(q),_=t(23),K=t.n(_),V=t(24),Q=t.n(V),U=t(25),$=t.n(U),X=function(e){function a(){var e,t;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={image:[h.a,g.a,b.a,v.a,w.a,S.a,x.a,E.a,T.a,N.a,I.a,z.a,F.a,D.a,J.a,L.a,Y.a,K.a,Q.a,$.a]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props.recipes,t=a.title,o=a.id,s=this.state.image;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{padding:"5px"},className:"col-10 mx-auto col-md-6 col-lg-3 my-3"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{style:{height:"14rem"},className:"img-card-top img-responsive img-rounded",src:s[o-1],alt:"recipe"}),n.a.createElement("h2",{style:{textAlign:"center"},className:"fontTwo"},t),n.a.createElement("div",{className:"card-footer"},n.a.createElement("button",{onClick:function(){return e.props.displayDetails(0,o)},style:{fontWeight:"bolder"},className:"btn btn-primary text-capitalize fontOne"},"Recipe details")))))}}]),a}(o.Component),Z=t(40),ee=function(e){function a(){var e,t;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).state={image:[h.a,g.a,b.a,v.a,w.a,S.a,x.a,E.a,T.a,N.a,I.a,z.a,F.a,D.a,J.a,L.a,Y.a,K.a,Q.a,$.a]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.image,a=this.props.handleIndex,t=this.props.recipes,o=t.id,s=t.title,r=t.ingredients;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-6"},n.a.createElement("button",{style:{margin:"10px"},onClick:function(){return a(1)},className:"btn btn-success text-capitalize fontOne"},"Back to recipe list"),n.a.createElement(Z.a,{src:e[o-1],rounded:!0,fluid:!0})),n.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-6"},n.a.createElement("h2",{style:{fontWeight:"bolder"},className:"fontTwo"},s),n.a.createElement("ul",{className:"list-group mt-4"},n.a.createElement("h3",{className:"fontFive"},"Ingredients"),r.map(function(e,a){return n.a.createElement("li",{key:a,className:"list-group-item fontFour"},e)}))))))}}]),a}(o.Component),ae=[{id:1,title:"Jalapeno Popper Grilled Cheese Sandwich",ingredients:["2 jalapeno peppers, cut in half lengthwise and seeded","2 slices sour dough bread","1 tablespoon butter, room temperature","2 tablespoons cream cheese, room temperature","1/2 cup jack and cheddar cheese, shredded","1 tablespoon tortilla chips, crumbled"]},{id:2,title:"Perfect Iced Coffee",ingredients:["1 pound Ground Coffee (good, Rich Roast)","8 quarts Cold Water","Half-and-half (healthy Splash Per Serving)","Sweetened Condensed Milk (2-3 Tablespoons Per Serving)","Note: Can Use Skim Milk, 2% Milk, Whole Milk, Sugar, Artificial Sweeteners, Syrups...adapt To Your Liking!"]},{id:3,title:"Crash Hot Potatoes",ingredients:["12 whole New Potatoes (or Other Small Round Potatoes)","3 Tablespoons Olive Oil","Kosher Salt To Taste","Black Pepper To Taste","Rosemary (or Other Herbs Of Choice) To Taste"]},{id:4,title:"Stovetop Avocado Mac and Cheese",ingredients:["10 ounces dry elbow macaroni","2 cloves garlic, minced","2 avocados, peeled and pitted","2 tablespoons fresh lime juice","1/3 cup chopped fresh cilantro","Salt and pepper, to taste","2 tablespoons butter","2 tablespoons all-purpose flour","1 cup milk","2 cups shredded Pepper Jack cheese","Salt and pepper, to taste","Fresh avocado chunks, for garnish, if desired"]},{id:5,title:"Buffalo Chicken Grilled Cheese Sandwich",ingredients:["1/4 cup cooked shredded chicken, warm","1 tablespoon hot sauce","1/2 tablespoon mayo (optional)","1 tablespoon carrot, grated","1 tablespoon celery, sliced","1 tablespoon green or red onion, sliced or diced","1 tablespoon blue cheese, room temperature, crumbled","1/2 cup cheddar cheese, room temperature, grated","2 slices bread","1 tablespoon butter, room temperature"]},{id:6,title:"Magic Sauce",ingredients:["1/2 cup extra-virgin olive oil","1 teaspoon fresh rosemary leaves","1 teaspoon fresh thyme leaves","1 teaspoon fresh oregano leaves","2 teaspoons sweet paprika","2 medium cloves of garlic, smashed into a paste","1 well-crumbled bay leaf","pinch of red pepper flakes","1/4 teaspoon + fine grain sea salt","1 tablespoon fresh lemon juice"]},{id:7,title:"Cinnamon Rolls",ingredients:["1 quart Whole Milk","1 cup Vegetable Oil","1 cup Sugar","2 packages Active Dry Yeast, 0.25 Ounce Packets","8 cups (Plus 1 Cup Extra, Separated) All-purpose Flour","1 teaspoon (heaping) Baking Powder","1 teaspoon (scant) Baking Soda","1 Tablespoon (heaping) Salt","Plenty Of Melted Butter","2 cups Sugar","Generous Sprinkling Of Cinnamon"]},{id:8,title:"Best Pizza Dough Ever",ingredients:["4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled","1 3/4 (.44 ounce) teaspoons salt","1 teaspoon (.11 ounce) instant yeast","1/4 cup (2 ounces) olive oil (optional)","1 3/4 cups (14 ounces) water, ice cold (40F)","Semolina flour OR cornmeal for dusting"]},{id:9,title:"Spicy Dr. Pepper Shredded Pork",ingredients:["1 whole Large Onion","1 whole Pork Shoulder (pork Butt) - 5 To 7 Pounds","Salt And Freshly Ground Black Pepper","1 can (11 Ounce) Chipotle Peppers In Adobo Sauce","2 cans Dr. Pepper","2 Tablespoons Brown Sugar"]},{id:10,title:"Smashed Chickpea & Avocado Salad Sandwich",ingredients:["1 (15 ounce) can chickpeas or garbanzo beans (I use Bush's Garbanzo Beans)","1 large ripe avocado","1/4 cup fresh cilantro, chopped","2 tablespoons chopped green onion","Juice from 1 lime","Salt and pepper, to taste","Bread of your choice (I use whole wheat bread)","Fresh spinach leaves or other sandwich toppings: lettuce, tomato slices, sprouts, etc."]},{id:11,title:"Parmesan Roasted Potatoes",ingredients:["4 cups cubed Yukon Gold potatoes","3 tbsp olive oil","1/2 tsp garlic salt","1/2 tsp salt","2 tsp paprika","1 tsp pepper","4 tablespoons freshly grated Parmesan cheese","InstructionsPreheat your oven to 425 degrees."]},{id:12,title:"Bacon Wrapped Jalapeno Popper Stuffed Chicken",ingredients:["4 small chicken breasts, pounded thin","salt and pepper to taste","4 jalapenos, diced","4 ounces cream cheese, room temperature","1 cup cheddar cheese, shredded","8 slices bacon"]},{id:13,title:"The Best Chocolate Cake",ingredients:["2 cups sugar","1 3/4 cups all-purpose flour","3/4 cup unsweetened cocoa powder","2 tablespoons King Arthur Flour Black Cocoa, optional","2 teaspoons baking soda","1 teaspoon baking powder","1 teaspoon kosher salt","2 eggs","1 cup buttermilk","1 cup strong black coffee (I used Green Mountain Coffees Vermont Country Blend)","1/2 cup vegetable oil"]},{id:14,title:"Hot Spinach and Artichoke Dip",ingredients:["1/2 (10 ounce) package frozen spinach, thawed, drained and coarsely chopped","1 (14 ounce) can artichoke hearts, drained and coarsely chopped","4 ounces cream cheese, room temperature","1/2 cup sour cream","1/4 cup mayonnaise","1 clove garlic, grated","1/2 teaspoon chili sauce (optional)","1/4 cup grated parmigiano reggiano (parmesan), grated","1/4 cup mozzarella, shredded"]},{id:15,title:"Guinness Chocolate Cheesecake",ingredients:["1 cup graham cracker crumbs","2 tablespoons cocoa powder","1 tablespoon sugar","2 tablespoons butter, melted","12 ounces dark chocolate, chopped","2 tablespoons heavy cream","3 (8 ounce) packages cream cheese","1 cup sugar","1/2 cup sour cream","3 eggs","1 teaspoon vanilla extract","3/4 cup Guinness"]},{id:16,title:"Restaurant Style Salsa",ingredients:["1 can (28 Ounce) Whole Tomatoes With Juice","2 cans (10 Ounce) Rotel (diced Tomatoes And Green Chilies","1/4 cup Chopped Onion","1 clove Garlic, Minced","1 whole Jalapeno, Quartered And Sliced Thin","1/4 teaspoon Sugar","1/4 teaspoon Salt","1/4 teaspoon Ground Cumin","1/2 cup Cilantro (more To Taste!)","1/2 whole Lime Juice"]},{id:17,title:"Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",ingredients:["1 tablespoon vegetable oil","1 pound dried rigatoni","1 quart heavy cream","2 tablespoons chopped fresh rosemary","1 clove fresh garlic, crushed","8 ounces goat cheese","2 cups shredded roasted chicken"]},{id:18,title:"Banana Bread",ingredients:["3 or 4 ripe bananas, smashed","1/3 cup melted butter","1 cup sugar (can easily reduce to 3/4 cup)","1 egg, beaten","1 teaspoon vanilla","1 teaspoon baking soda","Pinch of salt","1 1/2 cups of all-purpose flour"]},{id:19,title:"The Best Lasagna Ever",ingredients:["1-1/2 pound Ground Beef","1 pound Hot Breakfast Sausage","2 cloves Garlic, Minced","2 cans (14.5 Ounce) Whole Tomatoes","2 cans (6 Ounce) Tomato Paste","2 Tablespoons Dried Parsley","2 Tablespoons Dried Basil","1 teaspoon Salt","3 cups Lowfat Cottage Cheese","2 whole Beaten Eggs","1/2 cup Grated (not Shredded) Parmesan Cheese","2 Tablespoons Dried Parsley","1 teaspoon Salt","1 pound Sliced Mozzarella Cheese","1 package (10 Ounce) Lasagna Noodles","(add 1/2 Teaspoon Salt And 1 Tablespoon Olive Oil To Pasta Water)"]},{id:20,title:"Buffalo Chicken Chowder",ingredients:["2 tablespoons butter","1 pound chicken, cut into bite sized pieces","1 onion, diced","2 carrots, diced","2 stalks celery, diced","2 cloves garlic, chopped","1/4 cup flour (rice flour for gluten free)","3 cups chicken stock","hot sauce to taste (I used 1/4 cup Franks Red Hot sauce)","1 large yukon gold or other boiling potato, peeled and cut into bite sized pieces","salt and pepper to taste","1 cup heavy cream","1/4 cup blue cheese, crumbled"]}],te=function(e){function a(){var e,t;Object(c.a)(this,a);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={recipes:ae,details_recipe:{},pageIndex:1},t.displayPage=function(e){switch(e){default:case 1:return t.state.recipes.map(function(e){return n.a.createElement(X,{key:e.id,recipes:e,displayDetails:t.displayDetails})});case 0:return n.a.createElement(ee,{handleIndex:t.handleIndex,recipes:t.state.details_recipe})}},t.displayDetails=function(e,a){var o=t.state.recipes.find(function(e){return e.id===a});t.setState({pageIndex:e,details_recipe:o})},t.handleIndex=function(e){t.setState({pageIndex:e})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{marginTop:"30px"},className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},n.a.createElement("h1",{style:{fontSize:"40px"},className:"fontFive"},"best recipes"))),n.a.createElement("div",{style:{marginTop:"10px"},className:"row"},this.displayPage(this.state.pageIndex))))}}]),a}(o.Component),oe=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"custom-look"},"Recipes for your favourite meals !")}}]),a}(o.Component),ne=(t(37),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(oe,null),n.a.createElement(te,null))}}]),a}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,1,2]]]);
//# sourceMappingURL=main.4c8deabe.chunk.js.map