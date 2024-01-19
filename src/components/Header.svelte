<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";
    import { sc_lc1_1Readable, sc_lc2_1Readable } from "../stores/scStore";
    import { tmReadable } from "../stores/tmStore";
    import {
        sc_lc1_1Unsubscribe,
        sc_lc2_1Unsubscribe,
    } from "../stores/scStore";
    onDestroy(() => {
        sc_lc1_1Unsubscribe();
        sc_lc2_1Unsubscribe();
    });

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

<div
    data-animation="default"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navbar-2 w-nav"
>
    <div class="container-6 is-navbar contener _8">
<!-- Logo -->
        <a href="#intro" class="menu_link _00 w-inline-block"
            >
            <p class="menu_link-text _8 _888">
                {pAAFirstPerson_txt}
            </p>
            </a>

        <div
            class="menu-button-2 w-nav-button"
            style="-webkit-user-select: text;"
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
        >
            <div class="icon-2 w-icon-nav-menu"></div>
        </div>
        
        <nav role="navigation" class="menu w-nav-menu">
            <a href="#intro" class="menu_link w-inline-block w--current"
                >
               
                <p class="menu_link-text _8">
                    {pABTitulo_txt}
                </p>
               
            </a>
        </nav>
    </div>
    <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>
