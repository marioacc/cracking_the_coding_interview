let findBuildOrder = require("../../4.trees_and_graphs/7_build_order");

test('Finds proper build order', () => {
    const projects = ["a", "b", "c", "d", "e", "f"];
    const dependencies = [
        ["a", "d"],
        ["f", "b"],
        ["b", "d"],
        ["f", "a"],
        ["d", "c"],
    ];
    const buildOrder = ["e", "f", "b", "a", "d", "c"];
    const builtOrder = findBuildOrder(projects, dependencies).map((project) => project.name);
    expect(areArraysEquals(buildOrder, builtOrder)).toBeTruthy();
});

test('Return null on dependency loop', () => {
    const projects = ["a", "b", "c", "d", "e", "f"];
    const dependencies = [
        ["a", "d"],
        ["f", "b"],
        ["b", "d"],
        ["f", "a"],
        ["d", "c"],
        ["a", "f"]
    ];

    expect(findBuildOrder(projects, dependencies)).toBeNull();
});

function areArraysEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    return arr1.reduce((areEquals, element, idx) => {
        return areEquals && element === arr2[idx];
    }, true);
}