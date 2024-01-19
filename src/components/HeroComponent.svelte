<script lang="js">
import { tmReadable } from "../stores/tmStore.ts";
import { exReadable } from "../stores/exStore.ts";

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
</script>

<main class="main">
    <section class="section">
        <div
            class="content words lines splitting"
            style="--word-total: 103; --line-total: 4;"
        >
            <div class="main-section">
                <div class="hero ls-6">
                
                    <!-- Start of all -->
                    <div
                        data-w-id="234102a6-37f8-836c-b173-ec2a241bfdb2"
                        class="text-ticker_component-2"
                    >
                        <div class="text-ticker_mask2"></div>
                        <div class="text-ticker_mask1"></div>
                    </div>
                    <div class="course-note">
                        <div class="div-block-284"></div>
                        <div
                            class="scramble-text text-size-xl text-weight-light"
                        >
                            {pACTitleOfCharasteristic_txt}
                        </div>
                    </div>
                </div>
                <div class="hero-bg-wrapper-2">
                    <img
                        src={pAAFirstMemberImage_txt}
                        loading="lazy"
                        srcset={pAAFirstMemberImage_txt}
                        alt=""
                        class="image-12"
                    />
                </div>
            </div>
        </div>
    </section>
</main>