parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"E737":[function(require,module,exports) {
module.exports=["Neil Patrick Harris (born June 15, 1973) is an American Golden Globe and Emmy-nominated actor. Notable roles in his career include the title character of Doogie Howser, M.D., Barney Stinson in How I Met Your Mother, Col. Carl Jenkins in Starship Troopers, Dr. Horrible of the web series Dr. Horrible's Sing-Along Blog, and as a fictionalized version of himself in Harold & Kumar Go to White Castle, Host From Genius Junior and the sequel Harold & Kumar Escape from Guantanamo Bay.\r\n\r\nHarris is openly gay at first. He confirmed this in November 2006 by saying \"...I am happy to dispel any rumors or misconceptions and am quite proud to say that I am a very content gay man living my life to the fullest and feel most fortunate to be working with wonderful people in the business I love. On September 8, 2014, Harris announced on his Twitter page that David Burtka and he were married over the weekend.[2] Harris has twins, Gideon Scott Burtka-Harris and Harper Grace Burtka-Harris.","In March 2012, 23-year-old Maggie Goldenberger was in the middle of a six-month trip to India and the Philippines with her then-girlfriend. They were travelling from India’s southern tip and heading north for Rajasthan, stopping in at Internet cafes around once a week, for 15 to 30 minutes at a time, just to check in with family and friends.  At one such Internet pit stop, in Hampi, Karnataka, Goldenberger received a message from a friend in the U.S., who wanted to draw her attention to an image she’d spotted on Facebook.","Peter Rasmussen was always able to identify with his patients, particularly in their final moments. But he saw himself especially in a small, businesslike woman with leukemia who came to him in the spring of 2007, not long before he retired. Alice was in her late fifties and lived in a sparsely furnished farmhouse outside Salem, Oregon, where Rasmussen practiced medical oncology. Like him, she was stubborn and practical and independent. She was not the sort of patient who denied what was happening to her or who scrambled after any possibility of a cure, no matter what the cost. As Rasmussen saw it, “She had long ago thought about what was important and valuable to her, and she applied that to the fact that she now had acute leukemia.”\r\n\r\n","Ron Amram has been in the brand marketing business for about 20 years. In the 2000s he was media director for Sprint’s prepaid cellular group, mainly figuring out where the carrier should spend its ad dollars—print, outdoor, digital, or broadcast. TV was always at the top of the pyramid. A TV campaign was like “the Air Force,” Amram says. “You wanted to get your message out, you did carpet bombing.” But TV wasn’t cheap, nor did it solve “that age-old question: Half of my marketing is working, half of it is not, and I don’t know which half.","It was more than five years ago when Lance Armstrong went on Oprah, looked her in the eye, and admitted to the world that his iconic comeback story was fueled by the most comprehensive doping regimen in cycling history. The seven-time Tour de France winner and cancer survivor had spent his career brashly denying that he’d ever doped, going so far as to shoot defiant commercials about how clean he was and shouting down his detractors in public. Armstrong was a fiery champion, one who had succeeded in making Americans care about a far-flung sport simply because he was so dominant and so unapologetic in his mastery of it. And then there he was, flagellating himself on the nation’s biggest talk show, to the nation’s foremost public confessor, and admitting that he’d deceived everyone. It seemed like it was as low as he could go.","At age 8, Jerry Heller was dodging beatings by the Polish kids on the west side of Cleveland. At age 11, he had his first gun: a .26 caliber Mauser a family member had taken off a German soldier in the fields of World War II. He was born and raised in Ohio, the son of a second-generation scrap-metal man who palled around with Jewish mobsters like Moe Dalitz and Shondor “The Bull” Birns. The hardscrabble Midwest reared him good, he believed, stoking the pugnacity that would serve him well later in life.","The packed crowd in the convention hall, lit by red, white, and blue floodlights overhead, listened expectantly to the boyish executive onstage. He asked a question: “If you’re at home and someone kicks in your door and tries to murder you and your family”—the applause was already starting—“should you have the right to defend yourself with a firearm?” Warming to his message, members attending the 145th annual meeting of the National Rifle Association of America, last May, in Louisville, began to roar. Perhaps their feelings were pent up because of the rain outside, or the extra-long lines that had kept them waiting in it, or because the featured speaker of the day, the presumptive Republican presidential nominee, Donald Trump, was rumored to be running late. But the question, from Chris Cox, the executive director of the N.R.A.’s Institute for Legislative Action, was only the beginning."];
},{}],"PhtN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=t(require("./test_text_list.json"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){var e=32,t=1.5,n=document.getElementById("page-test-text");function u(){n.style.fontSize="".concat(e,"px"),n.style.lineHeight="".concat(t)}function o(e,t,n){var u=e.querySelector("input[type='range']"),o=e.querySelector(".range-value");u.value=t;var a=function(){o.textContent=u.value,n(u.value)};u.addEventListener("input",a),a()}o(document.getElementById("range-fontsize"),e,function(t){e=t,u()}),o(document.getElementById("range-line-height"),t,function(e){t=e,u()})}function u(){var t=0,n=document.getElementById("page-test-text");document.getElementById("text-update-button").addEventListener("click",function(){n.textContent=e.default[t],t=(t+1)%e.default.length})}function o(){n(),u()}
},{"./test_text_list.json":"E737"}],"d6sW":[function(require,module,exports) {
"use strict";var t=e(require("./test_page"));function e(t){return t&&t.__esModule?t:{default:t}}!function(){!function(){function t(){var t=window.location.hash?window.location.hash.substring(1):"intro";document.documentElement.setAttribute("page",t)}window.addEventListener("hashchange",t,!1),t()}(),(0,t.default)(),function(){var t=document.querySelectorAll(".image-rotate img"),e=0;function n(){t.forEach(function(t){t.style.display=null}),t[e].style.display="block"}document.querySelector(".image-rotate").addEventListener("click",function(){e=(e+1)%t.length,n()}),n()}()}();
},{"./test_page":"PhtN"}]},{},["d6sW"], null)