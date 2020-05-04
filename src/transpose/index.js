/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) 
{
    //define array placeholder that will hold the input array when it is transposed 
    let arrayTransposed = [];

    //get the number of rows and columns in the array
    let rows = array.length;
    
    for (let row = 0; row < rows; row++)
    {
        //get the column length
        let cols = array[row].length;
        
        //if the array violate the constraints (i.e 1 <= m <= 10, 1 <= n <= 10) 
        //as stated in the readme.txt alert the user
        if (rows < 1 || cols < 1 || rows > 10  || cols > 10)
        {
            return `array rows or columns cannot be less than 1 or more than 10`;
        }
        else
        {   
            for (let col = 0; col < array[row].length; col++)
            {
            
                //if an element required a new row in the transpose   
                //array and it does not already exist,  create it.
                if (arrayTransposed[col] === undefined)
                {
                    arrayTransposed[col] = [];
                }

                //invert each element position in the input array while 
                //filling it to the transpose array  
                arrayTransposed[col][row] = array[row][col];

            }

        }
        
    }

    return arrayTransposed;

}

module.exports = transpose;
