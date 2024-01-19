<!-- AudioUploaderForm.svelte -->

<script>
    let fileInput;
    let responseMessage = "";

    async function handleSubmit() {

        const formData = new FormData();
        formData.append('audio', fileInput.files[0]);

        try {
            const response = await fetch('URL_DEL_SERVIDOR', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                responseMessage = 'Archivo de audio enviado con éxito.';
            } else {
                responseMessage = 'Error al enviar el archivo de audio.';
            }
        } catch (error) {
            responseMessage = 'Error al enviar el archivo de audio.';
            console.error(error);
        }
    }
</script>

<h1>Subir archivo de audio</h1>
<form on:submit={handleSubmit}>
    <label for="audioFile">Selecciona un archivo de audio:</label>
    <input type="file" bind:this={fileInput} id="audioFile" accept="audio/*" />
    <button type="submit">Enviar audio</button>
</form>
<p>{responseMessage}</p>
