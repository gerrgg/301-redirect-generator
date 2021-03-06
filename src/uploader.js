const Papa = require('papaparse')

const uploader = ( element ) => {
    /**
     * The upload file input
    */

    let textarea = document.getElementById('results')

    const convert = () => {
        /**
         * Validate attempted upload before we parse with PapaParse
         */

        if( checkFile( element.files[0] ) ){

            let file = element.files[0]

            Papa.parse(file, {
                delimiter: ",",
                complete: function(results) {
                    generate(results.data)
                }
            })
            
        } else {
            textarea.value = 'Make sure your are uploading a .csv file, please :)'
        }
    }

    const checkFile = ( file ) => {
        /**
         * Checks if the file is a file and is text/csv and size 0
         */
        return ( file && file.type == 'text/csv' && file.size > 0 )
    }

    const generate = ( array ) => {
        /**
         * Generates a list of 301 redirects from the CSV put in the file input
         */
        let string = '';

        console.log( array )

        array.forEach(row => {
            if( row[0].length && row[1].length ){
                string += `Redirect 301 ${row[0]} ${row[1]} \n`
            }
        });

        textarea.value = string
    }

    return { convert }
}

export { uploader }