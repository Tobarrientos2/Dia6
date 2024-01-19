<script context="module" lang="ts">
	import { exReadable } from './../stores/exStore.ts';
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
    import HeroComponent from "../components/HeroComponent.svelte";
    import PointerComponent from "../components/PointerComponent.svelte";
    import StepsComponent from "../components/StepsComponent.svelte";
	import Text from "../components/Text.svelte";
    import HorizontalCards from "../components/HorizontalCards.svelte";

    import { sc_lc1_1Readable, sc_lc2_1Readable } from "../stores/scStore";
    import { tmReadable } from "../stores/tmStore";
    import {sc_lc1_1Unsubscribe, sc_lc2_1Unsubscribe} from "../stores/scStore";

// AA: Member (tm_mb)
let iAAMembers_obj;
let pAAMembersSubscribe = tmReadable.subscribe((data) => {
    iAAMembers_obj = data.tm_mb;
});
let pAAFirstMemberImage_txt = iAAMembers_obj[0].tm_mb_img;
let pAAFirstMemberName_txt = iAAMembers_obj[0].tm_mb1;

// AC: Experiencies (ex)
let iACExperiencies_arr;
let pACExperienciesSubscribe = exReadable.subscribe((data) =>{
    iACExperiencies_arr = data.ex;
});
let pACFirstExperiencie_obj = iACExperiencies_arr[0];
let pACExperiencieCharasteristics_arr = pACFirstExperiencie_obj.ex_dt;
let pACTitleOfCharasteristic_txt = pACExperiencieCharasteristics_arr[0].ex_dt1;
console.log(pACTitleOfCharasteristic_txt);
 
    let iABDataLocacion1_obj;
    let iAAData_arr;
    tmReadable.subscribe((data) => {
        iAAData_arr = data;
    });
 
    //Sacar un valor, de un atributo, de un objeto en un array de objetos
    let pAAFirstPerson_txt = iAAData_arr["tm_mb"][0].tm_mb1;

    // let iAADescripcion_arr = iAAData_obj.map((a) => a.tm2);
    sc_lc1_1Readable.subscribe((data) => {
        iABDataLocacion1_obj = data;
    });
    let pABTitulo_txt = iABDataLocacion1_obj[0].sc_1;
    let pABDescripcion_txt = iABDataLocacion1_obj[0].sc_1;
</script>

