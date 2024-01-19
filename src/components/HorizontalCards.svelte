<script lang="js">
	import { onMount } from 'svelte';
	import { exReadable } from './../stores/exStore.ts';
    let iACExperiencies_arr;
    let pACExperiencies_void = exReadable.subscribe((data) => {
        iACExperiencies_arr = data.ex;
    });
    let pACFirstExperience_obj = iACExperiencies_arr[0]; 
    let pACExperienceCharasteristics = pACFirstExperience_obj.ex_dt;

    let counterOfExperience = 0;
    
    function increment(){
        counterOfExperience += 1;
    }; 

</script>

<section id="services" class="main-section-2">
    <div
        class="margin-bottom margin-small _3 _88"
    >
        <div class="max-width-large">
            <div
                class="margin-bottom margin-small _55"
            >
                <h2
                    class="text-size-large heading-span text-color-orange"
                >
                    Mis Habilidades
                </h2>
            </div>
        </div>
        <div class="what_we_do-wrapper-2"></div>
    </div>
    <div class="container-w1 gutter-outside">
        <div class="subtitle__wrapper"></div>
        <div
            class="w-layout-grid grid-leistungen"
        >
        {#each pACExperienceCharasteristics as {ex_dt1, ex_dt2}}
            <a
                href="#"
                hover-block-hover-color="#fcc63b"
                hover-block="component"
                hover-block-logo-color="#fcc63b"
                hover-block-logo-color-hover="#1b1b1b"
                data-w-id="a713bee9-47ad-66bc-65de-038b1e6381bc"
                class="block-2 _55543 _2 w-inline-block"
                >
                <div
                    class="block-content _44444"
                >
                    <div
                        class="grid-leistung__subtitle"
                    >
                        <div
                            hover-block="img"
                            class="subtitle-2 img"
                            style="color: rgb(252, 198, 59);"
                        >
                            
                        </div>
                    </div>
                    <div>
                        <h3 
                            hover-block="img"
                            class="heading-7 img"
                            style="color: rgb(252, 198, 59);"
                        >
                        {ex_dt1}
                        </h3>
                        <div
                            hover-block="img"
                            class="text-block-8 img"
                            style="color: rgb(252, 198, 59);"
                        >
                        {ex_dt2}
                        </div>
                    </div>
                </div>
                <div
                    class="block-content _44444"
                    hover-block="duplicate"
                    style="background-color: rgb(252, 198, 59); clip-path: circle(0% at 50% 50%);"
                >
                    <div
                        class="grid-leistung__subtitle"
                    >
                        <div
                            hover-block="img"
                            class="subtitle-2 img"
                            style="color: rgb(27, 27, 27);"
                        >
                          
                        </div>
                    </div>
                    <div>
                        <h3
                            hover-block="img"
                            class="heading-7 img"
                            style="color: rgb(27, 27, 27);"
                        >
                          {ex_dt1}
                        </h3>
                        <div
                            hover-block="img"
                            class="text-block-8 img"
                            style="color: rgb(27, 27, 27);"
                        >
                            {ex_dt2}
                        </div>
                    </div>
                </div>
            </a>
        {/each }
        </div>
    </div>
</section>