import useCat from "./useCat";
function FunImage (size) { 
    const cat = useCat(size);
    return (
        <div>{cat}</div>
    )
}

export default FunImage;