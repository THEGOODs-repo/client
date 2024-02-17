function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(originalDate.getDate()).padStart(2, '0'); 

    const formattedDate = `${year}년 ${month}월 ${day}일`;
    return formattedDate;
}
export default formatDate;