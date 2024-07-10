function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels("seeing"));

//null คือตัวที่ไม่มีข้อมูลออกมา