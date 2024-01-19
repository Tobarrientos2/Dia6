<script>
	import { tmReadable } from "../stores/tmStore";

	let iAAMembers_array; 
	let pAAMembers = tmReadable.subscribe((data) => {
		iAAMembers_array = data["tm_mb"];
	});
	let pAAFirstMember_object = iAAMembers_array[0];
	let pAADescription_txt = pAAFirstMember_object.tm_mb3;
	let pAADescriptionSplited_arr = pAADescription_txt.split('.');
	let pAADescriptionWithBr_txt = pAADescriptionSplited_arr[0];
</script>
			<div id="works" class="div-block">
				<section id="who-we-are" class="section-who_we_are">
					<div id="about" class="padding-global">
						<div class="container-large">
							<div class="padding-section-large">
								<div class="max-width-full">
									<div class="margin-bottom margin-small">
										<div class="max-width-large">
											<div
												class="margin-bottom margin-small _98"
											>
												<h2
													class="text-size-large heading-span text-color-orange"
												>
													<strong class="bold-text"
														>Un poco sobre mi</strong
													>
												</h2>
											</div>
										</div>
										<div class="what_we_do-wrapper">
											<h3 class="skew-up split-lines">
												<div
													class="line"
													style="display: block; text-align: start; width: 100%;"
												>
												{@html pAADescriptionWithBr_txt}
													<div
														class="line-mask"
														style="width: 0%;"
													></div>
												</div>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>