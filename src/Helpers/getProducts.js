// getProducts es una función que retorna un array de productos de la pagina dummyjson
export const getProducts = async () => {
    const resp = await fetch('https://dummyjson.com/products')
    const result = await resp.json()
    return result
}