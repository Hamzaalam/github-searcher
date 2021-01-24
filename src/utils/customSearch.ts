export const customSearch = async (keyWord: string, type: string) => {
    const searchQueryURL = `https://api.github.com/search/${type}?q=${keyWord}`;
    const response = await fetch(searchQueryURL);
    const result = await response.json();
    return result;
}