import { uploader } from './uploader'

const redirectGenerator = (() => { 
    /**
     * Variables and listeners
     */
    let upload = uploader( document.getElementById('file-input') );
    let convertButton = document.getElementById('convert-button');


    convertButton.addEventListener( 'click', upload.convert )
})()

