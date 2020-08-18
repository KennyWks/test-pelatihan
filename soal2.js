function getValue(array, indexParam) {
    if (array.length == 0) {
        return "panjang array minimal 1";
    } else if (array[indexParam] === undefined) {
        return "array tidak memiliki index ke-" + indexParam;
    } else {
        return array[indexParam];
    }
}