<svelte:head>
	<title>{$page.data.page.path || "Inicio"} | </title>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<style>
		.wf-force-outline-none[tabindex="-1"]:focus {
			outline: none;
		}
	</style><meta charset="utf-8" /><title
		>{pAAFirstMemberName_txt}</title
	>
	<meta
		content={pAAFirstPerson_txt}
		name="description"
	/><meta
		content={pACTitleOfCharasteristic_txt}
		property="og:title"
	/><meta
		content={pAAFirstMemberName_txt}
		property="og:description"
	/>
	<!-- <meta
		content="MOZOM DESIGN -LIMITLESS CREATIVE"
		property="twitter:title"
	/><meta
		content="We Are A Boutique Studio ,Award-Winning And Fiverr Pro Seller. Our Team Has Years Of Experience Building Custom Website. Our Ux And Design Team Allows Us To Reinvent Ourselves In Every Project And Provide An Innovative And Creative Result Every Time."
		property="twitter:description"
	/><meta property="og:type" content="website" /><meta
		content="summary_large_image"
		name="twitter:card"
	/> -->
	<meta
		content="width=device-width, initial-scale=1"
		name="viewport"
	/><meta content="Webflow" name="generator" /><link
		href="https://assets-global.website-files.com/649adc9603b0c5dc501ab111/css/mozom1.webflow.78fc87963.css"
		rel="stylesheet"
		type="text/css"
	/><link href="https://fonts.googleapis.com" rel="preconnect" /><link
		href="https://fonts.gstatic.com"
		rel="preconnect"
		crossorigin="anonymous"
	/><script
		src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
		type="text/javascript"
	></script>
	
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7CInconsolata:400,700%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
		media="all"
	/>
	<script type="text/javascript">
		WebFont.load({
			google: {
				families: [
					"Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic",
					"Inconsolata:400,700",
					"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
				],
			},
		});
	</script><script type="text/javascript">
		!(function (o, c) {
			var n = c.documentElement,
				t = " w-mod-";
			(n.className += t + "js"),
				("ontouchstart" in o ||
					(o.DocumentTouch && c instanceof DocumentTouch)) &&
					(n.className += t + "touch");
		})(window, document);
	</script><link
		href="https://assets-global.website-files.com/649adc9603b0c5dc501ab111/64d8b634ada7fb402e23f8ed_6298eb6ac5c10009ea1f1432_Untitled-5.png"
		rel="shortcut icon"
		type="image/x-icon"
	/><link
		href="https://assets-global.website-files.com/649adc9603b0c5dc501ab111/64d8b63a97d68df7677cd66a_6298eb777bb5ecc2f3e84d1a_logo%20mozom.png"
		rel="apple-touch-icon"
	/><style>
		.block {
			overflow: hidden;
		}

		[hover-block="duplicate"] {
			position: absolute;
			top: 0%;
			left: 0%;
			right: 0%;
			bottom: 0%;
		}
	</style>
	<script
		src="https://cdn.userway.org/widget.js"
		data-account="5WCxxvJS9g"
	></script><link
		rel="stylesheet"
		href="https://unpkg.com/splitting/dist/splitting.css"
	/>
	<link
		rel="stylesheet"
		href="https://unpkg.com/splitting/dist/splitting-cells.css"
	/>
	<div class="w-embed">
		<style>
			#canvasContainer {
				position: fixed;
				object-fit: cover;
				top: 0;
				left: 0;
				z-index: -1;
				width: 100%;
				height: 100%;
			}
			#canvasContainer img {
				position: absolute;
			}
			.outline {
				-webkit-text-stroke: 1px white;

				color: transparent;
			}
		</style>
	</div>
	<div class="w-embed">
		<style>
			.pointer {
				pointer-events: none;
			}
		</style>
	</div>
	<div class="global-styles">
		<div class="html w-embed">
			<style>
				/* ALL PAGES CSS */

				/* Main Variables */
				:root {
					--main-dark: black;
					--main-light: white;
				}

				/* Global Styles */
				::selection {
					background: var(--main-light);
					color: var(--main-dark);
					text-shadow: none;
				}
				img::selection,
				svg::selection {
					background: transparent;
				}

				/* Link color inherits from parent font color  */
				a {
					color: inherit;
				}

				/* Disable / enable clicking on an element and its children  */
				.no-click {
					pointer-events: none;
				}
				.can-click {
					pointer-events: auto;
				}

				/* Target any element with a certain "word" in the class name  */
				[class*="spacer"] {
				}
			</style>
		</div>
	</div>
	<div>
		<div id="intro" class="page-wrapper">
			
		</div>
	</div>
	<script
		src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=649adc9603b0c5dc501ab111"
		type="text/javascript"
		integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
		crossorigin="anonymous"
	></script><script
		src="https://assets-global.website-files.com/649adc9603b0c5dc501ab111/js/webflow.19f8a73b5.js"
		type="text/javascript"
	></script><script>
		window.addEventListener("DOMContentLoaded", (event) => {
			$(".hover_component").each(function () {
				let componentEl = $(this),
					triggerEl = componentEl.find(".hover_item"),
					targetEl = componentEl.find(".cursor_list");
				triggerEl.on("mouseenter", function () {
					let triggerIndex = $(this).index();
					targetEl.css(
						"transform",
						`translateY(${triggerIndex * -100}%)`,
					);
				});
			});
		});
	</script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
	></script>
	<script>
		window.addEventListener("DOMContentLoaded", (event) => {
			$('[hover-block="component"]').each(function () {
				let block = $(this);
				let blockContent = block.find(".block-content");
				let blockImg = block.find('[hover-block="img"]');
				let imgColorPrimary = block.attr("hover-block-logo-color");
				let imgColorHover = block.attr(
					"hover-block-logo-color-hover",
				);
				let hoverColor = block.attr("hover-block-hover-color");

				blockImg.css("color", imgColorPrimary);

				blockContent
					.clone()
					.attr("hover-block", "duplicate")
					.appendTo(block);

				let duplicateBlock = block.find(
					'[hover-block="duplicate"]',
				);
				duplicateBlock.css("background-color", hoverColor);
				duplicateBlock
					.find('[hover-block="img"]')
					.css("color", imgColorHover);

				let hoverAnimation = gsap.timeline({ paused: true });

				gsap.set(duplicateBlock, {
					clipPath: `circle(0% at 50% 50%)`,
				});

				$(block).on("mouseenter", function (event) {
					// find coordinates of mouse
					let bounds = event.target.getBoundingClientRect();
					let x = event.clientX - bounds.left;
					let y = event.clientY - bounds.top;
					let blockWidth = block.width();
					let blockHeight = block.height();

					let hoverX = (x / blockWidth) * 100 + "%";
					let hoverY = (y / blockHeight) * 100 + "%";

					hoverAnimation.fromTo(
						duplicateBlock,
						{ clipPath: `circle(0% at ${hoverX} ${hoverY})` },
						{
							clipPath: `circle(141.7% at ${hoverX} ${hoverY})`,
							duration: 0.4,
							ease: "power4.out",
						},
					);

					hoverAnimation.play();
				});

				$(block).on("mouseleave", function (event) {
					// find coordinates of mouse
					let bounds = event.target.getBoundingClientRect();
					let x = event.clientX - bounds.left;
					let y = event.clientY - bounds.top;
					let blockWidth = block.width();
					let blockHeight = block.height();

					let hoverX = (x / blockWidth) * 100 + "%";
					let hoverY = (y / blockHeight) * 100 + "%";

					hoverAnimation.fromTo(
						duplicateBlock,
						{
							clipPath: `circle(141.7% at ${hoverX} ${hoverY})`,
						},
						{
							clipPath: `circle(0% at ${hoverX} ${hoverY})`,
							duration: 0.4,
							ease: "expo.out",
						},
					);

					hoverAnimation.play();
				});
			});
		});
	</script>

	<script>
		const Y_PERCENT = 25;
		const Y_PERCENT_RANDOM_OFFSET_MAX = 15;
		const X_PERCENT = 100;
		const ROTATION_RANDOM_OFFSET_MAX = 15;

		const ACTIVE_COLOR = `#eb4723`;
		const INACTIVE_COLOR = `#eb4723`;

		const ANIMATE_ATTR_NAME = `[wb-exploding-text="animated-text"]`;
		const GENERAL_ATTR_NAME = `[wb-exploding-text]`;

		// interpolates from -X_PERCENT and +X_PERCENT based on string length
		const getXPercent = (strLength, strIndex) => {
			return (X_PERCENT * 2 * strIndex) / (strLength - 1) - X_PERCENT;
		};

		// returns y percent value to translate character
		const getYPercent = (strIndex) => {
			// get a random integer between -Y_PERCENT_OFFSET_MAX and +-Y_PERCENT_OFFSET_MAX
			const randomOffset =
				Math.floor(
					Math.random() * (2 * Y_PERCENT_RANDOM_OFFSET_MAX + 1),
				) - Y_PERCENT_RANDOM_OFFSET_MAX;
			// alternate Y_PERCENT for even/odd characters
			const yPercent =
				strIndex % 2 === 0 ? Y_PERCENT * -1 : Y_PERCENT;

			return yPercent + randomOffset;
		};

		// returns random rotation value between -ROTATION_RANDOM_OFFSET_MAX and +ROTATION_RANDOM_OFFSET_MAX
		const getRandomRotation = () => {
			return (
				Math.floor(
					Math.random() * (2 * ROTATION_RANDOM_OFFSET_MAX + 1),
				) - ROTATION_RANDOM_OFFSET_MAX
			);
		};

		const explodingText = () => {
			// select elements
			const explodingTextElements =
				document.querySelectorAll(ANIMATE_ATTR_NAME);
			const allTextElements =
				document.querySelectorAll(GENERAL_ATTR_NAME);

			// do nothing if we can't find anything
			if (!explodingTextElements) {
				console.warn(`No attributes found: ${ANIMATE_ATTR_NAME}`);
				return;
			}

			explodingTextElements.forEach((explodingTextElement) => {
				// splits the text element into characters
				const splitText = new SplitType(explodingTextElement);
				const chars = splitText.chars;

				// listen for hover event
				explodingTextElement.addEventListener("mouseenter", () => {
					if (!chars) return;

					allTextElements.forEach((el) => {
						// if it matches the element we want to animate
						if (el === explodingTextElement) {
							gsap.to(explodingTextElement, {
								color: ACTIVE_COLOR,
							});
							for (let i = 0; i < chars.length; i++) {
								let xPercent = getXPercent(chars.length, i);
								let yPercent = getYPercent(i);
								let rotateZ = getRandomRotation();
								gsap.to(chars[i], {
									xPercent,
									yPercent,
									rotateZ,
								});
							}
						} else {
							// changes all non-animating elements to INACTIVE COLOR
							gsap.to(el, { color: INACTIVE_COLOR });
						}
					});
				});

				// listen for hover out
				explodingTextElement.addEventListener("mouseleave", () => {
					if (!chars) return;

					// reset characters to original positions
					gsap.to(chars, {
						xPercent: 0,
						yPercent: 0,
						rotateZ: 0,
					});

					// reset color to ACTIVE_COLOR for all text elements
					allTextElements.forEach((el) => {
						gsap.to(el, {
							color: ACTIVE_COLOR,
						});
					});
				});
			});
		};

		document.addEventListener("DOMContentLoaded", explodingText);
	</script>
	<script
		src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"
	></script>
	<script type="module">
		var vertex = `uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float PI = 3.141592653589793238;
void main() {
vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;

		var fragment = `uniform float time;
