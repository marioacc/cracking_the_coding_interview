function drawLine(screen, width, x1, x2, y) {
    const start_offset = x1 % 8;
    let first_full_byte = x1 / 8;
    if (start_offset !== 0) {
        first_full_byte++;
    }

    const end_offset = x2 % 8;
    let last_full_byte = x2 / 8;
    if (end_offset !== 7) {
        last_full_byte--;
    }

    //Set full bytes.
    for (let b = first_full_byte; b <= last_full_byte; b++) {
        screen[(width / 8) * y + b] = 0xFF;
    }

    //Create masks for start and end of line
    const start_mask = (0xFF >> start_offset);
    const end_mask = ~(0xFF >> (end_offset + 1));

    //Set start and end of line
    if ((x1 / 8) === (x2 / 8)) {
        const mask = start_mask & end_mask;
        screen[(width / 8) * y + (x1 / 8)] |= mask;
    } else {
        if (start_offset !== 0) {
            const byte_number = (width / 8) * y + first_full_byte - 1;
            screen[byte_number] |= start_mask;
        }
        if (end_offset !== 7) {
            const byte_number = (width / 8) * y + last_full_byte + 1;
            screen[byte_number] |= end_mask;
        }
    }

}