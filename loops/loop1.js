for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is Even`);
        continue;
    }
    if (i % 2 != 0) {
        console.log(`${i} is Odd`);

    }
}