uniform float progress;
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;


uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;
void main()	{
vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
vec4 color = texture2D(uTexture,newUV);
vec4 offset = texture2D(uDataTexture,vUv);
gl_FragColor = vec4(vUv,0.0,1.);
gl_FragColor = vec4(offset.r,0.,0.,1.);
gl_FragColor = color;
gl_FragColor = texture2D(uTexture,newUV - 0.02*offset.rg);
// gl_FragColor = offset;

}`;

		function clamp(number, min, max) {
			return Math.max(min, Math.min(number, max));
		}

		class Sketch {
			constructor(options) {
				this.scene = new THREE.Scene();

				this.container = options.dom;
				this.img = this.container.querySelector("img");
				this.width = this.container.offsetWidth;
				this.height = this.container.offsetHeight;
				this.renderer = new THREE.WebGLRenderer();
				this.renderer.setPixelRatio(
					Math.min(window.devicePixelRatio, 2),
				);
				this.renderer.setSize(this.width, this.height);
				this.renderer.setClearColor(0xeeeeee, 1);
				this.renderer.physicallyCorrectLights = true;
				this.renderer.outputEncoding = THREE.sRGBEncoding;

				this.container.appendChild(this.renderer.domElement);

				this.camera = new THREE.PerspectiveCamera(
					70,
					window.innerWidth / window.innerHeight,
					0.1,
					100,
				);

				var frustumSize = 1;
				var aspect = window.innerWidth / window.innerHeight;
				this.camera = new THREE.OrthographicCamera(
					frustumSize / -2,
					frustumSize / 2,
					frustumSize / 2,
					frustumSize / -2,
					-1000,
					1000,
				);
				this.camera.position.set(0, 0, 2);

				this.time = 0;

				this.mouse = {
					x: 0,
					y: 0,
					prevX: 0,
					prevY: 0,
					vX: 0,
					vY: 0,
				};

				this.isPlaying = true;
				this.settings();
				this.addObjects();
				this.resize();
				this.render();
				this.setupResize();

				this.mouseEvents();
			}

			getValue(val) {
				return parseFloat(
					this.container.getAttribute("data-" + val),
				);
			}

			mouseEvents() {
				window.addEventListener("mousemove", (e) => {
					this.mouse.x = e.clientX / this.width;
					this.mouse.y = e.clientY / this.height;

					// console.log(this.mouse.x,this.mouse.y)

					this.mouse.vX = this.mouse.x - this.mouse.prevX;
					this.mouse.vY = this.mouse.y - this.mouse.prevY;

					this.mouse.prevX = this.mouse.x;
					this.mouse.prevY = this.mouse.y;

					// console.log(this.mouse.vX,'vx')
				});
			}

			settings() {
				let that = this;
				this.settings = {
					grid: this.getValue("grid") || 34, //generate how many grid
					mouse: this.getValue("mouse") || 0.25, //mouse radius affecting the distortion
					strength: this.getValue("strength") || 1, //higher = more parallax and distorted.
					relaxation: this.getValue("relaxation") || 0.9, //lower = faster pixel re-sorting
					aspectRatio: this.getValue("aspectRatio") || 1.77, //change aspectRatio according to your image size.
				};
			}

			setupResize() {
				window.addEventListener("resize", this.resize.bind(this));
			}

			resize() {
				this.width = this.container.offsetWidth;
				this.height = this.container.offsetHeight;
				this.renderer.setSize(this.width, this.height);
				this.camera.aspect = this.width / this.height;

				// image cover
				//image Aspect depends on your image, change accordingly
				this.imageAspect = 1 / this.settings.aspectRatio;

				let a1;
				let a2;
				if (this.height / this.width > this.imageAspect) {
					a1 = (this.width / this.height) * this.imageAspect;
					a2 = 1;
				} else {
					a1 = 1;
					a2 = this.height / this.width / this.imageAspect;
				}

				this.material.uniforms.resolution.value.x = this.width;
				this.material.uniforms.resolution.value.y = this.height;
				this.material.uniforms.resolution.value.z = a1;
				this.material.uniforms.resolution.value.w = a2;

				this.camera.updateProjectionMatrix();
				this.regenerateGrid();
			}

			regenerateGrid() {
				this.size = this.settings.grid;

				const width = this.size;
				const height = this.size;

				const size = width * height;
				const data = new Float32Array(3 * size);
				const color = new THREE.Color(0xffffff);

				const r = Math.floor(color.r * 255);
				const g = Math.floor(color.g * 255);
				const b = Math.floor(color.b * 255);

				for (let i = 0; i < size; i++) {
					let r = Math.random() * 255 - 125;
					let r1 = Math.random() * 255 - 125;

					const stride = i * 3;

					data[stride] = r;
					data[stride + 1] = r1;
					data[stride + 2] = r;
				}

				// used the buffer to create a DataTexture

				this.texture = new THREE.DataTexture(
					data,
					width,
					height,
					THREE.RGBFormat,
					THREE.FloatType,
				);

				this.texture.magFilter = this.texture.minFilter =
					THREE.NearestFilter;

				if (this.material) {
					this.material.uniforms.uDataTexture.value =
						this.texture;
					this.material.uniforms.uDataTexture.value.needsUpdate = true;
				}
			}

			addObjects() {
				this.regenerateGrid();
				let texture = new THREE.TextureLoader().load(
					this.img.src,
					function () {
						texture.minFilter = THREE.LinearFilter;
						texture.generateMipmaps = false;
						var tex = texture.clone();
						tex.needsUpdate = true;
					},
				);
				this.material = new THREE.ShaderMaterial({
					extensions: {
						derivatives:
							"#extension GL_OES_standard_derivatives : enable",
					},
					side: THREE.DoubleSide,
					uniforms: {
						time: {
							value: 0,
						},
						resolution: {
							value: new THREE.Vector4(),
						},
						uTexture: {
							value: texture,
						},
						uDataTexture: {
							value: this.texture,
						},
					},
					vertexShader: vertex,
					fragmentShader: fragment,
				});
				this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

				this.plane = new THREE.Mesh(this.geometry, this.material);
				this.scene.add(this.plane);

				this.resize();
			}

			updateDataTexture() {
				let data = this.texture.image.data;
				for (let i = 0; i < data.length; i += 3) {
					data[i] *= this.settings.relaxation;
					data[i + 1] *= this.settings.relaxation;
				}

				let gridMouseX = this.size * this.mouse.x;
				let gridMouseY = this.size * (1 - this.mouse.y);
				let maxDist = this.size * this.settings.mouse;
				let aspect = this.height / this.width;

				for (let i = 0; i < this.size; i++) {
					for (let j = 0; j < this.size; j++) {
						let distance =
							(gridMouseX - i) ** 2 / aspect +
							(gridMouseY - j) ** 2;
						let maxDistSq = maxDist ** 2;

						if (distance < maxDistSq) {
							let index = 3 * (i + this.size * j);

							let power = maxDist / Math.sqrt(distance);
							power = clamp(power, 0, 10);
							// if(distance <this.size/32) power = 1;
							// power = 1;

							data[index] +=
								this.settings.strength *
								100 *
								this.mouse.vX *
								power;
							data[index + 1] -=
								this.settings.strength *
								100 *
								this.mouse.vY *
								power;
						}
					}
				}

				this.mouse.vX *= 0.9;
				this.mouse.vY *= 0.9;
				this.texture.needsUpdate = true;
			}

			render() {
				if (!this.isPlaying) return;
				this.time += 0.05;
				this.updateDataTexture();
				this.material.uniforms.time.value = this.time;
				requestAnimationFrame(this.render.bind(this));
				this.renderer.render(this.scene, this.camera);
			}
		}

		new Sketch({
			dom: document.getElementById("canvasContainer"),
		});
	</script>

	<script>
		class TextScramble {
			constructor(el) {
				this.el = el;
				this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				this.update = this.update.bind(this);
			}
			setText(newText) {
				const oldText = this.el.innerText;
				const length = Math.max(oldText.length, newText.length);
				const promise = new Promise(
					(resolve) => (this.resolve = resolve),
				);
				this.queue = [];
				for (let i = 0; i < length; i++) {
					const from = oldText[i] || "";
					const to = newText[i] || "";
					const start = Math.floor(Math.random() * 40);
					const end = start + Math.floor(Math.random() * 40);
					this.queue.push({ from, to, start, end });
				}
				cancelAnimationFrame(this.frameRequest);
				this.frame = 0;
				this.update();
				return promise;
			}
			update() {
				let output = "";
				let complete = 0;
				for (let i = 0, n = this.queue.length; i < n; i++) {
					let { from, to, start, end, char } = this.queue[i];
					if (this.frame >= end) {
						complete++;
						output += to;
					} else if (this.frame >= start) {
						if (!char || Math.random() < 0.28) {
							char = this.randomChar();
							this.queue[i].char = char;
						}
						output += `<span class="dud">${char}</span>`;
					} else {
						output += from;
					}
				}
				this.el.innerHTML = output;
				if (complete === this.queue.length) {
					this.resolve();
				} else {
					this.frameRequest = requestAnimationFrame(this.update);
					this.frame++;
				}
			}
			randomChar() {
				return this.chars[
					Math.floor(Math.random() * this.chars.length)
				];
			}
		}

		//Here is where you can change the words
		const phrases = [
			" creative agency with a knack for finding new ways to do things.",
			"We help connect brands with customers and drive growth by designing elegant and useful.",
			"Our ux and design team allows us to reinvent ourselves in every project and provide an innovative and creative result every time.",
		];

		const el = document.querySelector(".scramble-text");
		const fx = new TextScramble(el);

		let counter = 0;
		const next = () => {
			fx.setText(phrases[counter]).then(() => {
				setTimeout(next, 4000);
			});
			counter = (counter + 1) % phrases.length;
		};

		next();
	</script>
	<script src="https://unpkg.com/split-type"></script>
	<script>
		let typeSplit = new SplitType(".menu_link-text", {
			types: "words, chars",
			tagName: "span",
		});

		function getRandomLetter(length) {
			var result = "";
			var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var charactersLength = characters.length;
			for (var i = 0; i < length; i++) {
				result += characters.charAt(
					Math.floor(Math.random() * charactersLength),
				);
			}
			return result;
		}

		$(".char").each(function (index) {
			let text = $(this).text();
			$(this).attr("letter", text);
		});

		$(".menu_link").each(function (index) {
			function resetText() {
				if (myInterval !== undefined) {
					clearInterval(myInterval);
				}
				chars.each(function (index) {
					let letter = $(this).attr("letter");
					$(this).text(letter);
				});
			}

			let myInterval;
			let chars = $(this).find(".char");
			$(this).on("mouseenter", function () {
				let length = chars.length;
				myInterval = setInterval(function () {
					chars.each(function (index) {
						if (index < length) {
							let letter = getRandomLetter(1);
							$(this).text(letter);
						} else {
							let letter = $(this).attr("letter");
							$(this).text(letter);
						}
					});
					length = length - 1;
				}, 100);
				setTimeout(() => {
					resetText();
				}, 600);
			});
			$(this).on("mouseleave", function () {
				resetText();
			});
		});
	</script>
	<style>
		.line {
			position: relative;
		}
		.line-mask {
			position: absolute;
			top: 0;
			right: 0;
			background-color: black;
			opacity: 0.75;
			height: 100%;
			width: 100%;
			z-index: 2;
		}
	</style>

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
	></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"
	></script>
	<script src="https://unpkg.com/split-type"></script>
	<script>
		let elementsToSplit = $(".split-lines");
		let instancesOfSplit = [];
		// Split the text up
		function runSplit() {
			elementsToSplit.each(function (index) {
				let currentElement = $(this);
				instancesOfSplit[index] = new SplitType(currentElement, {
					types: "lines, words",
				});
			});
			$(".line").each(function (index) {
				$(this).append("<div class='line-mask'></div>");
			});
		}
		runSplit();
		// Update on window resize
		let windowWidth = $(window).innerWidth();
		window.addEventListener("resize", function () {
			if (windowWidth !== $(window).innerWidth()) {
				windowWidth = $(window).innerWidth();
				elementsToSplit.each(function (index) {
					instancesOfSplit[index].revert();
				});
				runSplit();
				createAnimation();
			}
		});

		gsap.registerPlugin(ScrollTrigger);

		function createAnimation() {
			$(".line").each(function (index) {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: $(this),
						// trigger element - viewport
						start: "top center",
						end: "bottom center",
						scrub: 1,
					},
				});
				tl.to($(this).find(".line-mask"), {
					width: "0%",
					duration: 1,
				});
			});
		}
		createAnimation();
	</script>
	<script
		src="https://unpkg.com/splitting/dist/splitting.min.js"
	></script>
	<script src="https://h2l7kn.csb.app/script.js"></script>

	<!-- You can find the complete JS code on Code Sandbox: https://shorturl.at/cefJ5 -->
	<!-- SHUFFLE LETTERS ON LINK HOVER -->

	<!-- SHUFFLE LETTERS ON LINK HOVER -->
	<script>
		const featuredLinks = document.querySelectorAll(
			".featured-work__link",
		);

		featuredLinks.forEach((link) => {
			const textElements = link.querySelectorAll(
				".featured-work__title",
			);
			const originalTexts = Array.from(textElements).map(
				(el) => el.innerText,
			);
			const shufflePerSecond = 4;
			const shuffleDuration = 150;
			const shuffleDelay = shuffleDuration / shufflePerSecond;

			let timeoutId;

			link.addEventListener("mouseenter", () => {
				textElements.forEach((textElement) => {
					const textArray = textElement.innerText.split("");
					let shuffleCount = 0;

					const shuffle = () => {
						// Shuffle the array using the Fisher-Yates algorithm
						for (let i = textArray.length - 1; i > 0; i--) {
							const j = Math.floor(Math.random() * (i + 1));
							[textArray[i], textArray[j]] = [
								textArray[j],
								textArray[i],
							];
						}

						textElement.innerText = textArray.join("");
						shuffleCount++;

						// If we haven't shuffled enough times yet, schedule the next shuffle
						if (shuffleCount < shufflePerSecond * 2) {
							timeoutId = setTimeout(shuffle, shuffleDelay);
						} else {
							// Otherwise, reset the text element to its original value
							textElement.innerText =
								originalTexts[
									Array.from(textElements).indexOf(
										textElement,
									)
								];
						}
					};
					shuffle();
				});
			});

			link.addEventListener("mouseleave", () => {
				clearTimeout(timeoutId);

				textElements.forEach((textElement, index) => {
					textElement.innerText = originalTexts[index];
				});
			});
		});
	</script>

	<!-- DEPIXELATE IMAGES ON LINK HOVER -->

	<!-- DEPIXELATE IMAGES ON LINK HOVER -->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
	></script>

	<script>
		const links = document.querySelectorAll(".featured-work__link");
		const filter = document.querySelector("#pixelate");
		const size = filter.querySelector("#size");
		const dot = filter.querySelector("#dot");
		const spacing = filter.querySelector("#spacing");

		const update = function (diameter) {
			const radius = diameter / 2;
			spacing.setAttribute("width", diameter);
			spacing.setAttribute("height", diameter);
			size.setAttribute("radius", radius);
		};

		const depixelate = function () {
			gsap.to(size, {
				duration: 1,
				attr: {
					diameter: 1,
				},
				ease: "SteppedEase.config(2)",
				onUpdate: () => {
					update(size.getAttribute("diameter"));
				},
			});
		};

		const pixelate = function () {
			gsap.to(size, {
				duration: 1,
				attr: {
					diameter: 48,
				},
				ease: "SteppedEase.config(2)",
				onUpdate: () => {
					update(size.getAttribute("diameter"));
				},
			});
		};

		links.forEach((link) => {
			link.addEventListener("mouseover", depixelate);
			link.addEventListener("mouseout", pixelate);
		});

		pixelate();
	</script>
	<script
		src="https://cdn.userway.org/widgetapp/2024-01-12-15-19-05/widget_app_base_1705072745529.js"
		async=""
		id="a11yWidgetSrc"
		crossorigin="anonymous"
		integrity="sha256-b6Q95rhF/g9Hl2DzRCQI7Bu1ykzIJ1MqxDlKlbizPh8="
	></script>
</svelte:head>

<Header />
<PointerComponent></PointerComponent>
<HeroComponent></HeroComponent>
<Text></Text>
<StepsComponent></StepsComponent>
<HorizontalCards></HorizontalCards>
<slot />

<Footer />
