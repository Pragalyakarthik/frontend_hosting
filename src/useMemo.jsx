let themestyle = useMemo(()=>{
    return{
        backgroundColor: dark? 'black' : 'white',
        color: dark? 'white':'black'
    }
},[dark])

useEffect(()=>{
    console.log("Theme Changed");
},[themestyle])

 ret