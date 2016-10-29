function ClearText(txtValue /* parameter on which you will apply clear text logic */) {


    if (txtValue === null || typeof txtValue === "undefined") {
        throw new Error("Null or empty values are not allowed");
    }

    return String(txtValue)
        .replace(/[0-9]/g, "")
        .replace(/:/g, "")
        .replace(/\n/g, "")
        .replace(/\t/g, "")
        .replace(/\r/g, "")
        .replace(/,/g, "")
        .replace(/[]/g, "")
        .replace(/;/g, "")
        .replace(/!/g, "")
        .replace(/\"/g, "")
        .replace(/\'/g, "")
        .replace(/--/g, " ")
        .replace(/-/g, " ");
}

module.exports = ClearText;