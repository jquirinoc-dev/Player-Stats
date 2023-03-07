export const handleMove = (id) => {
    const element = document.getElementById(id);
    const position = element.offsetTop;
    window.scrollTo(0, position + 500);
    console.log('move')
}