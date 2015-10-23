export const MOVE_ITEM = 'MOVE_ITEM';

export function moveItem(from, to) {
    return {
        type: MOVE_ITEM,
        from, to
    };
}