function createHiraganaList(prefixes) {
    if (prefixes[0] === "P") {
        prefixes = prefixes.slice(1)
    }

    let hiraganaList = Array()

    if (prefixes.includes("v")) {
        hiraganaList = hiraganaList.concat(["a", "i", "u", "e", "o"])
    }

    if (prefixes.includes("k")) {
        hiraganaList = hiraganaList.concat(["ka", "ki", "ku", "ke", "ko"])
    }

    if (prefixes.includes("s")) {
        hiraganaList = hiraganaList.concat(["sa", "shi", "su", "se", "so"])
    }

    if (prefixes.includes("t")) {
        hiraganaList = hiraganaList.concat(["ta", "chi", "tsu", "te", "to"])
    }

    if (prefixes.includes("n")) {
        hiraganaList = hiraganaList.concat(["na", "ni", "nu", "ne", "no"])
    }

    if (prefixes.includes("h")) {
        hiraganaList = hiraganaList.concat(["ha", "hi", "hu", "he", "ho"])
    }

    if (prefixes.includes("m")) {
        hiraganaList = hiraganaList.concat(["ma", "mi", "mu", "me", "mo"])
    }

    if (prefixes.includes("y")) {
        hiraganaList = hiraganaList.concat(["ya", "yu", "yo"])
    }

    if (prefixes.includes("r")) {
        hiraganaList = hiraganaList.concat(["ra", "ri", "ru", "re", "ro"])
    }

    if (prefixes.includes("w")) {
        hiraganaList = hiraganaList.concat(["n", "wa", "wo"])
    }

    if (prefixes.includes("b")) {
        hiraganaList = hiraganaList.concat(["ba", "bi", "bu", "be", "bo"])
    }

    if (prefixes.includes("p")) {
        hiraganaList = hiraganaList.concat(["pa", "pi", "pu", "pe", "po"])
    }

    if (prefixes.includes("d")) {
        hiraganaList = hiraganaList.concat(["da", "dzi", "dzu", "de", "do"])
    }

    if (prefixes.includes("z")) {
        hiraganaList = hiraganaList.concat(["za", "ji", "zu", "ze", "zo"])
    }

    if (prefixes.includes("g")) {
        hiraganaList = hiraganaList.concat(["ga", "gi", "gu", "ge", "go"])
    }

    return hiraganaList
}

function getRandomHiragana(hiraganaList) {
    for (let i = 0; i < 15; ++i) {
        let randomHiragana = hiraganaList[Math.floor(Math.random() * hiraganaList.length)]
        if (randomHiragana !== "error") {
            return randomHiragana
        }
    }

    return "error"
}