<script lang="js">
	import { bfReadable } from "../stores/bfStore";
	let iADBenefits_obj;
	let pADBenefitsSubcribe_void = bfReadable.subscribe((data) =>{
		iADBenefits_obj = data;
	});
	let pADBenefitsByOrder_arr = iADBenefits_obj.bf_dt;
	let pADFirstBenefit_obj = pADBenefitsByOrder_arr[0];
	let pADTitleOfBenefit_txt = pADFirstBenefit_obj.bf_dt_1;
	// console.log(pADBenefitsByOrder_arr.bf_dt_1; 
	// let pADFirstBenefit_obj = pADBenefitsByOrder_arr[0];
</script>
			<div class="footer">
				<div id="contact" class="container-5 footer">
					<div class="flex-vertical-center">
						<div class="content-footer">
							<div class="footer-title-wrapper">
								<h1 class="title-h2">
									Hablemos sobre <em><br /></em>
								</h1>
							</div>
							<p class="p-footer">
								{pADTitleOfBenefit_txt}
							</p>
							<div class="div-block-285 _6765">
								<a
									data-w-id="6ade2900-0919-dd20-6167-7218858f6fa4"
									href="#"
									class="menu_link _1 _567 w-inline-block"
									>
									<p class="menu_link-text _2345">
										Conectemos
									</p></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>