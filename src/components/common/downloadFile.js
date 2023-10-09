const downloadFile = (fileName, file) => {
    const aTag = document.createElement("a");
    aTag.href = file;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
};

export default downloadFile;