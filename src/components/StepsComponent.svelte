<script lang="js">
import { sc_lc1_1Readable, sc_lc2_1Readable } from "../stores/scStore";
import { onDestroy } from "svelte";
    import { tmReadable } from "../stores/tmStore";
    import { sc_lc1_1Unsubscribe, sc_lc2_1Unsubscribe } from "../stores/scStore";
    onDestroy(() => {
        sc_lc1_1Unsubscribe();
        sc_lc2_1Unsubscribe();
    });

    let iABDataLocacion1_obj;

    // let iAADescripcion_arr = iAAData_obj.map((a) => a.tm2);
   	let pABData_arr = sc_lc1_1Readable.subscribe((data) => {
        iABDataLocacion1_obj = data;
    });
</script>
		<section id="work-process" class="section-4 sec-7">
				<div class="container-8">
					<div class="rating-grid">
						<div
							id="w-node-d5b53cf1-ffb7-4a4b-0a8c-e5e1b884bc38-3ff56c09"
							class="rating-left"
						>
							<div class="rating-hd">
								2023
							</div>
						</div>
						<div
							id="w-node-d5b53cf1-ffb7-4a4b-0a8c-e5e1b884bc3d-3ff56c09"
							class="rating-right"
						>
							<div class="rating-hd">
								Mis <br /> proyectos<br />
							</div>
							<div class="reviews">
								
							</div>
							{#each iABDataLocacion1_obj as {sc_1, sc_2}}
							<div class="review-grid">
								
								<div
									id="w-node-d5b53cf1-ffb7-4a4b-0a8c-e5e1b884bc56-3ff56c09"
									class="review-left"
								>
									<div class="review-name">{sc_1}</div>
								</div>
								<div
									id="w-node-d5b53cf1-ffb7-4a4b-0a8c-e5e1b884bc5c-3ff56c09"
									class="review-right"
								>
									<p class="review-pg">
										{sc_2}
									</p>
								</div>
							</div>
							{/each}
						</div>
					</div>
				</div>
			</section>