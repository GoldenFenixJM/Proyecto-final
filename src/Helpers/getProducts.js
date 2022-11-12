export const getProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products')
    const result = await resp.json()
    //console.dir(result);
    return result
}